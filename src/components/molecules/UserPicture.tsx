import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../../themes/WalletTheme';

interface Props {
  image?: string;
  name?: string;
}
export const UserPicture = ({image, name}: Props) => {
  return (
    <View>
      <Image
        source={{
          uri: image
            ? image
            : 'https://pbs.twimg.com/profile_images/1282037764481937408/7PrKXHBW_400x400.jpg',
        }}
        style={styles.userImage}
      />
      <Text style={styles.textAccountName}>{name ? name : ''}</Text>
    </View>
  );
};
