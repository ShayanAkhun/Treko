import React, {useCallback, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, SectionList} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {StatusBar} from "expo-status-bar";
import {Image} from "@rneui/themed";
// @ts-ignore
import avatar1 from '../../assets/avatar1.jpg';
// @ts-ignore
import avatar2 from "../../assets/avatar2.png";
// @ts-ignore
import avatar3 from "../../assets/avatar3.png";
import HistoryBottomSheet, {HistoryBottomSheetRefProps} from './HistoryBottomSheet.tsx';




const DATA = [
    {
        title: "",
        data: [
            {
                id: 1,
                name: "Clair John",
                designation: "Project Manager",
                workTime: "8:00 am - 5:00 pm",
                image: avatar1
            },
            {
                id: 2,
                name: "John John",
                designation: "IT Manager",
                workTime: "8:00 am - 5:00 pm",
                image: avatar2
            },
            {
                id: 3,
                name: "Stephnie Almond",
                designation: "HR Manager",
                workTime: "8:00 am - 5:00 pm",
                image: avatar3
            },  {
                id: 4,
                name: "Clair John",
                designation: "Project Manager",
                workTime: "8:00 am - 5:00 pm",
                image: avatar1
            },
            {
                id: 5,
                name: "John John",
                designation: "IT Manager",
                workTime: "8:00 am - 5:00 pm",
                image: avatar2
            },
            {
                id: 6,
                name: "Stephnie Almond",
                designation: "HR Manager",
                workTime: "8:00 am - 5:00 pm",
                image: avatar3
            }

        ]
    }
];




const HistoryScreen =()=> {
    const ref = useRef<HistoryBottomSheetRefProps>(null);

    const onPress = useCallback(() => {
      const isActive = ref?.current?.isActive();
      if (isActive) {
        ref?.current?.scrollTo(0);
      } else {
        ref?.current?.scrollTo(-200);
      }
    }, []);
    return (

        <SafeAreaView style={styles.safeareaContainer}>
            <SectionList
                sections={DATA}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={onPress}>
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
                renderSectionHeader={({ section: { title } }) => (
                    <></>
                )}
            />
        <GestureHandlerRootView style={{flex:1}}>
            <View style={styles.container}>
                <StatusBar style="light" />
            </View>
             <HistoryBottomSheet ref={ref}/>
        </GestureHandlerRootView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    safeareaContainer: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    touchable: {
        top:500,
            justifyContent:'center'
    },
    text: {
        textAlign: 'center',
        alignItems: 'center',
        color:'black'
    }, item: {
        flexDirection: 'row',
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#E5E5E540',
        borderRadius: 8,
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
});

export default HistoryScreen