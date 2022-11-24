import {Movement} from '../../interfaces/Movement';
export const MovementService = () => {
  return {
    getAllMovement: () => {
      const DATA: Movement[] = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Pago de salario',
          amount: 3650000,
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Arriendo',
          amount: 850000,
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Prestamo',
          amount: 900000,
        },
      ];

      return DATA;
    },
  };
};
