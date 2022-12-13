import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {styles} from '../themes/WalletTheme';
import {MovementsList} from '../components/organisms/MovementsList';
import {AccountBalance} from '../components/molecules/AccountBalance';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export const AccountScreen = () => {
  const {client} = useSelector((state: RootState) => state.client);

  if (client.id === undefined || client.id === null) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  } else {
    return (
      <View style={styles.main}>
        <AccountBalance />
        <MovementsList />
      </View>
    );
  }
};
