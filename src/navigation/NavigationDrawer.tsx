import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {TabNavigation} from './TabNavigation';
import {ChangePasswordScreen} from '../screens/ChangePasswordScreen';
import {ThemesScreen} from '../screens/ThemesScreen';
import {TypedNavigator} from '@react-navigation/native';
import {SideMenu} from '../components/organisms/SideMenu';
import {MyDrawerContentComponentProps} from '../interfaces/MyDrawerContentComponentProps';

const Drawer: TypedNavigator<any, any, any, any, any> = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        unmountOnBlur: true,
      }}
      drawerContent={(props: MyDrawerContentComponentProps) => (
        <SideMenu {...props} />
      )}>
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
      <Drawer.Screen
        name="home"
        component={StackNavigation}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          headerStyle: {
            backgroundColor: '#1554F6',
          },
        }}
        name="ChangePasswordScreen"
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
        name="ThemesScreen"
        component={ThemesScreen}
      />
    </Drawer.Navigator>
  );
}
