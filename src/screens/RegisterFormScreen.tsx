import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {FormInput} from '../components/molecules/FormInput';
import {MainButton} from '../components/atoms/MainButton';
import {ClientService} from '../store/services/ClientService';

export const RegisterFormScreen = ({navigation}: MyStackScreenProps) => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  const service = ClientService();

  return (
    <View>
      <Text>RegisterForm</Text>
      <Text>Screen</Text>

      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}

      <Button title="Print" onPress={() => console.log(user)} />
      <Button title="Navigate" onPress={() => navigation.navigate('MyApp')} />

      <FormInput
        icon="person"
        placeholder="User’s email or phone number"
        errorMsg="non-existent user account"
      />
      <FormInput
        icon="credit-card"
        placeholder="Amount"
        errorMsg="The amount exceeds the allowable limit"
      />
      <FormInput icon="message" placeholder="Reason" />
      <MainButton
        text="Create User"
        width={92}
        action={() => service.createClient(user)}
      />
    </View>
  );
};
