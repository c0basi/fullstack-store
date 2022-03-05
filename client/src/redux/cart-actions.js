import { createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk('cart/addToCart', async (id, qty) => {
	const response = await fetch(`/api/products/${id}`);
	if (!response.ok) {
		throw new Error('Something went wrong');
	}
	const cartData = await response.json();
	console.log(cartData);
	return {
		product: cartData.id,
		name: cartData.name,
		imageUrl: cartData.imageUrl,
		price: cartData.price,
		countInStock: cartData.countInStock,
		qty,
	};
});
