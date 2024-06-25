import React, {useState} from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import GetLocation from 'react-native-get-location'


// const [premissionGranted, setpremissionGranted] = useState(false)

const Map =()=> {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 40.7128,
                    longitude:-74.0060,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
            />
        </View>
    )
}

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

});

export default Map