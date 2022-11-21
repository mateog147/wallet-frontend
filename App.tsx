import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {LaunchScreen} from './src/screens/LaunchScreen';

export const App = () => {
  return (
    //Safe deja un margin es especialmente buneo en IOS
    <SafeAreaView>
      <StatusBar backgroundColor={'black'} />
      <LaunchScreen />
    </SafeAreaView>
  );
};

export default App;
