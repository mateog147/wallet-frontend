import {View} from 'react-native';
import React from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {AuthMethodsButtons} from '../components/organisms/AuthMethodsButtons';
import {HorizontalRule} from '../components/atoms/HorizontalRule';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm
        action={() => navigation.navigate('LoginPasswordScreen')}
      />
      <HorizontalRule text="register" />
      <AuthMethodsButtons />
    </View>
  );
};
