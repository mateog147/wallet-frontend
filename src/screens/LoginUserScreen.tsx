import {Button, View} from 'react-native';
import React from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {AuthButton} from '../components/atoms/AuthButton';

export const LoginUserScreen = () => {
  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm />

      <View>
        <AuthButton icon="google" text="Sign in with Google" />
        <AuthButton icon="apple" text="Sign in with Apple" />
      </View>
    </View>
  );
};
