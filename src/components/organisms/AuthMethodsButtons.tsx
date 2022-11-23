import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AuthButton} from '../atoms/AuthButton';

export const AuthMethodsButtons = () => {
  return (
    <View style={styles.formContainer}>
      <AuthButton icon="google" text="Sign in with Google" />
      <AuthButton icon="apple" text="Sign in with Apple" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    minHeight: 150,
    paddingBottom: 10,
    paddingTop: 10,
  },

  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
});
