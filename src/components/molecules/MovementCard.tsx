import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CircleImage} from '../atoms/CircleImage';
import useCurrency from '../../hooks/UseCurrency';

interface Props {
  accUserId: string;
  accIdIncome?: string;
  reason?: string;
  amount?: number;
  dateTime?: Date;
}

export const MovementCard = ({
  reason,
  amount,
  dateTime,
  accIdIncome,
  accUserId,
}: Props) => {
  const {currencyFormat} = useCurrency();
  const stl = StyleSheet.create({
    item: {
      height: 72,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10,
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      paddingRight: 5,
    },
    date: {
      fontSize: 16,
      fontWeight: '400',
      color: '#666666',
    },
    amount: {
      fontSize: 18,
      fontWeight: '400',
      color: accIdIncome === accUserId ? 'green' : 'red',
    },
  });

  return (
    <View style={stl.item}>
      <CircleImage src={require('../../assets/images/logo.png')} />
      <View style={stl.textContainer}>
        <Text style={stl.title} numberOfLines={1}>
          {reason}
        </Text>
        <Text style={stl.date}>{dateTime}</Text>
      </View>

      <Text style={stl.amount}>{currencyFormat(amount ? amount : 0)}</Text>
    </View>
  );
};
