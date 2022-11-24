import {
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from '../themes/WalletTheme';
import {Movement} from '../interfaces/Movement';
import {MovementService} from '../store/services/MovementService';
import {MovementsList} from '../components/organisms/MovementsList';

const service = MovementService();
export const AccountScreen = () => {
  const data: Movement[] = service.getAllMovement();
  return (
    <View style={styles.main}>
      <View>
        <Text>$ 642.345.678</Text>
        <Text>Balance in your account</Text>
      </View>
      <MovementsList data={data} />
    </View>
  );
};
