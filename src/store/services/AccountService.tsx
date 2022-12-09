import {Movement} from '../../interfaces/Movement';
export const AccountService = () => {
  return {
    getAllMovement: () => {
      const DATA: Movement[] = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Pago de salario',
          amount: 3650000,
          date: new Date(Date.now()).toUTCString(),
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Arriendo',
          amount: 850000,
          date: new Date(Date.now()).toUTCString(),
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Prestamo',
          amount: 900000,
          date: new Date(Date.now()).toUTCString(),
        },
      ];

      return DATA;
    },
  };
};
