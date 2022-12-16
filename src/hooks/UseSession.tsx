import {Credentials, useAuth0} from 'react-native-auth0';
import {useDispatch} from 'react-redux';
import {setClient} from '../store/reducers/client';
import {setAccount} from '../store/reducers/account';
import {setToken} from '../store/reducers/token';
import {AccountDto} from '../interfaces/AccountDto';
import {ClientDto} from '../interfaces/ClientDto';
import jwt_decode from 'jwt-decode';

const useSession = () => {
  const dispatch = useDispatch();
  const {authorize, clearSession, getCredentials} = useAuth0();
  const onLogin = async () => {
    try {
      const test = await authorize({scope: 'openid profile email'});
      await onGetCredentials();
      return await test;
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
      dispatch(setClient({} as ClientDto));
      dispatch(setAccount({} as AccountDto));
      dispatch(setToken(''));
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const onGetCredentials = async (): Promise<boolean> => {
    const credentials: Credentials = await getCredentials();
    const userJson = jwt_decode<any>(credentials.idToken);
    const expiresIn: number = userJson.exp;
    const newToken = credentials.idToken;
    dispatch(setToken(newToken));
    const flag = expiresIn > new Date().getTime();
    return flag;
  };
  return {onLogin, onLogout, onGetCredentials};
};
export default useSession;
