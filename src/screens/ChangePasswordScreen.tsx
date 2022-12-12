import {View, Alert} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {FormInput} from '../components/molecules/FormInput';
import {styles} from '../themes/WalletTheme';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';

export const ChangePasswordScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <View style={styles.main}>
      <View style={styles.basicIputsContainer}>
        <FormInput icon="person" placeholder="Current password" />
        <FormInput icon="mail" placeholder="New password" />
        <FormInput icon="location-on" placeholder="Retype new password" />
      </View>
      <View style={styles.verticalBtnContainer}>
        <MainButton
          text="Change password"
          width={92}
          action={() => Alert.alert('We are working on that')}
        />
        <MainButton
          backgroundColor="white"
          color="black"
          text="Cancel"
          width={92}
          action={() => navigation.navigate('MyApp')}
        />
      </View>
    </View>
  );
};
