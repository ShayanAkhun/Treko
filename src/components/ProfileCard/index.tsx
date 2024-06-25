import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed';
// @ts-ignore
import avatar1 from "../../assets/avatar1.jpg"
import { IconLibrary } from '../Icons/IconsLibarary';

const ProfileCard = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={avatar1} alt='avatar1' style={styles.avatar} />
                </View>
                    <Text style={styles.text}>Hannah Montana</Text>
                <TouchableOpacity style={styles.button}>
                    <IconLibrary.FontAwesome5 name='edit' size={20} color="#333434" />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#BEDBEB",
        borderRadius: 16,
        flexDirection: "row",
        height: "40%",
        left: 20,
        justifyContent:"flex-start",
        alignItems: 'center'
    },
    card: {
        marginLeft: 20,
        flexDirection: "row",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    }, text: {
        textAlign: 'center',
        color: '#333434',
        fontSize:16
    }, button: {
        left:125,top:30
    }
})