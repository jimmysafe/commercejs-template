import { createSlice } from '@reduxjs/toolkit';

export const checkout = createSlice({
	name: 'checkout',
	initialState: {
		live: null,
		config: {
			regions: [],
			shippingOptions: [],
		},
		notes: null,
		firstname: null,
		lastname: null,
		email: null,
		telephone: null,
		address1: null,
		address2: null,
		city: null,
		postcode: null,
		region: null,
		country: null,
		shipping_method: null,
	},
	reducers: {
		updateLiveCheckout: (state, action) => {
			state.live = action.payload;
		},

		addRegions: (state, action) => {
			state.config.regions = action.payload;
			// Reset selected region and shipping option on change
			state.region = null;
			state.shipping_method = null;
		},
		addShippingOptions: (state, action) => {
			state.config.shippingOptions = action.payload;
			// Reset selected shipping option on change
			state.shipping_method = null;
		},

		updateInputValue: (state, action) => {
			const key = action.payload.key;
			const value = action.payload.value;
			state[key] = value;
		},
	},
});

export const {
	updateInputValue,
	addRegions,
	addShippingOptions,
	updateLiveCheckout,
} = checkout.actions;

export default checkout.reducer;
