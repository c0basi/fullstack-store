import { createSlice } from '@reduxjs/toolkit';
import { addToCart } from './cart-actions';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { cartItems: [] },
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existsItemIndex = state.cartItems.findIndex(
				(item) => item.product === newItem.product
			);
			const existsItem = state.cartItems[existsItemIndex];

			if (existsItem) {
				state.cartItems[existsItemIndex] = newItem;
			} else {
				state.cartItems.push(newItem);
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		removeItemFromCart(state, action) {
			state.cartItems.filter((item) => item !== action.payload);
		},
	},
	extraReducers: {
		[addToCart.fulfilled]: (state, action) => {
			const newItem = action.payload;
			const existsItemIndex = state.cartItems.findIndex(
				(item) => item.product === newItem.product
			);
			const existsItem = state.cartItems[existsItemIndex];

			if (existsItem) {
				state.cartItems[existsItemIndex] = newItem;
			} else {
				state.cartItems.push(newItem);
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;