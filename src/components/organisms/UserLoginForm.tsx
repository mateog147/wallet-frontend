import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LoginInput} from '../../components/atoms/LoginInput';
import {MainButton} from '../atoms/MainButton';

export const UserLoginForm = () => {
  const [text, onChangeText] = React.useState('Email or Username');
  return (
    <View style={styles.formContainer}>
      <Text>Login or sign up for free.</Text>
      <LoginInput placeholder={text} action={onChangeText} />
      <MainButton text="CONTINUE" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },
});
