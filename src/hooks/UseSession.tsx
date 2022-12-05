import {useAuth0} from 'react-native-auth0';

const useSession = () => {
  const {authorize, clearSession, getCredentials} = useAuth0();
  const onLogin = async () => {
    try {
      const test = await authorize({scope: 'openid profile email'});
      //const res = await getCredentials();
      //console.log(JSON.stringify(res));
      return await test;
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
  return {onLogin, onLogout};
};
export default useSession;
