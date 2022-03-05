import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productsSlice from './productsSlice';
import productSlice from './productSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		products: productsSlice,
		productDetails: productSlice,
	},
});

export default store;
