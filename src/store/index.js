import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

const middleware = [
    cryptoApi.middleware,
    cryptoNewsApi.middleware
];

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});