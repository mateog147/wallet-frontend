import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationDrawer} from './src/navigation/NavigationDrawer';
import {LaunchScreen} from './src/screens/LaunchScreen';
import { LoginUserScreen } from './src/screens/LoginUserScreen';
import { LoginPasswordScreen } from './src/screens/LoginPasswordScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar backgroundColor={'white'} />
        {/* <LaunchScreen /> */}
        {/* <LoginUserScreen /> */}
        <LoginPasswordScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
