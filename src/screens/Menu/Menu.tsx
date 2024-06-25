import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IconLibrary } from '../../components/Icons/IconsLibarary'
import { Divider } from '@rneui/themed'

const Menu = () => {
  return (
    <SafeAreaView>
            <View style={styles.Viewcontainer}>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <IconLibrary.Octicons name="chat-bubble-outline" size={24}/>
                        <Text>Chat</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <IconLibrary.Octicons name="location" size={24}/>
                        <Text>Location</Text>
                    </TouchableOpacity>
                </View>
                <Divider/>
                <View>

                <View>
                    <IconLibrary.Octicons name ="person" size={24}/>
                        <Text>Users</Text>
                </View>    <View>
                    <IconLibrary.Octicons name ="gear" size={24}/>
                        <Text>Setting</Text>
                </View>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default Menu

const styles= StyleSheet.create({

    Viewcontainer: {
        flexDirection:"row",
        justifyContent: 'center'
    },
    container : {
        width:"80%",
        backgroundColor: "#E5E5E540 25%",
        borderRadius:20
    }
})