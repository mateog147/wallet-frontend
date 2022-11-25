import {Alert, BackHandler, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {AuthMethodsButtons} from '../components/organisms/AuthMethodsButtons';
import {HorizontalRule} from '../components/atoms/HorizontalRule';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);
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
