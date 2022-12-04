import {View, Text, Image} from 'react-native';
import React from 'react';
import {MyDrawerContentComponentProps} from '../../interfaces/MyDrawerContentComponentProps';
import {Isologo} from '../atoms/Isologo';
import {IconButton} from '../molecules/IconButton';
import {styles} from '../../themes/WalletTheme';
import useSession from '../../hooks/UseSession';
import {useAuth0} from 'react-native-auth0';
import {UserPicture} from '../molecules/UserPicture';

export const SideMenu = ({navigation}: MyDrawerContentComponentProps) => {
  const {onLogout} = useSession();
  const {user} = useAuth0();
  return (
    <View style={styles.sideMenuContainer}>
      <UserPicture image={user?.picture} name={user?.name} />
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
      <IconButton icon="close" text="Logout" action={onLogout} />

      <Isologo
        // eslint-disable-next-line react-native/no-inline-styles
        customStyle={{alignSelf: 'center', position: 'relative', bottom: -45}}
        size={120}
      />
    </View>
  );
};
