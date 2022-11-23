import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {StackNavigation} from './StackNavigation';
import {TabNavigation} from './TabNavigation';

function Feed({navigation}: MyStackScreenProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Notifications({navigation}: MyStackScreenProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="home">
      <Drawer.Screen name="Cambiar contraseña" component={Feed} />
      <Drawer.Screen name="Cambiar tema del app" component={Notifications} />
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
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
}
