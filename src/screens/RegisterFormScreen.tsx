import {Text, View} from 'react-native';
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

export const RegisterFormScreen = ({navigation}: MyStackScreenProps) => {
  const [nameText, onChangeNameText] = React.useState('');
  const [phoneText, onChangePhoneText] = React.useState('');
  const dispatch = useDispatch();
  const {user} = useAuth0();
  const {isValidName} = useValidName();
  const service = ClientService();

  const createAndGoToAccount = async () => {
    const cli = await service.createClient({
      fullName: isValidName(user.name) ? user.name : nameText,
      email: user.email,
      phone: phoneText,
      photo: user.picture,
    });
    if (await cli) {
      dispatch(setClient(cli));
      navigation.navigate('MyApp');
    } else {
      navigation.navigate('home');
    }
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
