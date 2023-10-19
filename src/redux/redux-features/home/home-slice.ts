import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  message: '555555555555',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
