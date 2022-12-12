import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {FormInput} from '../components/molecules/FormInput';
import useCurrency from '../hooks/UseCurrency';
import {styles} from '../themes/WalletTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export const PaymentScreen = () => {
  const {currencyFormat} = useCurrency();
  const {account} = useSelector((state: RootState) => state.account);

  if (account.id === undefined && account.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    const balance: number = account.balance;
    return (
      <View style={styles.main}>
        <View style={styles.titlesContainer}>
          <Text style={styles.h1}>{currencyFormat(balance)}</Text>
          <Text style={styles.h3}>Account balance</Text>
        </View>
        <FormInput
          icon="person"
          placeholder="User`s email"
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
  }
};
