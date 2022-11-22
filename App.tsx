import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {LaunchScreen} from './src/screens/LaunchScreen';
import {LoginUserScreen} from './src/screens/LoginUserScreen';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar backgroundColor={'black'} />
        {/* <LaunchScreen /> */}
        <LoginUserScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
