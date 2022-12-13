import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AccountDto} from '../../interfaces/AccountDto';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    account: {} as AccountDto,
  },
  reducers: {
    setAccount(state, action: PayloadAction<AccountDto>) {
      state.account = action.payload;
    },
  },
});

export const {setAccount} = accountSlice.actions;
export default accountSlice.reducer;
