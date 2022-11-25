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
  h2: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.87)',
  },

  h3: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  basicIputsContainer: {
    marginTop: 25,
    height: '50%',
    maxHeight: 280,
    justifyContent: 'space-between',
  },
  verticalBtnContainer: {
    height: 140,
    justifyContent: 'space-evenly',
  },
  horizontalBtnContainer: {
    alignSelf: 'center',
    width: '95%',
    flexDirection: 'row',
    height: 140,
    justifyContent: 'space-between',
  },

  sideMenuContainer: {
    height: '100%',
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'white',
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 600,
    alignSelf: 'center',
    margin: 10,
    marginTop: 30,
  },
  textAccountName: {
    fontSize: 23,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
    marginBottom: 60,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 6,
  },
});
