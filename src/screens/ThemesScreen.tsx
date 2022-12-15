import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeCard} from '../components/molecules/ThemeCard';
import {styles} from '../themes/WalletTheme';
import {MainButton} from '../components/atoms/MainButton';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {ClientService} from '../store/services/ClientService';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {ChangeColorDto} from '../interfaces/ChangeColorDto';
import {setClient} from '../store/reducers/client';

export const ThemesScreen = ({navigation}: MyStackScreenProps) => {
  const dispatch = useDispatch();
  const {client} = useSelector((state: RootState) => state.client);
  const clientService = ClientService();
  const [tempColor, onChangeColor] = React.useState(client.appColor ?? '');

  const localStyles = StyleSheet.create({
    colorIndicator: {
      width: 150,
      height: 18,
      alignSelf: 'center',
      backgroundColor: tempColor,
      borderRadius: 10,
      marginTop: 2,
    },
  });

  const updateColor = async (color: string) => {
    const dto: ChangeColorDto = {
      cliId: client.id ?? '',
      color: color,
    };
    const resDto = await clientService.changeAppColor(dto);
    const updatedClient = {...client, appColor: resDto.color};
    dispatch(setClient(updatedClient));
    navigation.navigate('MyApp');
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.titlesContainer}>
        <Text style={styles.h2}>Choose your theme</Text>
        <Text>You can always change this at any time</Text>
        <View style={localStyles.colorIndicator} />
      </View>
      <View style={styles.row}>
        <ThemeCard
          label="Arts & Culture"
          icon="theater-comedy"
          color="#c986cd"
          action={() => onChangeColor('#c986cd')}
        />
        <ThemeCard
          label="Food & Drinks"
          icon="local-pizza"
          color="#ff5a16"
          action={() => onChangeColor('#ff5a16')}
        />
        <ThemeCard
          label="Gaming"
          icon="videogame-asset"
          color="#0b3068"
          action={() => onChangeColor('#0b3068')}
        />
      </View>

      <View style={styles.row}>
        <ThemeCard
          label="Music"
          icon="music-note"
          color="#ff95b9"
          action={() => onChangeColor('#ff95b9')}
        />
        <ThemeCard
          label="Nature"
          icon="eco"
          color="#65b30a"
          action={() => onChangeColor('#65b30a')}
        />
        <ThemeCard
          label="Activity"
          icon="sports-soccer"
          color="#666262"
          action={() => onChangeColor('#666262')}
        />
      </View>

      <View style={styles.row}>
        <ThemeCard
          label="Fashion"
          icon="shopping-bag"
          color="#9015a5"
          action={() => onChangeColor('#9015a5')}
        />
        <ThemeCard
          label="Technology"
          icon="computer"
          color="#c50000"
          action={() => onChangeColor('#c50000')}
        />
        <ThemeCard
          label="Travel"
          icon="airplanemode-active"
          color="#938401"
          action={() => onChangeColor('#938401')}
        />
      </View>

      <View style={styles.horizontalBtnContainer}>
        <MainButton
          backgroundColor="white"
          color="#1554F7"
          text="Cancel"
          width={48}
          action={() => navigation.navigate('MyApp')}
        />
        <MainButton
          text="Accept"
          width={48}
          action={() => updateColor(tempColor)}
        />
      </View>
    </ScrollView>
  );
};
