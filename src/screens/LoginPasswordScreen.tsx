import {Button, Text, View} from 'react-native';
import React from 'react';
import {HorizontalRule} from '../components/atoms/HorizontalRule';
import {Logo} from '../components/molecules/Logo';
import {AuthMethodsButtons} from '../components/organisms/AuthMethodsButtons';
import {styles} from '../themes/WalletTheme';
import {PasswordLoginForm} from '../components/organisms/PasswordLoginForm';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {useAuth0} from 'react-native-auth0';
export const LoginPasswordScreen = ({navigation}: MyStackScreenProps) => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  return (
    <View style={styles.main}>
      <Logo />
      <PasswordLoginForm action={() => navigation.navigate('MyApp')} />
      <HorizontalRule text="wallet" />
      <AuthMethodsButtons />
      <View style={styles.container}>
        {loggedIn && <Text>You are logged in as {user.name}</Text>}
        {!loggedIn && <Text>You are not logged in</Text>}

        <Button title="Print" onPress={() => console.log(user)} />
      </View>
    </View>
  );
};
