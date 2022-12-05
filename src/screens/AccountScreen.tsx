import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../themes/WalletTheme';
import {Movement} from '../interfaces/Movement';
import {MovementService} from '../store/services/MovementService';
import {MovementsList} from '../components/organisms/MovementsList';
import {AccountBalance} from '../components/molecules/AccountBalance';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
const service = MovementService();
export const AccountScreen = () => {
  const data: Movement[] = service.getAllMovement();
  const {client} = useSelector((state: RootState) => state.client);
  return (
    <View style={styles.main}>
      <AccountBalance balance={642345678} />
      <View style={styles.listContainer}>
        <MovementsList data={data} />
      </View>
      <Text>Color: {client.appColor}</Text>
    </View>
  );
};
