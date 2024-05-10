import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

const toggleSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    openState(state) {
      state.showModal = true;
    },
    closeState(state) {
      state.showModal = false;
    },
  },
});

export const modalAction = toggleSlice.actions;

export default toggleSlice.reducer;
