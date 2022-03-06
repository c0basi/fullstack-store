import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('product/getProduct', async () => {
	try {
		const response = await axios.get('/api/products');
		const data = response.data;
		return data;
	} catch (err) {
		throw new Error('Something went wrong...');
	}
});

export const getProductDetails = createAsyncThunk(
	'product/getProductDetails',
	async (id) => {
		try {
			console.log(`single product info for id ${id} `);
			const response = await axios.get(`api/products/${id}`);
			console.log('single product info');
			const data = response.data[0];
			console.log(data);
			return data;
		} catch (err) {
			throw new Error('Something went wrong...');
		}
	}
);
