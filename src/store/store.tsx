import {configureStore} from '@reduxjs/toolkit';
import accountReducer from './reducers/account';
import clientReducer from './reducers/client';
import tokenReducer from './reducers/token';

export const store = configureStore({
  reducer: {
    client: clientReducer,
    account: accountReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
