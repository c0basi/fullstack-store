import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './product-actions';

const productSlice = createSlice({
	name: 'products',
	initialState: { product: {}, loading: false, error: null },
	reducers: {
		reset(state) {
			state.product = {};
		},
	},
	extraReducers: {
		[getProducts.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getProducts.pending]: (state, action) => {
			state.loading = true;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.product = payload;
		},
	},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
