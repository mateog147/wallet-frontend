import {Text, View, Alert} from 'react-native';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {FormInput} from '../components/molecules/FormInput';
import {MainButton} from '../components/atoms/MainButton';
import {ClientService} from '../store/services/ClientService';
import {useDispatch} from 'react-redux';
import {styles} from '../themes/WalletTheme';
import useValidName from '../hooks/UseValidName';
import {setClient} from '../store/reducers/client';
import {ClientDto} from '../interfaces/ClientDto';

export const RegisterFormScreen = ({navigation}: MyStackScreenProps) => {
  const [nameText, onChangeNameText] = React.useState('');
  const [phoneText, onChangePhoneText] = React.useState('');
  const dispatch = useDispatch();
  const {user} = useAuth0();
  const {isValidName} = useValidName();
  const service = ClientService();

  const createAndGoToAccount = async () => {
    service
      .createClient({
        fullName: isValidName(user.name) ? user.name : nameText,
        email: user.email,
        phone: phoneText,
        photo: user.picture,
      })
      .then((client: ClientDto) => dispatch(setClient(client)))
      .catch((error: unknown) =>
        Alert.alert(
          'We have problems with your registry please try again later',
        ),
      );
    navigation.navigate('MyApp');
  };

  return (
    <View style={[styles.main, styles.container]}>
      <Text style={styles.h2}>Please fill your personal Info</Text>
      <FormInput
        value={nameText}
        onChangeInput={onChangeNameText}
        icon="person"
        placeholder="Full Name"
        errorMsg="Not Valid"
      />
      <FormInput
        value={phoneText}
        onChangeInput={onChangePhoneText}
        icon="phone"
        placeholder="Phone"
        errorMsg="Not Valid"
        isNumeric={true}
      />
      <MainButton
        text="Send Info"
        width={92}
        action={() => createAndGoToAccount()}
      />
    </View>
  );
};
