import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { IconLibrary } from '../../components/Icons/IconsLibarary';
import { Divider } from '@rneui/themed';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View style={styles.viewContainer}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.touchable} onPress={() => { navigation.navigate("Chat") }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconLibrary.MaterialIcons name="chat-bubble-outline" size={24} color="#444444" />
                            <Text style={{ color: "#444444", fontSize: 24, marginLeft: 14 }}>Chat</Text>
                        </View>
                        <ListItem.Chevron size={28} color="#09648C" />
                    </TouchableOpacity>
                </View>
                <View style={styles.locationContainer}>
                    <TouchableOpacity style={styles.locationTouchable} onPress={() => { navigation.navigate("Location") }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconLibrary.Octicons name="location" size={24} color="#444444" />
                            <Text style={{ color: "#444444", fontSize: 24, marginLeft: 14 }}>Location</Text>
                        </View>
                        <ListItem.Chevron size={28} color="#09648C" />
                    </TouchableOpacity>
                </View>
                <Divider color='#bedbebbff' style={{ backgroundColor: "#bedbebbff", marginVertical: 20 }} />
                <View style={{ flexDirection: 'row', gap: 18, justifyContent: 'center' }}>
                    <View style={styles.userContainer}>
                        <TouchableOpacity style={styles.userTouchable} onPress={() => { navigation.navigate("HistoryScreen") }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <IconLibrary.Octicons name="person" size={72} color="#09648C" />
                                <Text>User</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userContainer}>
                        <TouchableOpacity style={styles.userTouchable} onPress={() => { navigation.navigate("Settings") }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <IconLibrary.Octicons name="gear" size={72} color="#09648C" />
                                <Text>Setting</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Menu;

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: 'center',
        gap: 8,
    },
    container: {
        width: "90%",
        backgroundColor: "#e5e5e540",
        borderRadius: 20,
        height: "10%", // Adjust the height as needed
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
        width: "90%",
        backgroundColor: "#e5e5e540",
        borderRadius: 20,
        height: "10%", // Adjust the height as needed
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
        width: "40%",
        borderColor: '#c7e1f0',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    userTouchable: {
        width: '100%', // Ensure touchable area is within the container
    }
});
