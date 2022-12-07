import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {Logo} from '../components/molecules/Logo';
import {styles} from '../themes/WalletTheme';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {useAuth0} from 'react-native-auth0';
import {WelcomeForm} from '../components/organisms/WelcomeForm';
import {setClient} from '../store/reducers/client';
import {ClientService} from '../store/services/ClientService';
import {useDispatch} from 'react-redux';

export const WelcomeScreen = ({navigation}: MyStackScreenProps) => {
  const {user} = useAuth0();
  const dispatch = useDispatch();
  const service = ClientService();
  const loggedIn = user !== undefined && user !== null;

  const loginManager = async () => {
    console.log('user :>> ', user);
    const cli = await service.getClient(user);

    if (cli) {
      if ((await cli).phone !== undefined && (await cli).phone !== null) {
        dispatch(setClient(cli));
        navigation.navigate('MyApp');
      } else {
        navigation.navigate('RegisterFormScreen');
      }
    }
  };

  if (!loggedIn) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.main}>
        <Logo />
        <WelcomeForm name={user.name} action={() => loginManager()} />
      </View>
    );
  }
};
