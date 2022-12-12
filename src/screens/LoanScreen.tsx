import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';
import {AmountAvailable} from '../components/molecules/AmountAvailable';
import {FormInput} from '../components/molecules/FormInput';
import {styles} from '../themes/WalletTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {AccountService} from '../store/services/AccountService';
import {CreateLoanDto} from '../interfaces/CreateLoanDto';
import {useDispatch} from 'react-redux';
import {setAccount} from '../store/reducers/account';

export const LoanScreen = () => {
  const dispatch = useDispatch();
  const {account} = useSelector((state: RootState) => state.account);
  const [amount, onChangeAmount] = React.useState('');
  const [reason, onChangeReason] = React.useState('');
  const service = AccountService();
  const loanDto: CreateLoanDto = {
    idIncome: account.id,
    amount: +amount,
    reason: reason,
  };

  const manageNewLoan = async () => {
    await service.createLoan(loanDto);
    const updatedAccount = await service.getAccount(account.cliId);
    if (updatedAccount) {
      dispatch(setAccount(updatedAccount));
    }
  };

  if (account.id === undefined && account.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.main}>
        <AmountAvailable number={account.credit} />
        <FormInput
          icon="credit-card"
          placeholder="Amount"
          value={amount}
          onChangeInput={onChangeAmount}
          isNumeric={true}
          errorMsg="Amount not Avaiable"
          isInvalid={account.credit < +amount}
        />
        <FormInput
          icon="message"
          placeholder="Reason"
          value={reason}
          onChangeInput={onChangeReason}
        />
        <MainButton text="Apply for loan" width={92} action={manageNewLoan} />
      </View>
    );
  }
};
