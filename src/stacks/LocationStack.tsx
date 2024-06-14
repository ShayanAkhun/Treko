import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationScreen from "../screens/Location/Location.tsx";
const Stack = createNativeStackNavigator();
export  const LocationStack = () => {
  return (   <Stack.Navigator initialRouteName="Find">
          <Stack.Screen
              name="LocationScreen"
              component={LocationScreen}
              options={{
                  headerShown: false,
                  title: 'Find',
              }}
          />

      </Stack.Navigator>
  );
}


;