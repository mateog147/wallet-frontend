import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

interface Props {
  text: string;
  icon: string;
  action?: () => void;
}

export const AuthButton = ({text, icon, action}: Props) => {
  const [src, setSrc] = useState(require('../../assets/icons/google-icon.png'));

  useEffect(() => {
    getIconSrc();
    console.log('src', src);
  });

  const getIconSrc = () => {
    switch (icon) {
      case 'google':
        setSrc(require('../../assets/icons/google-icon.png'));
        break;

      case 'apple':
        setSrc(require('../../assets/icons/mac-icon.png'));
        break;
    }
  };

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => (action ? action() : console.log('auth'))}>
      <Image style={styles.icon} source={src} />
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: '#E5E5E5',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Roboto',
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    position: 'relative',
    left: -45,
  },
});
