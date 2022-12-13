import {AccountDto} from '../../interfaces/AccountDto';
import {CreateLoanDto} from '../../interfaces/CreateLoanDto';
import {CreatePaymentDto} from '../../interfaces/CreatePaymentDto';
import {Movement} from '../../interfaces/Movement';
export const AccountService = () => {
  //const URL = 'http://192.168.1.11:3000/api/v1';
  const URL = 'http://192.168.102.201:3000/api/v1';
  return {
    getAccount: async (clientId: string): Promise<AccountDto | undefined> => {
      try {
        const response: Response = await fetch(`${URL}/account/${clientId}`);
        const data: AccountDto = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },

    createLoan: async (dto: CreateLoanDto) => {
      let movementCreated: Movement;
      const response: Response = await fetch(`${URL}/loan`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });
      const data = await response.json();
      movementCreated = {
        ...data,
      };
      return movementCreated;
    },

    createPayment: async (dto: CreatePaymentDto) => {
      let movementCreated: Movement;
      const response: Response = await fetch(`${URL}/payment`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });
      const data = await response.json();
      movementCreated = {
        ...data,
      };
      return movementCreated;
    },
  };
};
