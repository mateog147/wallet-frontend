import {View} from 'react-native';
import React from 'react';
import {styles} from '../themes/WalletTheme';
import {Movement} from '../interfaces/Movement';
import {MovementService} from '../store/services/MovementService';
import {MovementsList} from '../components/organisms/MovementsList';
import {AccountBalance} from '../components/molecules/AccountBalance';

const service = MovementService();
export const AccountScreen = () => {
  const data: Movement[] = service.getAllMovement();
  return (
    <View style={styles.main}>
      <AccountBalance balance={642345678} />
      <View style={styles.listContainer}>
        <MovementsList data={data} />
      </View>
    </View>
  );
};
