import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {ThemeCard} from '../components/molecules/ThemeCard';
import {styles} from '../themes/WalletTheme';
import {MainButton} from '../components/atoms/MainButton';

export const ThemesScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.titlesContainer}>
        <Text style={styles.h2}>Choose your theme</Text>
        <Text>You can always change this at any time</Text>
      </View>
      <View style={styles.row}>
        <ThemeCard label="Arts & Culture" icon="music-note" />
        <ThemeCard label="Arts & Culture" icon="music-note" />
        <ThemeCard label="Arts & Culture" icon="music-note" />
      </View>

      <View style={styles.row}>
        <ThemeCard label="Arts & Culture" icon="music-note" />
        <ThemeCard label="Arts & Culture" icon="music-note" />
        <ThemeCard label="Arts & Culture" icon="music-note" />
      </View>

      <View style={styles.row}>
        <ThemeCard label="Arts & Culture" icon="music-note" />
        <ThemeCard label="Arts & Culture" icon="music-note" />
        <ThemeCard label="Arts & Culture" icon="music-note" />
      </View>

      <View style={styles.horizontalBtnContainer}>
        <MainButton
          backgroundColor="white"
          color="#1554F7"
          text="Cancel"
          width={48}
        />
        <MainButton text="Accept" width={48} />
      </View>
    </ScrollView>
  );
};
