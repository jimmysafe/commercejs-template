import { GetServerSideProps, NextPage } from 'next';
import { createCheckout, getCheckoutShippingCountries } from '../queries';
import CheckoutForm from '../components/checkout';

type Props = {
	checkout: any;
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
