import {View} from 'react-native';
import React from 'react';
import {MyDrawerContentComponentProps} from '../../interfaces/MyDrawerContentComponentProps';
import {Isologo} from '../atoms/Isologo';
import {IconButton} from '../molecules/IconButton';
import {styles} from '../../themes/WalletTheme';
import useSession from '../../hooks/UseSession';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {UserPicture} from '../molecules/UserPicture';

export const SideMenu = ({navigation}: MyDrawerContentComponentProps) => {
  const {onLogout} = useSession();
  const {client} = useSelector((state: RootState) => state.client);
  return (
    <View style={styles.sideMenuContainer}>
      <UserPicture image={client?.photo} name={client?.fullName} />
      <IconButton
        text="Change password"
        icon="settings"
        action={() => navigation.navigate('ChangePasswordScreen')}
      />
      <IconButton
        text="Change App Color"
        icon="bookmark"
        action={() => navigation.navigate('ThemesScreen')}
      />
      <IconButton
        icon="close"
        text="Logout"
        action={() => {
          onLogout();
          navigation.navigate('home');
        }}
      />

      <Isologo
        // eslint-disable-next-line react-native/no-inline-styles
        customStyle={{alignSelf: 'center', position: 'relative', bottom: -45}}
        size={120}
      />
    </View>
  );
};
