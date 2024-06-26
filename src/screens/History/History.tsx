import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  Dimensions,
} from 'react-native';
import { Image } from '@rneui/themed';
// @ts-ignore
import avatar1 from '../../assets/avatar1.jpg';
// @ts-ignore
import avatar2 from '../../assets/avatar2.png';
// @ts-ignore
import avatar3 from '../../assets/avatar3.png';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ActionSheet, {
  SheetManager,
  ActionSheetRef,
} from 'react-native-actions-sheet';
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    title: '',
    data: [
      {
        id: 1,
        name: 'Clair John',
        designation: 'Project Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar1,
      },
      {
        id: 2,
        name: 'John John',
        designation: 'IT Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar2,
      },
      {
        id: 3,
        name: 'Stephnie Almond',
        designation: 'HR Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar3,
      },
      {
        id: 4,
        name: 'Clair John',
        designation: 'Project Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar1,
      },
      {
        id: 5,
        name: 'John John',
        designation: 'IT Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar2,
      },
      {
        id: 6,
        name: 'Stephnie Almond',
        designation: 'HR Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar3,
      },
      {
        id: 7,
        name: 'Stephnie Almond',
        designation: 'HR Manager',
        workTime: '8:00 am - 5:00 pm',
        image: avatar3,
      },
    ],
  },
];

const History = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const onCardPress =()=> {
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>

      <SafeAreaView style={styles.safeareaContainer}>
        <SectionList
          sections={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> onCardPress()}>
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
          renderSectionHeader={({ section: { title } }) => <></>}
        />
      </SafeAreaView>
      <ActionSheet
        ref={actionSheetRef}
        id="CardSheet"
        defaultOverlayOpacity={0}
        overlayColor="transparent"
        containerStyle={{
          ...styles.actionSheetContainer,
          height: windowHeight * 0.33,
        }}
        >
       <View style={styles.actionSheetContent}>
          <Text style={styles.actionSheetText}>Test text</Text>
          <Text style={styles.actionSheetSubText}>Test text 1</Text>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#E5E5E540',
    borderRadius: 8,
    marginLeft: 18,
    marginRight: 18,
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
  }
  ,
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
  }
  ,

  actionSheetSubText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default History;
