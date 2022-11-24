import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movement} from '../../interfaces/Movement';
import {CircleImage} from '../atoms/CircleImage';
import useCurrency from '../../hooks/UseCurrency';

export const MovementCard = ({title, amount, date}: Movement) => {
  const {currencyFormat} = useCurrency();
  return (
    <View style={stl.item}>
      <CircleImage src={require('../../assets/images/logo.png')} />
      <View style={stl.textContainer}>
        <Text style={stl.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={stl.date}>{date}</Text>
      </View>

      <Text style={stl.amount}>{currencyFormat(amount ? amount : 0)}</Text>
    </View>
  );
};

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
    fontWeight: '400'
  },
});
