import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  Dimensions,
  Modal,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Image, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import avatar1 from '../../assets/avatar1.jpg';
// @ts-ignore
import avatar2 from '../../assets/avatar2.png';
// @ts-ignore
import avatar3 from '../../assets/avatar3.png';
import Geolocation from '@react-native-community/geolocation';
import {addDoc, collection} from 'firebase/firestore';
import {database} from '../../config/firebase';

const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    title: '',
    data: [
      {
        id: 1,
        name: 'Clair John',
        designation: 'Project Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar1,
      },
      {
        id: 2,
        name: 'John John',
        designation: 'IT Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar2,
      },
      {
        id: 3,
        name: 'Stephnie Almond',
        designation: 'HR Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar3,
      },
      {
        id: 4,
        name: 'Clair John',
        designation: 'Project Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar1,
      },
      {
        id: 5,
        name: 'John John',
        designation: 'IT Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar2,
      },
      {
        id: 6,
        name: 'Stephnie Almond',
        designation: 'HR Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar3,
      },
      {
        id: 7,
        name: 'Stephnie Almond',
        designation: 'HR Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar3,
      },
    ],
  },
];

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
  return true;
};

const History = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const onCardPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

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

  useEffect(() => {
    const requestPermission = async () => {
      const granted = await requestLocationPermission();
      if (granted) {
        console.log('Location permission granted');
        setPermissionGranted(true);
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
    };

    requestPermission();
  }, []);

  const handleNavigateToMap = () => {
    if (location) {
      navigation.navigate('Map', {location});
    } else {
      Alert.alert('Error', 'Location is not available.');
    }
  };
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <SectionList
        sections={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onCardPress()}>
            <View style={styles.item}>
              <Image source={item.image} style={styles.avatar} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.designation}>{item.designation}</Text>
                <Text style={styles.workTime}>{item.workTime}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => <></>}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Trace employee</Text>
            <Text style={styles.modalDescription}>
              Lorem ipsum dolor sit amet consectetur. Sagittis pellentesque eu
              sem sodales ut. Lorem sed mi duis nibh at fringilla nunc consequat
              parturient. In aliquam quis aliquam libero in. Vel feugiat tempor
              eget faucibus lorem laoreet.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={handleNavigateToMap}>
                <Text style={styles.buttonText}>Location</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
                <Text style={styles.buttonText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#E5E5E540',
    borderRadius: 8,
    marginLeft: 18,
    marginRight: 18,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 14,
    color: '#555',
  },
  workTime: {
    fontSize: 12,
    color: '#999',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    width: '100%',
    height: windowHeight * 0.4,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default History;
