import {View} from 'react-native';
import React from 'react';
import {HorizontalRule} from '../components/atoms/HorizontalRule';
import {Logo} from '../components/molecules/Logo';
import {AuthMethodsButtons} from '../components/organisms/AuthMethodsButtons';
import {styles} from '../themes/WalletTheme';
import {PasswordLoginForm} from '../components/organisms/PasswordLoginForm';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';

export const LoginPasswordScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <View style={styles.main}>
      <Logo />
      <PasswordLoginForm action={() => navigation.navigate('MyApp')} />
      <HorizontalRule text="or use" />
      <AuthMethodsButtons />
    </View>
  );
};
