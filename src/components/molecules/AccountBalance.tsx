import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCurrency from '../../hooks/UseCurrency';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export const AccountBalance = () => {
  const {account} = useSelector((state: RootState) => state.account);
  const {currencyFormat} = useCurrency();

  if (account.id === undefined && account.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    const balance = account.balance;
    return (
      <View style={stl.container}>
        <Text style={stl.balance} numberOfLines={1} adjustsFontSizeToFit={true}>
          {currencyFormat(balance ? balance : 0)}
        </Text>
        <Text style={stl.txt}>Balance in your account</Text>
      </View>
    );
  }
};

const stl = StyleSheet.create({
  container: {
    minHeight: 150,
    height: '30%',
    paddingLeft: 26,
    paddingTop: 26,
    backgroundColor: '#1554F6',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomEndRadius: 120,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 50,
  },
  txt: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.74)',
    marginTop: 5,
  },
});
