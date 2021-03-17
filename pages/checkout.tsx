import { GetServerSideProps, NextPage } from 'next';
import { createCheckout, getCheckoutShippingCountries } from '../commerce';
import CheckoutForm from '../components/checkout';
import { Checkout } from '../commerce/types/checkout';

type Props = {
	checkout: Checkout;
	shippingCountries: any;
};

const CheckoutPage: NextPage<Props> = ({ checkout, shippingCountries }) => {
	return <CheckoutForm checkout={checkout} shippingCountries={shippingCountries} />;
};

export default CheckoutPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const cartId = query.id;
	const checkout = await createCheckout(cartId);
	const shippingCountries = await getCheckoutShippingCountries(checkout.id);
	return {
		props: {
			checkout,
			shippingCountries,
		},
	};
};
