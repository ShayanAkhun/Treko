import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {StatusBar} from "expo-status-bar";
// import BottomSheet from "../../components/BottomSheet/BottomSheet.tsx";
import Map from "../../components/Map/Map.tsx"


const LocationScreen = () => {


    return (
        <>
            {/* <GestureHandlerRootView style={{flex:1}}> */}
                {/* <View style={styles.container}> */}
                    {/* <Map/> */}
                 {/* <StatusBar style="light" /> */}
                 {/* <BottomSheet/> */}
                {/* </View> */}
            {/* </GestureHandlerRootView> */}
            <Text>Map</Text>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default LocationScreen;
