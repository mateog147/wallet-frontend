import {View} from 'react-native';
import React from 'react';
import {HorizontalRule} from '../components/atoms/HorizontalRule';
import {Logo} from '../components/molecules/Logo';
import {AuthMethodsButtons} from '../components/organisms/AuthMethodsButtons';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {styles} from '../themes/WalletTheme';
import {PasswordLoginForm} from '../components/organisms/PasswordLoginForm';

export const LoginPasswordScreen = () => {
  return (
    <View style={styles.main}>
      <Logo />
      <PasswordLoginForm />
      <HorizontalRule text="or use" />
      <AuthMethodsButtons />
    </View>
  );
};
