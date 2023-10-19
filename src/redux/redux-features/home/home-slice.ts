import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../type/type';
import homeExtraReducer from './reducers/home-extra-reducer';
import homeReducer from './reducers/home-reducer';

export type HomeStateType = {
  isLoading: boolean;
  products: Product[];
};

const initialState: HomeStateType = {
  products: [],
  isLoading: false,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: homeReducer,
  extraReducers: homeExtraReducer,
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
