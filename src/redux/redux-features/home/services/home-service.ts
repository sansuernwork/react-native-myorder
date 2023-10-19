import {createAsyncThunk} from '@reduxjs/toolkit';
import {Axios} from '../../../../axios/axios';
import {Product} from '../../../../type/type';

const getProduct = createAsyncThunk('homeSlice/get_product', async () => {
  try {
    const response = await Axios({
      method: 'GET',
      url: '/product',
    });

    return response.data;
  } catch (err) {
    // custom error
    console.log(err);
  }
});

const addProduct = createAsyncThunk(
  'homeSlice/add_product',
  async (data: FormData) => {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/product',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: data,
      });

      return response.status;
    } catch (err) {
      // custom error
      console.log(err);
    }
  },
);

export default {
  getProduct,
  addProduct,
};
