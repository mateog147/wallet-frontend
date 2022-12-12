import {configureStore} from '@reduxjs/toolkit';
import accountReducer from './reducers/account';
import clientReducer from './reducers/client';

export const store = configureStore({
  reducer: {
    client: clientReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
