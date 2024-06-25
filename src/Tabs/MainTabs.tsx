import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {HistoryStack} from '../stacks/HistoryStack';
import { LocationStack } from '../stacks/LocationStack';
import { MenuStack } from '../stacks/MenuStack';
import { ChatStack } from '../stacks/ChatStack.tsx';
import { SettingStack } from '../stacks/SettingStack';
import { View,StyleSheet, ActivityIndicator, Alert, Platform } from 'react-native';
import {IconLibrary} from "../components/Icons/IconsLibarary.tsx";
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../config/firebase.js';



const Tabs = createBottomTabNavigator();

export const MainTabs: React.FC = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const requestLocationPermission = async () => {
    //       const result = await request(
    //         Platform.OS === 'android' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    //       );
    
    //       if (result === RESULTS.GRANTED) {
    //         Geolocation.getCurrentPosition(
    //           position => {
    //             const { latitude, longitude } = position.coords;
    //             setLocation({ latitude, longitude });
    //             setIsLoading(false);
    //             saveLocationToFirestore(latitude, longitude);
    //           },
    //           error => {
    //             setErrorMsg(error.message);
    //             setIsLoading(false);
    //           },
    //           { enableHighAccuracy: true, maximumAge: 10000 },
    //         );
    //       } else {
    //         setErrorMsg('Location permission denied');
    //         setIsLoading(false);
    //       }
    //     };
    
    //     requestLocationPermission();
    //   }, []);
      const saveLocationToFirestore = async (latitude: number, longitude: number) => {
        try {
          await addDoc(collection(database, 'locations'), {
            latitude,
            longitude,
            timestamp: new Date(),
          });
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      };

    const screenOptions = useCallback<
    NonNullable<Exclude<React.ComponentProps<typeof Tabs.Navigator>['screenOptions'], BottomTabNavigationOptions>>
>(
    ({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
            const icons: { [route: string]: React.ReactNode } = {
                History: focused ? (
                    <IconLibrary.Octicons name="history" size={24} color="#fff"  />
                ) : (
                    <IconLibrary.Octicons name="history" size={24} color="#fff"  />
                ),
                Location: focused ? (
                   <IconLibrary.Octicons name="location" size={24} color="#ffff"/>
                ) : (
                    <IconLibrary.Octicons name="location" size={24} color="#ffff"/>
                ),
                Menu: focused ? (
                    <IconLibrary.Octicons name="apps" size={24} color="#ffff"/>
                ) : (
                    <IconLibrary.Octicons name="apps" size={24} color="#ffff"/>
                ),
                Chat: focused ? (
                    <IconLibrary.MaterialIcons name="chat-bubble-outline" size={24} color="#ffff" />
                ) : (
                    <IconLibrary.MaterialIcons name="chat-bubble-outline" size={24} color="#ffff" />
                ),
                Settings: focused ? (
                    <IconLibrary.Octicons name="gear" size={24} color="#ffff"/>
                ) : (
                    <IconLibrary.Octicons name="gear" size={24} color="#ffff"/>
                ),
            };

            return icons[route.name];
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarAllowFontScaling: true,
        tabBarLabelPosition: 'below-icon',
        tabBarBadgeStyle: { position: 'absolute' },
        tabBarBackground: () => <View  style={{backgroundColor: '#09648c', flex:1,borderTopLeftRadius:20,borderTopRightRadius:20}} />,
        tabBarStyle: (route.name === 'Chat' || route.name === 'userSetting') ? { display: 'none' } : styles.tabBarStyle,zIndex: 2 
    }),
    [],
);

const tabBar = useMemo<React.ComponentProps<typeof Tabs.Navigator>['tabBar']>(() => undefined, []);

    const sceneContainerStyle = useMemo<React.ComponentProps<typeof Tabs.Navigator>['sceneContainerStyle']>(
        () => ({}),
        [],
    );
    if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        );
      }
    
      if (errorMsg) {
        Alert.alert('Error', errorMsg);
      }
    return (
        <Tabs.Navigator screenOptions={screenOptions} sceneContainerStyle={sceneContainerStyle} tabBar={tabBar}>
            <Tabs.Screen
                name="History"
                component={HistoryStack}
                options={{
                    headerShown: false,
                    title: ''
                }}
            />
            <Tabs.Screen name="Location" component={LocationStack} options={{ headerShown: false, title: '' }} />
            <Tabs.Screen
                name="Menu"
                component={MenuStack}
                options={{ headerShown: false, title: '' }}
            />
            <Tabs.Screen name="Chat" component={ChatStack} options={{ headerShown: false, title: '' }} />
            <Tabs.Screen
                name="Settings"
                component={SettingStack}
                options={{ headerShown: true, title: '' }}
            />
        </Tabs.Navigator>
    );
};
const styles = StyleSheet.create({
    tabBarBackground: {
        backgroundColor: '#09648c',
    },
    tabBarStyle: {
        height: 60,
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
    },
});

function saveLocationToFirestore(latitude: number, longitude: number) {
    throw new Error('Function not implemented.');
}
