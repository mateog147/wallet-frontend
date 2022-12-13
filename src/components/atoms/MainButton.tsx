import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

interface Props {
  text: string;
  width?: number;
  backgroundColor?: string;
  color?: string;
  action?: (textNumber: string) => void;
}

export const MainButton = ({
  text,
  width,
  backgroundColor,
  color,
  action,
}: Props) => {
  const {client} = useSelector((state: RootState) => state.client);
  const appColor = client.appColor ?? '#1554F6';
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: backgroundColor ? backgroundColor : appColor,
      height: 60,
      width: width ? `${width}%` : '75%',
      alignSelf: 'center',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.24,
      shadowRadius: 6,

      elevation: 17,
    },
    btnText: {
      fontFamily: 'Roboto',
      fontSize: 18,
      color: color ? color : 'white',
      fontWeight: '600',
    },
  });
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => (action ? action(text) : console.log({text}))}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};
