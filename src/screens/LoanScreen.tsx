import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {AmountAvailable} from '../components/molecules/AmountAvailable';
import {FormInput} from '../components/molecules/FormInput';
import {styles} from '../themes/WalletTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export const LoanScreen = () => {
  const {account} = useSelector((state: RootState) => state.account);

  if (account.id === undefined && account.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.main}>
        <AmountAvailable number={account.credit} />
        <FormInput
          icon="credit-card"
          placeholder="Amount"
          errorMsg="Amount not Avaiable"
        />
        <FormInput icon="message" placeholder="Reason" />
        <MainButton text="Apply for loan" width={92} />
      </View>
    );
  }
};
