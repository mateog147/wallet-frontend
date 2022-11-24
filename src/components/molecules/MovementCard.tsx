import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movement} from '../../interfaces/Movement';

export const MovementCard = ({title, amount}: Movement) => {
  return (
    <View style={stl.item}>
      <View style={stl.imgContainer}>
        <Image
          style={stl.img}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <Text style={stl.title}>{title}</Text>
      <Text style={stl.title}>{amount}</Text>
    </View>
  );
};

const stl = StyleSheet.create({
  img: {
    height: 26,
    width: 26,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 50,
    height: 50,
    backgroundColor: '#F5F5F6',
  },
  item: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
});
