// store.js

import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    // Add other slices as needed
  },
});

export default store;
