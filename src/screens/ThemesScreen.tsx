import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {ThemeCard} from '../components/molecules/ThemeCard';
import {styles} from '../themes/WalletTheme';
import {MainButton} from '../components/atoms/MainButton';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';

export const ThemesScreen = ({navigation}: MyStackScreenProps) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.titlesContainer}>
        <Text style={styles.h2}>Choose your theme</Text>
        <Text>You can always change this at any time</Text>
      </View>
      <View style={styles.row}>
        <ThemeCard label="Arts & Culture" icon="theater-comedy" />
        <ThemeCard label="Food & Drinks" icon="local-pizza" />
        <ThemeCard label="Gaming" icon="videogame-asset" />
      </View>

      <View style={styles.row}>
        <ThemeCard label="Music" icon="music-note" />
        <ThemeCard label="Food & Drinks" icon="local-pizza" />
        <ThemeCard label="Nature" icon="eco" />
      </View>

      <View style={styles.row}>
        <ThemeCard label="Fashion" icon="shopping-bag" />
        <ThemeCard label="Technology" icon="computer" />
        <ThemeCard label="Travel" icon="airplanemode-active" />
      </View>

      <View style={styles.horizontalBtnContainer}>
        <MainButton
          backgroundColor="white"
          color="#1554F7"
          text="Cancel"
          width={48}
          action={() => navigation.navigate('MyApp')}
        />
        <MainButton text="Accept" width={48} />
      </View>
    </ScrollView>
  );
};
