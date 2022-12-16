import {Alert, BackHandler, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import useSession from '../hooks/UseSession';
import {useAuth0} from 'react-native-auth0';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  const {user} = useAuth0();
  const {onLogin, onGetCredentials, onLogout} = useSession();
  const loggedIn = user !== undefined && user !== null;

  useEffect(() => {
    if (loggedIn) {
      onGetCredentials().then(isExpired => {
        if (isExpired) {
          onLogout();
          Alert.alert('Session expired');
          navigation.navigate('LoginUserScreen');
        }
      });
      navigation.navigate('WelcomeScreen');
    }
  });

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

  if (user === null || user === undefined) {
    return (
      <View style={styles.main}>
        <Logo size={120} />
        <UserLoginForm
          action={() => {
            onLogin();
            navigation.navigate('WelcomeScreen');
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.main}>
        <Text>Ups, Try again later</Text>
      </View>
    );
  }
};
