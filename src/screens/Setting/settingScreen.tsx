import React from 'react';
import { View, Text, Image, Switch, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Avatar } from '@rneui/base';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
// @ts-ignore
import Avatar1 from "../../assets/avatar1.jpg"
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

interface IProps {}

export const profileSetting: React.FC<IProps> = () => {
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  const data = [
    {
      title: 'Edit my Profile',
      onPress: () => {
        navigation.navigate('userSetting');
      },
      iconName: 'medkit',
    },

    {
      title: 'Log out',
      onPress: () => onSignOut(),
      iconName: 'ios-log-out-outline',
    },
  ];

  return (
    <View>
      <View style={styles.headerContainer} />

      <View style={styles.profileContainer}>
        <Avatar
          rounded
          source={Avatar1}
          size="large"
          containerStyle={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Bryce Hall</Text>
          <Text style={styles.profileEmail}>test@gmail.com</Text>
        </View>
 
      </View>

      <View style={styles.listContainer}>
        {data.map((item, index) => (
          <ListItem key={index} bottomDivider onPress={item.onPress}>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0392CE',
    height: 120,
  },
  profileContainer: {
    marginTop: -45,
    marginHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#D8D8D8',
    marginLeft: 16,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileEmail: {},
  listContainer: {
    marginTop: 8,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default profileSetting;
