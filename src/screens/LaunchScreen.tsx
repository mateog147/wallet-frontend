import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const LaunchScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.title}>My App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 144,
    height: 144,
    position: 'absolute',
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400',
    position: 'absolute',
    bottom: '9%',
  },
});
