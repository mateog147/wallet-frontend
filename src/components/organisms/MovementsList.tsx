import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import {Movement} from '../../interfaces/Movement';
import {MovementCard} from '../molecules/MovementCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export const MovementsList = () => {
  const {account} = useSelector((state: RootState) => state.account);
  const renderItem = ({item}: ListRenderItemInfo<Movement>) => (
    <MovementCard
      reason={item.reason}
      amount={item.amount}
      dateTime={item.dateTime}
    />
  );
  if (account.id === undefined && account.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    const data = account.movements;
    return <FlatList data={data} renderItem={renderItem} />;
  }
};
