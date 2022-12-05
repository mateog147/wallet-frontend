import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ClientDto} from '../../interfaces/ClientDto';

export const clientSlice = createSlice({
  name: 'client',
  initialState: {
    client: {} as ClientDto,
  },
  reducers: {
    setClient(state, action: PayloadAction<ClientDto>) {
      state.client = action.payload;
    },
  },
});

export const {setClient} = clientSlice.actions;
export default clientSlice.reducer;
