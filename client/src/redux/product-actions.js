import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('product/getProduct', async () => {
	try {
		const response = await axios.get('/api/products');
		console.log(response.data);
		const data = response.data;
		console.log(data);
		return data;
	} catch (err) {
		throw new Error('Something went wrong...');
	}
});

export const getProductDetails = createAsyncThunk(
	'product/getProductDetails',
	async (id) => {
		try {
			const response = await axios.get(`api/products/${id}`);
			console.log('single product info');
			const data = response.data;
			console.log(data);
			return data;
		} catch (err) {
			throw new Error('Something went wrong...');
		}
	}
);
