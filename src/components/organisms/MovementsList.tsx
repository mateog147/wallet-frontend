import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';
import {Movement} from '../../interfaces/Movement';
import {MovementCard} from '../molecules/MovementCard';

interface Props {
  data?: Movement[];
}

export const MovementsList = ({data}: Props) => {
  const renderItem = ({item}: ListRenderItemInfo<Movement>) => (
    <MovementCard title={item.title} amount={item.amount} date={item.date} />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
