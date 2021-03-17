import commerce from './commerce';

export const createCheckout = async (cartId: string | string[]) => {
	const checkout = await commerce.checkout.generateToken(cartId, { type: 'cart' });
	return checkout;
};

export const getCheckoutShippingCountries = async (checkoutId: string) => {
	const data = await commerce.services.localeListShippingCountries(checkoutId);

	const shippingCountries = Object.entries(data.countries).map(([code, name]) => ({
		value: code,
		label: name,
	}));

	return shippingCountries;
};

export const getRegions = async (countryCode: string) => {
	const data = await commerce.services.localeListSubdivisions(countryCode);
	const subdivisions: any = Object.entries(data.subdivisions).map(([code, name]) => ({
		value: code,
		label: name,
	}));

	return subdivisions;
};

export const getShippingOptions = async (
	checkoutId: string,
	countryCode: string,
	regionCode: string
) => {
	const data = await commerce.checkout.getShippingOptions(checkoutId, {
		country: countryCode,
		region: regionCode,
	});
	const _shippingOption = data.map((option: any) => {
		return {
			value: option.id,
			label: option.description + ' - ' + option.price.formatted_with_symbol,
		};
	});

	return _shippingOption;
};

export const liveCheckoutWithShipping = async (
	checkoutId: string,
	shippingId: string,
	countryCode: string,
	regionCode: string
) => {
	const newCheckout = await commerce.checkout.checkShippingOption(checkoutId, {
		shipping_option_id: shippingId,
		country: countryCode,
		region: regionCode,
	});

	return newCheckout.live;
};

export const liveCheckoutWithDiscountCode = async (checkoutId: string, discountCode: string) => {
	const newCheckout = await commerce.checkout.checkDiscount(checkoutId, {
		code: discountCode,
	});

	return newCheckout.live;
};

export const refreshCart = async () => {
	const newCart = await commerce.cart.refresh();
	console.log('new cart :', newCart);
};

export const captureCheckout = async (checkoutId: string, newOrder: any) => {
	try {
		const incomingOrder = await commerce.checkout.capture(checkoutId, newOrder);
		console.log('order captured :', incomingOrder);
		refreshCart();
	} catch (err) {
		console.log(err);
	}
};
