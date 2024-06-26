import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {addDoc, collection} from 'firebase/firestore';
import {database} from '../../config/firebase';
import {IconLibrary} from '../../components/Icons/IconsLibarary';
import {Divider, ListItem} from '@rneui/themed';

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Permission',
          message:
            'This app needs access to your location so we can know where you are.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // For iOS or other platforms where permission is not required
};

const Menu = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const saveLocationToFirestore = async (
    latitude: number,
    longitude: number,
  ) => {
    try {
      await addDoc(collection(database, 'locations'), {
        latitude,
        longitude,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const fetchCurrentLocation = async () => {
    try {
      const permissionGranted = await requestLocationPermission();
      if (permissionGranted) {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setLocation({latitude, longitude});
            saveLocationToFirestore(latitude, longitude);
          },
          error => {
            setErrorMsg(error.message);
          },
          {enableHighAccuracy: true, maximumAge: 10000},
        );
      } else {
        console.warn('Location permission not granted');
        setErrorMsg('Location permission not granted');
      }
    } catch (error) {
      console.error('Error requesting location permission: ', error);
      setErrorMsg('Error requesting location permission');
    }
  };

  useEffect(() => {
    fetchCurrentLocation();
  }, []); // Fetch location on initial render

  useEffect(() => {
    navigation.setOptions({title: 'Menu'}); // Set the header title here
  }, [navigation]);

  const handleNavigateToMap = () => {
    if (location) {
      navigation.navigate('Map', {location});
    } else {
      Alert.alert('Error', 'Location is not available.');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={styles.viewContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              navigation.navigate('HistoryScreen');
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconLibrary.MaterialIcons
                name="chat-bubble-outline"
                size={24}
                color="#444444"
              />
              <Text style={{color: '#444444', fontSize: 24, marginLeft: 14}}>
                Chat
              </Text>
            </View>
            <ListItem.Chevron size={28} color="#09648C" />
          </TouchableOpacity>
        </View>
        <View style={styles.locationContainer}>
          <TouchableOpacity
            style={styles.locationTouchable}
            onPress={handleNavigateToMap}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconLibrary.Octicons name="location" size={24} color="#444444" />
              <Text style={{color: '#444444', fontSize: 24, marginLeft: 14}}>
                Location
              </Text>
            </View>
            <ListItem.Chevron size={28} color="#09648C" />
          </TouchableOpacity>
        </View>
        <Divider
          color="#bedbebbff"
          style={{backgroundColor: '#bedbebbff', marginVertical: 20}}
        />
        <View style={{flexDirection: 'row', gap: 18, justifyContent: 'center'}}>
          <View style={styles.userContainer}>
            <TouchableOpacity
              style={styles.userTouchable}
              onPress={() => {
                navigation.navigate('HistoryScreen');
              }}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <IconLibrary.Octicons name="person" size={72} color="#09648C" />
                <Text>User</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.userContainer}>
            <TouchableOpacity
              style={styles.userTouchable}
              onPress={() => {
                navigation.navigate('Settings');
              }}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <IconLibrary.Octicons name="gear" size={72} color="#09648C" />
                <Text>Setting</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {errorMsg && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMsg}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  container: {
    width: '90%',
    backgroundColor: '#e5e5e540',
    borderRadius: 20,
    height: '10%', // Adjust the height as needed
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
  },
  locationContainer: {
    width: '90%',
    backgroundColor: '#e5e5e540',
    borderRadius: 20,
    height: '10%', // Adjust the height as needed
    justifyContent: 'center',
    marginVertical: 10,
  },
  locationTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
  },
  userContainer: {
    width: '40%',
    borderColor: '#c7e1f0',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  userTouchable: {
    width: '100%', // Ensure touchable area is within the container
  },
  errorContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
