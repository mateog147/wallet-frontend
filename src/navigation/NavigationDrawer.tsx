import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {TabNavigation} from './TabNavigation';
import {ChangePasswordScreen} from '../screens/ChangePasswordScreen';
import {ThemesScreen} from '../screens/ThemesScreen';
import {TypedNavigator} from '@react-navigation/native';

const Drawer: TypedNavigator<any, any, any, any, any> = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          headerStyle: {
            backgroundColor: '#1554F6',
          },
        }}
        name="Change your password"
        component={ChangePasswordScreen}
      />
      <Drawer.Screen
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          headerStyle: {
            backgroundColor: '#1554F6',
          },
        }}
        name="Change app theme"
        component={ThemesScreen}
      />
      <Drawer.Screen
        name="home"
        component={StackNavigation}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MyApp"
        component={TabNavigation}
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          drawerItemStyle: {display: 'none'},
          headerStyle: {
            backgroundColor: '#1554F6',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
