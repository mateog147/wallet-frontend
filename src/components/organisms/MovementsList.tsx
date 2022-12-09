import {FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import {Movement} from '../../interfaces/Movement';
import {MovementCard} from '../molecules/MovementCard';

interface Props {
  data?: Movement[];
}

export const MovementsList = ({data}: Props) => {
  const renderItem = ({item}: ListRenderItemInfo<Movement>) => (
    <MovementCard
      reason={item.reason}
      amount={item.amount}
      dateTime={item.dateTime}
    />
  );
  return <FlatList data={data} renderItem={renderItem} />;
};
