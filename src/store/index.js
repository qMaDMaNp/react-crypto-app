import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

const middleware = [
    cryptoApi.middleware
];

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});