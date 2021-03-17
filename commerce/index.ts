import commerce from './config';
import { Location, Checkout, LiveCheckout } from './types/checkout';

export const createCheckout = async (cartId: string | string[]): Promise<Checkout> => {
	const checkout: Checkout = await commerce.checkout.generateToken(cartId, { type: 'cart' });
	return checkout;
};

export const getCheckoutShippingCountries = async (checkoutId: string): Promise<Location[]> => {
	const data = await commerce.services.localeListShippingCountries(checkoutId);

	const shippingCountries: Location[] = Object.entries(data.countries).map(([code, name]) => ({
		value: code,
		label: name,
	}));

	return shippingCountries;
};

export const getRegions = async (countryCode: string): Promise<Location[]> => {
	const data = await commerce.services.localeListSubdivisions(countryCode);
	const subdivisions: Location[] = Object.entries(data.subdivisions).map(([code, name]) => ({
		value: code,
		label: name,
	}));

	return subdivisions;
};

export const getShippingOptions = async (
	checkoutId: string,
	countryCode: string,
	regionCode: string
): Promise<Location[]> => {
	const data = await commerce.checkout.getShippingOptions(checkoutId, {
		country: countryCode,
		region: regionCode,
	});
	const shippingOptions: Location[] = data.map((option: any) => {
		return {
			value: option.id,
			label: option.description + ' - ' + option.price.formatted_with_symbol,
		};
	});

	return shippingOptions;
};

export const liveCheckoutWithShipping = async (
	checkoutId: string,
	shippingId: string,
	countryCode: string,
	regionCode: string
): Promise<LiveCheckout> => {
	const newCheckout: Checkout = await commerce.checkout.checkShippingOption(checkoutId, {
		shipping_option_id: shippingId,
		country: countryCode,
		region: regionCode,
	});

	return newCheckout.live;
};

export const liveCheckoutWithDiscountCode = async (
	checkoutId: string,
	discountCode: string
): Promise<LiveCheckout> => {
	const newCheckout: Checkout = await commerce.checkout.checkDiscount(checkoutId, {
		code: discountCode,
	});

	return newCheckout.live;
};

export const refreshCart = async (): Promise<void> => {
	await commerce.cart.refresh();
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
