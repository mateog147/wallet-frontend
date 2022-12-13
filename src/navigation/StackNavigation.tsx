import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginUserScreen} from '../screens/LoginUserScreen';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {LaunchScreen} from '../screens/LaunchScreen';
import {RegisterFormScreen} from '../screens/RegisterFormScreen';

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
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegisterFormScreen" component={RegisterFormScreen} />
    </Stack.Navigator>
  );
};
