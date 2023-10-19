import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {HomeStateType} from '../home-slice';
import homeService from '../services/home-service';

export default (builder: ActionReducerMapBuilder<HomeStateType>) => {
  builder.addCase(homeService.getProduct.fulfilled, (state, {payload}) => {
    state.products = payload;
  });
  builder.addCase(homeService.addProduct.fulfilled, (state, {payload}) => {
    state.isLoading = true;
  });
  builder.addCase(homeService.editProduct.fulfilled, (state, {payload}) => {
    state.isLoading = true;
  });
  builder.addCase(homeService.editProduct.pending, (state, {payload}) => {
    state.isLoading = false;
  });
  builder.addCase(homeService.getProduct.pending, (state, {payload}) => {
    state.isLoading = false;
  });
  builder.addCase(homeService.addProduct.pending, (state, {payload}) => {
    state.isLoading = false;
  });
};
