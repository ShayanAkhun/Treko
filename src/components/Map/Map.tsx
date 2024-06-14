import React, {useState} from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import GetLocation from 'react-native-get-location'


const [premissionGranted, setpremissionGranted] = useState(false)

const Map =()=> {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 35.8026,
                    longitude:74.9832,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
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