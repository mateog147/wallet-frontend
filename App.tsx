import 'react-native-gesture-handler';
import React from 'react';
//Este error es por que el editor esta apuntando al @types y no al node module de auth0
//Pero si quitamos el @types va a marcar que el index.js no esta tipado
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import {NavigationContainer} from '@react-navigation/native';
import {MyDrawer} from './src/navigation/NavigationDrawer';
import {View, Text, Button} from 'react-native';
import {styles} from './src/themes/WalletTheme';

const Home = () => {
  const {authorize, clearSession, user} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}

      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

export const App = () => {
  return (
    // <NavigationContainer>
    //   <MyDrawer />
    // </NavigationContainer>
    <Auth0Provider
      domain={'dev-1f0xfbqvre15320a.us.auth0.com'}
      clientId={'cSRJuaMXwHIJBxfcJf9NG751gFsMd4Tg'}>
      <Home />
    </Auth0Provider>
  );
};

export default App;
