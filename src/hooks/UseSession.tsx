import {useAuth0} from 'react-native-auth0';
import {useDispatch} from 'react-redux';
import {setClient} from '../store/reducers/client';
import {setAccount} from '../store/reducers/account';
import {AccountDto} from '../interfaces/AccountDto';
import {ClientDto} from '../interfaces/ClientDto';
const useSession = () => {
  const dispatch = useDispatch();
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
      dispatch(setClient({} as ClientDto));
      dispatch(setAccount({} as AccountDto));
    } catch (e) {
      console.log('Log out cancelled');
    }
  };
  return {onLogin, onLogout};
};
export default useSession;
