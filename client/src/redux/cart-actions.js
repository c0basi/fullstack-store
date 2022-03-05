import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCart = createAsyncThunk('cart/addToCart', async (id, qty) => {
	try {
		const response = await axios.get(`/api/products/${id}`);
		const data = response.data;
		console.log(data);
		return {
			product: data.id,
			name: data.name,
			imageUrl: data.imageUrl,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		};
	} catch (err) {
		throw new Error('Something went wrong');
	}
	// const response = await fetch(`/api/products/${id}`);
	// if (!response.ok) {
	// 	throw new Error('Something went wrong');
	// }
	// const cartData = await response.json();
	// console.log(cartData);
	// return {
	// 	product: cartData.id,
	// 	name: cartData.name,
	// 	imageUrl: cartData.imageUrl,
	// 	price: cartData.price,
	// 	countInStock: cartData.countInStock,
	// 	qty,
	// };
});
