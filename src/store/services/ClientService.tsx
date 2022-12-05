export const ClientService = () => {
  const URL = 'http://192.168.1.11:3000/api/v1/client';
  return {
    getClient: async user => {
      try {
        const response: Response = await fetch(`${URL}/${user.email}`);
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      } finally {
        console.log('finally');
      }
    },

    createClient: async user =>
      fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: user.name,
          email: user.email,
          phone: '3135445098',
          photo: user.picture,
        }),
      }),
  };
};
