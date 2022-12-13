import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen} from '../screens/AccountScreen';
import {PaymentScreen} from '../screens/PaymentScreen';
import {LoanScreen} from '../screens/LoanScreen';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon3MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {client} = useSelector((state: RootState) => state.client);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: client.appColor ?? '#1554f7',
          height: 52,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color, size}) => (
            <IconIonicons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoanScreen}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="hand-holding-heart" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon3MaterialIcons name="payment" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
