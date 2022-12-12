import {AccountDto} from '../../interfaces/AccountDto';
export const AccountService = () => {
  const URL = 'http://192.168.1.11:3000/api/v1/account';
  return {
    getAccount: async (clientId: string): Promise<AccountDto | undefined> => {
      try {
        const response: Response = await fetch(`${URL}/${clientId}`);
        console.log(response.status);
        const data: AccountDto = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  };
};
