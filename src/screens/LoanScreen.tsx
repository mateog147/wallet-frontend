import {View} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {AmountAvailable} from '../components/molecules/AmountAvailable';
import {FormInput} from '../components/molecules/FormInput';
import {styles} from '../themes/WalletTheme';

export const LoanScreen = () => {
  return (
    <View style={styles.main}>
      <AmountAvailable number={50000000} />
      <FormInput icon="credit-card" placeholder="Amount" />
      <FormInput icon="message" placeholder="Reason" />
      <MainButton text="Apply for loan" width={92} />
    </View>
  );
};
