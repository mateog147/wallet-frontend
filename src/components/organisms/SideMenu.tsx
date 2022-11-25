import {View, Text, Image} from 'react-native';
import React from 'react';
import {MyDrawerContentComponentProps} from '../../interfaces/MyDrawerContentComponentProps';
import {Isologo} from '../atoms/Isologo';
import {IconButton} from '../molecules/IconButton';
import {styles} from '../../themes/WalletTheme';

export const SideMenu = ({navigation}: MyDrawerContentComponentProps) => {
  return (
    <View style={styles.sideMenuContainer}>
      <Image
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1282037764481937408/7PrKXHBW_400x400.jpg',
        }}
        style={styles.userImage}
      />
      <Text style={styles.textAccountName}>Lalo Landa</Text>

      <IconButton
        text="Change password"
        icon="settings"
        action={() => navigation.navigate('ChangePasswordScreen')}
      />
      <IconButton
        text="Change App Theme"
        icon="bookmark"
        action={() => navigation.navigate('ThemesScreen')}
      />
      <IconButton icon="close" text="Logout" />

      <Isologo
        // eslint-disable-next-line react-native/no-inline-styles
        customStyle={{alignSelf: 'center', position: 'relative', bottom: -45}}
        size={120}
      />
    </View>
  );
};
