import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { Icon } from '../components';
import {HistoryStack} from '../stacks/HistoryStack';
import { LocationStack } from '../stacks/LocationStack';
import { MenuStack } from '../stacks/MenuStack';
import { ChatStack } from '../stacks/ChatStack.tsx';
import { SettingStack } from '../stacks/SettingStack';
import { View,StyleSheet } from 'react-native';
import {IconLibrary} from "../components/Icons/IconsLibarary.tsx";



const Tabs = createBottomTabNavigator();

export const MainTabs: React.FC = () => {
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
        tabBarStyle: (route.name === 'Chat') ? { display: 'none' } : styles.tabBarStyle,
    }),
    [],
);

const tabBar = useMemo<React.ComponentProps<typeof Tabs.Navigator>['tabBar']>(() => undefined, []);

    const sceneContainerStyle = useMemo<React.ComponentProps<typeof Tabs.Navigator>['sceneContainerStyle']>(
        () => ({}),
        [],
    );

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
        // position: 'absolute',
        height: 60,
            borderRadius:20,
    },
});