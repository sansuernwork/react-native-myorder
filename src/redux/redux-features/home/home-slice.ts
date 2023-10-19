import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../type/type';
import homeReducer from './reducers/home-reducer';
import homeService from './services/home-service';

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
  extraReducers: builder => {
    builder.addCase(homeService.getProduct.fulfilled, (state, {payload}) => {
      state.products = payload;
    });
    builder.addCase(homeService.addProduct.fulfilled, (state, {payload}) => {
      state.isLoading = true;
    });
    builder.addCase(homeService.getProduct.pending, (state, {payload}) => {
      state.isLoading = false;
    });
    builder.addCase(homeService.addProduct.pending, (state, {payload}) => {
      state.isLoading = false;
    });
  },
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
