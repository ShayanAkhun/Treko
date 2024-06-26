import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Icon} from '@rneui/themed';

const windowHeight = Dimensions.get('window').height;

const Map = ({route}) => {
  const {location} = route?.params;
  const [modalVisible, setModalVisible] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location) {
      fetchAddress(location.latitude, location.longitude);
    }
  }, [location]);

  const fetchAddress = async (latitude, longitude) => {
    try {
      setLoading(true);
      // Replace with your reverse geocoding API call
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBxOtziYbuxRGtN3yQ7fZfLeyqC30pm7Qo`,
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const address = data.results[0].formatted_address;
        setCurrentLocation({...location, address});
      } else {
        setCurrentLocation({...location, address: 'Address not found'});
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setCurrentLocation({...location, address: 'Error fetching address'});
    } finally {
      setLoading(false);
    }
  };

  if (!currentLocation) return <Text>Loading....</Text>;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Your Location"
          />
        </MapView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search..."
              placeholderTextColor="#999"
            />
            <Text style={styles.title}>Clair John is nearby</Text>
            <View style={styles.addressContainer}>
              <Icon name="location-pin" type="entypo" color="#000" />
              {loading ? (
                <ActivityIndicator size="small" color="#999" />
              ) : (
                <Text style={styles.addressText}>
                  {currentLocation.address || 'Fetching address...'}
                </Text>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
    alignItems: 'center',
    height: 250,
  },
  searchBar: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addressText: {
    fontSize: 16,
    marginLeft: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Map;
