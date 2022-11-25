import {Text, View} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {FormInput} from '../components/molecules/FormInput';
import useCurrency from '../hooks/UseCurrency';
import {styles} from '../themes/WalletTheme';
export const PaymentScreen = () => {
  const {currencyFormat} = useCurrency();
  const balance: number = 642345678;
  return (
    <View style={styles.main}>
      <View style={styles.titlesContainer}>
        <Text style={styles.h1}>{currencyFormat(balance)}</Text>
        <Text style={styles.h3}>Account balance</Text>
      </View>
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
      <MainButton text="Send payment" width={92} />
    </View>
  );
};
