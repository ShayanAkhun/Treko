import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ActionSheet, {
  SheetManager,
  ActionSheetRef,
} from 'react-native-actions-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

const Map = ({route}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const {location} = route.params;
  useFocusEffect(
    useCallback(() => {
      if (actionSheetRef.current) {
        actionSheetRef.current.show();
      }
    }, []),
  );

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
          />
        </MapView>
      </View>
      <ActionSheet
        ref={actionSheetRef}
        id="MaiActionSheet"
        defaultOverlayOpacity={0}
        overlayColor="transparent"
        containerStyle={{
          ...styles.actionSheetContainer,
          height: windowHeight * 0.33,
        }}
        backgroundInteractionEnabled={true}
        isModal={false}>
        <View style={styles.actionSheetContent}>
          <Text style={styles.actionSheetText}>
            {' '}
            <Text></Text>
          </Text>
        </View>
      </ActionSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    height: 570,
    width: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  actionSheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionSheetContent: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  actionSheetText: {
    fontSize: 28,
    textAlign: 'center',
    color: 'black',
  },
});

export default Map;
