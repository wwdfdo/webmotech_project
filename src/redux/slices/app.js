import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModelOpen: false,
  isRegisrerModelOpen: false,
};

export const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openLoginModel: (state) => {
      state.isLoginModelOpen = true;
      if (state.isRegisrerModelOpen) {
        state.isRegisrerModelOpen = false;
      }
    },
    openRegisrerModel: (state) => {
      state.isRegisrerModelOpen = true;
      if (state.isLoginModelOpen) {
        state.isLoginModelOpen = false;
      }
    },
    closeRegisrerModel: (state) => {
      state.isRegisrerModelOpen = false;
    },
    closeLoginModel: (state) => {
      state.isLoginModelOpen = false;
    },
  },
});

export const {
  openLoginModel,
  closeLoginModel,
  openRegisrerModel,
  closeRegisrerModel,
} = appSlice.actions;

export default appSlice.reducer;
