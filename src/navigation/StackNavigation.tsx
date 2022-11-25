import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginUserScreen} from '../screens/LoginUserScreen';
import {LoginPasswordScreen} from '../screens/LoginPasswordScreen';
import {LaunchScreen} from '../screens/LaunchScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Launch" component={LaunchScreen} />
      <Stack.Screen name="LoginUserScreen" component={LoginUserScreen} />
      <Stack.Screen
        name="LoginPasswordScreen"
        component={LoginPasswordScreen}
      />
    </Stack.Navigator>
  );
};
