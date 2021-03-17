import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
	name: 'cart',
	initialState: {
		id: '',
		items_length: '',
		total: '',
		items: [],
	},
	reducers: {
		initCart: (state, action) => {
			const cart = action.payload;
			state.id = cart.id;
			state.items_length = cart.total_items;
			state.total = cart.subtotal.formatted_with_symbol;
			state.items = cart.line_items;
		},
		addToCart: (state, action) => {
			const newCart = action.payload;
			state.id = newCart.id;
			state.items_length = newCart.total_items;
			state.total = newCart.subtotal.formatted_with_symbol;
			state.items = newCart.line_items;
		},
		removeFromCart: (state, action) => {
			const newCart = action.payload;
			state.id = newCart.id;
			state.items_length = newCart.total_items;
			state.total = newCart.subtotal.formatted_with_symbol;
			state.items = newCart.line_items;
		},
	},
});

export const { initCart, addToCart, removeFromCart } = cart.actions;

export default cart.reducer;
