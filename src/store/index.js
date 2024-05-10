import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './slices/modal';

const store = configureStore({
  reducer: {
    showModal: toggleSlice,
  },
});

export default store;
