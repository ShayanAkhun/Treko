import React, { useState, } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';


const Map = () => {
  const [modalVisible, setModalVisible] = useState(true);




  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 40.7484,
            longitude: 73.9857,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: 40.7484,
              longitude: 73.9857,
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

              <Text style={styles.addressText}>
                Jason is currently in New York
              </Text>

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