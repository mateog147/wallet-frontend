import {Alert, BackHandler, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {UserLoginForm} from '../components/organisms/UserLoginForm';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import useSession from '../hooks/UseSession';
import {useAuth0} from 'react-native-auth0';
import {ClientService} from '../store/services/ClientService';
import {useDispatch} from 'react-redux';
import {setClient} from '../store/reducers/client';

export const LoginUserScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useDispatch();

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

  const service = ClientService();
  const {user} = useAuth0();
  const {onLogin} = useSession();
  const loggedIn = user !== undefined && user !== null;

  const navigateTo = async () => {
    const cli = await service.getClient(user);
    if ((await cli).phone !== undefined && (await cli).phone !== null) {
      dispatch(setClient(cli));
      navigation.navigate('MyApp');
    } else {
      navigation.navigate('RegisterFormScreen');
    }
  };
  const loginManager = async () => {
    if (!loggedIn) {
      onLogin().then(() => navigateTo());
    } else {
      await navigateTo();
    }
  };
  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm action={() => loginManager()} />
    </View>
  );
};
