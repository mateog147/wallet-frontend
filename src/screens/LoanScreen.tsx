import {Text, View, Image} from 'react-native';
import React from 'react';
import {MainButton} from '../components/atoms/MainButton';

export const LoanScreen = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/icons/mac-icon.png')} />
        <View>
          <Text>Available</Text>
          <Text>$ 50.000.000</Text>
        </View>
      </View>
      <MainButton text="Apply for loan" />
    </View>
  );
};
