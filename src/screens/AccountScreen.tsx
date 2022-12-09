import {ActivityIndicator, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes/WalletTheme';
import {Movement} from '../interfaces/Movement';
import {AccountService} from '../store/services/AccountService';
import {MovementsList} from '../components/organisms/MovementsList';
import {AccountBalance} from '../components/molecules/AccountBalance';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const service = AccountService();
export const AccountScreen = () => {
  const data: Movement[] = service.getAllMovement();
  const {client} = useSelector((state: RootState) => state.client);

  useEffect(() => {
    console.log('Account :>> ');
  }, []);

  if (client.id === undefined || client.id === null) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.main}>
        <AccountBalance balance={642345678} />
        <View style={styles.listContainer}>
          <MovementsList data={data} />
        </View>
      </View>
    );
  }
};
