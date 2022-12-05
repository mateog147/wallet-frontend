import {configureStore} from '@reduxjs/toolkit';
import clientReducer from './reducers/client';

export const store = configureStore({
  reducer: {
    client: clientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
