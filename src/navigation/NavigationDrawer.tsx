import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {TabNavigation} from './TabNavigation';
import {ChangePasswordScreen} from '../screens/ChangePasswordScreen';
import {ThemesScreen} from '../screens/ThemesScreen';
import {TypedNavigator} from '@react-navigation/native';
import {SideMenu} from '../components/organisms/SideMenu';
import {MyDrawerContentComponentProps} from '../interfaces/MyDrawerContentComponentProps';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';

const Drawer: TypedNavigator<any, any, any, any, any> = createDrawerNavigator();

export function MyDrawer() {
  const {client} = useSelector((state: RootState) => state.client);
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        unmountOnBlur: true,
        headerStyle: {
          backgroundColor: client.appColor ?? '#1554F6',
        },
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
        }}
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Drawer.Screen
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
        }}
        name="ThemesScreen"
        component={ThemesScreen}
      />
    </Drawer.Navigator>
  );
}
