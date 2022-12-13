import {UserInfo} from 'react-native-auth0';
import {ChangeColorDto} from '../../interfaces/ChangeColorDto';
import {ClientDto} from '../../interfaces/ClientDto';
import {CreateClientDto} from '../../interfaces/CreateClientDto';
export const ClientService = () => {
  //const URL = 'http://192.168.1.11:3000/api/v1/client';
  const URL = 'http://192.168.102.201:3000/api/v1/client';
  return {
    getClient: async (user: UserInfo): Promise<ClientDto | undefined> => {
      try {
        const response: Response = await fetch(`${URL}/${user.email}`);
        console.log(response.status);
        const data: ClientDto = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },

    createClient: async (newUser: CreateClientDto): Promise<ClientDto> => {
      let clientCreated: ClientDto;
      const response: Response = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      clientCreated = {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        photo: data.photo,
        appColor: data.app.color,
      };
      return clientCreated;
    },

    changeAppColor: async (dto: ChangeColorDto): Promise<ChangeColorDto> => {
      const response: Response = await fetch(`${URL}/theme`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });
      const data = await response.json();
      return data;
    },
  };
};
