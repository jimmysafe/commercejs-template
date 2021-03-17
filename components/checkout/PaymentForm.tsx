import { FC, SyntheticEvent } from 'react';
import {
	Elements,
	ElementsConsumer,
	CardElement,
	CardCvcElement,
	CardNumberElement,
	CardExpiryElement,
	ElementProps,
} from '@stripe/react-stripe-js';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { useSelector } from '../../store';
import { captureCheckout } from '../../queries';

type Props = {
	liveCheckout: any;
	checkoutId: string;
};

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const inputStyle = {
	base: {
		lineHeight: '3.5rem',
		fontFamily: 'Montserrat',
		fontSize: '1.1rem',
	},
};

const PaymentForm: FC<Props> = ({ liveCheckout, checkoutId }) => {
	const {
		firstname,
		lastname,
		address1,
		address2,
		country,
		email,
		region,
		postcode,
		shipping_method,
		city,
	} = useSelector((state) => state.checkout);

	console.log(liveCheckout);

	const handleSubmit = async (e: SyntheticEvent, elements: StripeElements, stripe: Stripe) => {
		e.preventDefault();
		if (!elements || !stripe) return;

		const cardElement = elements.getElement(CardNumberElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			console.log(error);
			return;
		}

		const orderData = {
			line_items: liveCheckout.line_items,
			customer: {
				firstname,
				lastname,
				email,
			},
			shipping: {
				name: shipping_method.label,
				street: address2 ? address1 + ', ' + address2 : address1,
				town_city: city,
				county_state: region.value,
				postal_zip_code: postcode,
				country: country.value,
			},
			fulfillment: {
				shipping_method: shipping_method.value,
			},
			// payment: {
			// 	gateway: 'test_gateway',
			// 	card: {
			// 		number: '4242 4242 4242 4242',
			// 		expiry_month: '11',
			// 		expiry_year: '2023',
			// 		cvc: '123',
			// 		postal_zip_code: '94107',
			// 	},
			// },
			payment: {
				gateway: 'stripe',
				stripe: {
					payment_method_id: paymentMethod.id,
				},
			},
		};

		await captureCheckout(checkoutId, orderData);
	};

	return (
		<div>
			<Elements stripe={stripePromise}>
				<ElementsConsumer>
					{({ elements, stripe }) => {
						return (
							<form className='mt-8' onSubmit={(e) => handleSubmit(e, elements, stripe)}>
								<div className='my-8 font-semibold'>
									<h2>Payment Details</h2>
								</div>
								<div className='flex flex-col'>
									<label htmlFor='address1' className='text-gray-300 text-xs'>
										Card Number*
									</label>
									<CardNumberElement
										className='mt-1 border border-gray-300 h-12 px-4 mb-4'
										options={{ style: inputStyle, placeholder: 'Card Number' }}
									/>
								</div>
								<div className='flex justify-start items-center'>
									<div className='flex flex-col w-1/4 mr-4'>
										<label htmlFor='address1' className='text-gray-300 text-xs'>
											Expiry Date*
										</label>
										<CardExpiryElement
											className='mt-1 border border-gray-300 h-12 px-4 mb-4'
											options={{ style: inputStyle }}
										/>
									</div>
									<div className='flex flex-col w-1/4'>
										<label htmlFor='address1' className='text-gray-300 text-xs'>
											Card Number*
										</label>
										<CardCvcElement
											className='mt-1 border border-gray-300 h-12 px-4 mb-4'
											options={{ style: inputStyle }}
										/>
									</div>
								</div>
								<button>Pay</button>
							</form>
						);
					}}
				</ElementsConsumer>
			</Elements>
		</div>
	);
};

export default PaymentForm;
