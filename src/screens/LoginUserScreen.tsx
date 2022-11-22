import {Button, View} from 'react-native';
import React from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {UserLoginForm} from '../components/organisms/UserLoginForm';

export const LoginUserScreen = () => {
  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm />

      <View>
        <Button title="Google" />
        <Button title="Apple" />
      </View>
    </View>
  );
};
