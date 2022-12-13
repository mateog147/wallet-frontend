import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {FormInput} from '../components/molecules/FormInput';
import useCurrency from '../hooks/UseCurrency';
import {styles} from '../themes/WalletTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {CreatePaymentDto} from '../interfaces/CreatePaymentDto';
import {AccountService} from '../store/services/AccountService';
import {useDispatch} from 'react-redux';
import {setAccount} from '../store/reducers/account';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';

export const PaymentScreen = ({navigation}: MyStackScreenProps) => {
  const {currencyFormat} = useCurrency();
  const service = AccountService();
  const dispatch = useDispatch();

  const {account} = useSelector((state: RootState) => state.account);
  const [amount, onChangeAmount] = React.useState('');
  const [reason, onChangeReason] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const paymentDto: CreatePaymentDto = {
    emailIncome: email,
    idOutcome: account.id,
    reason: reason,
    amount: +amount,
  };

  const manageNewPayment = async () => {
    service.createPayment(paymentDto).then(async () => {
      const updatedAccount = await service.getAccount(account.cliId);
      if (updatedAccount) {
        dispatch(setAccount(updatedAccount));
      }
    });
    navigation.navigate('Home');
  };

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
          value={email}
          onChangeInput={onChangeEmail}
          errorMsg="non-existent user account"
        />
        <FormInput
          icon="credit-card"
          placeholder="Amount"
          isNumeric={true}
          value={amount}
          onChangeInput={onChangeAmount}
          errorMsg="The amount exceeds the allowable limit"
          isInvalid={+amount > account.balance}
        />
        <FormInput
          icon="message"
          placeholder="Reason"
          value={reason}
          onChangeInput={onChangeReason}
        />
        <MainButton text="Send payment" width={92} action={manageNewPayment} />
      </View>
    );
  }
};
