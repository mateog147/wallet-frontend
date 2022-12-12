import {ActivityIndicator, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes/WalletTheme';
import {MovementsList} from '../components/organisms/MovementsList';
import {AccountBalance} from '../components/molecules/AccountBalance';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export const AccountScreen = () => {
  const {client} = useSelector((state: RootState) => state.client);

  useEffect(() => {
    console.log('Account :>> ');
  }, []);

  if (client.id === undefined || client.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.main}>
        <AccountBalance />
        <View style={styles.listContainer}>
          <MovementsList />
        </View>
      </View>
    );
  }
};
