import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pantalla1Screen} from '../screens/Pantalla1Screen';
import {Pantalla2Screen} from '../screens/Pantalla2Screen';
import {Pantalla3Screen} from '../screens/Pantalla3Screen';
import {LoginUserScreen} from '../screens/LoginUserScreen';
import {LoginPasswordScreen} from '../screens/LoginPasswordScreen';

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
      <Stack.Screen name="LoginUserScreen" component={LoginUserScreen} />
      <Stack.Screen
        name="LoginPasswordScreen"
        component={LoginPasswordScreen}
      />
    </Stack.Navigator>
  );
};
