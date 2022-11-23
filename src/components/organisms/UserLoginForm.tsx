import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LoginInput} from '../../components/atoms/LoginInput';
import {MainButton} from '../atoms/MainButton';

interface Props {
  action?: () => void;
}
export const UserLoginForm = ({action}: Props) => {
  const [text, onChangeText] = React.useState('Email or Username');

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Login or sign up for free.</Text>
      <LoginInput placeholder={text} action={onChangeText} />
      <MainButton text="CONTINUE" action={action} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    minHeight: 200,
  },

  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
});
