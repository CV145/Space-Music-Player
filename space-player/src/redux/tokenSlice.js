
import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setAccessToken: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
