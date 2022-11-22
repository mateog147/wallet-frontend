import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {LaunchScreen} from './src/screens/LaunchScreen';
import {LoginUserScreen} from './src/screens/LoginUserScreen';

export const App = () => {
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <SafeAreaView>
      <StatusBar backgroundColor={'black'} />
      {/* <LaunchScreen /> */}
      <LoginUserScreen />
    </SafeAreaView>
  );
};

export default App;
