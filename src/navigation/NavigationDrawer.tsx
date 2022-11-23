import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LoginUserScreen} from '../screens/LoginUserScreen';
import {LoginPasswordScreen} from '../screens/LoginPasswordScreen';
import {StackNavigation} from './StackNavigation';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="LoginUserScreen">
      <Drawer.Screen name="LoginUserScreen" component={LoginUserScreen} />
      <Drawer.Screen
        name="LoginPasswordScreen"
        component={LoginPasswordScreen}
      />
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
};
