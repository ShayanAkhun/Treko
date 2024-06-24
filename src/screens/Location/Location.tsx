import React, { useCallback, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Map from '../../components/Map/Map';
import ActionSheet, { SheetManager,ActionSheetRef } from 'react-native-actions-sheet';
import { useFocusEffect } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const LocationScreen = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  useFocusEffect(
    useCallback(() => {
      if (actionSheetRef.current) {
        actionSheetRef.current.show();
      
      }
    }, [])
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Map />
        <StatusBar style="light" />
      </View>
      <ActionSheet
      ref={actionSheetRef}
       id="MaiActionSheet"
      defaultOverlayOpacity={0}
      overlayColor='transparent'
      containerStyle={{ ...styles.actionSheetContainer, height: windowHeight * 0.33 }}
      backgroundInteractionEnabled={true}
      isModal={false}
    >
      <View style={styles.actionSheetContent}>
        <Text style={styles.actionSheetText}> <Text></Text></Text>
      </View>

    </ActionSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: "#ffffff"
  },
  actionSheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#C4C4C4',
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

export default LocationScreen;
