import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IconMI} from '../atoms/IconMI';
import {FormTextInput} from '../atoms/FormTextInput';

interface Props {
  icon?: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMsg?: string;
}
export const FormInput = ({icon, placeholder, isInvalid, errorMsg}: Props) => {
  const styles = StyleSheet.create({
    container: {flexDirection: 'row', alignSelf: 'center', width: '92%'},
    textContainer: {flexDirection: 'column', flex: 1},
    errorTxt: {
      color: isInvalid ? 'red' : 'white',
    },
  });
  return (
    <View style={styles.container}>
      <IconMI iconName={icon} />
      <View style={styles.textContainer}>
        <FormTextInput placeholder={placeholder} />
        <Text style={styles.errorTxt}>{errorMsg ? errorMsg : 'Error'}</Text>
      </View>
    </View>
  );
};
