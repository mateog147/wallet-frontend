import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  listContainer: {marginTop: 10},
  titlesContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 28,
  },
  h1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 36,
    color: 'rgba(0, 0, 0, 0.87)',
  },

  h3: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.87)',
  },
});
