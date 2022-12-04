import 'react-native-gesture-handler';
import React from 'react';
/*
Este error es por que el editor esta apuntando al @types y no al node module de auth0
Pero si quitamos el @types de los modulos va a marcar que el index.js no esta tipado
Esta forma de trabajar diverge de la que usamos en el ejemplo de clase puesto que se vale del AuthContext 
predifinido en la librería el cual se vale del Context API de React */
import {Auth0Provider} from 'react-native-auth0';
import {NavigationContainer} from '@react-navigation/native';
import {MyDrawer} from './src/navigation/NavigationDrawer';
export const App = () => {
  return (
    <Auth0Provider
      domain={'dev-1f0xfbqvre15320a.us.auth0.com'}
      clientId={'cSRJuaMXwHIJBxfcJf9NG751gFsMd4Tg'}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Auth0Provider>
  );
};

export default App;
