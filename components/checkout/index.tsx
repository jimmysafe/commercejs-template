import { FC, useEffect } from 'react';
import { getRegions, getShippingOptions, liveCheckoutWithShipping } from '../../commerce';
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';
import { useDispatch, useSelector } from '../../store';
import { addRegions, addShippingOptions, updateLiveCheckout } from '../../store/checkout';
import OrderSummary from './OrderSummary';
import { Checkout, LiveCheckout, Location, ShippingOption } from '../../commerce/types/checkout';

type CheckoutFormProps = {
	checkout: Checkout;
	shippingCountries: Location[];
};

const CheckoutForm: FC<CheckoutFormProps> = ({ checkout, shippingCountries }) => {
	const dispatch = useDispatch();

	const regions: Location[] = useSelector((state) => state.checkout.config.regions);
	const shippingOptions: ShippingOption[] = useSelector(
		(state) => state.checkout.config.shippingOptions
	);
	const selectedCountry: Location = useSelector((state) => state.checkout.country);
	const selectedRegion: Location = useSelector((state) => state.checkout.region);
	const selectedShippingOption: ShippingOption = useSelector(
		(state) => state.checkout.shipping_method
	);
	const liveCheckout: LiveCheckout = useSelector((state) => state.checkout.live);

	// INIT CHECKOUT
	useEffect(() => {
		dispatch(updateLiveCheckout(checkout.live));
	}, [checkout]);

	//ONCE COUNTRY IS SELECTED, FETCH REGIONS
	useEffect(() => {
		(async () => {
			if (selectedCountry) {
				const regions = await getRegions(selectedCountry.value);
				dispatch(addRegions(regions));
			}
		})();
	}, [selectedCountry]);

	// ONCE REGION IS SELECTED, GET SHIPPING OPTIONS AVAILABLE TO THAT REGION
	useEffect(() => {
		(async () => {
			if (selectedRegion) {
				const shippingOptions = await getShippingOptions(
					checkout.id,
					selectedCountry.value,
					selectedRegion.value
				);
				dispatch(addShippingOptions(shippingOptions));
			}
		})();
	}, [selectedRegion]);

	// ASSOCIATE SHIPPING OPTION TO THE LIVE CHECKOUT (adds shipping price to the total)
	useEffect(() => {
		(async () => {
			if (selectedShippingOption) {
				const updatedCheckout = await liveCheckoutWithShipping(
					checkout.id,
					selectedShippingOption.value,
					selectedCountry.value,
					selectedRegion.value
				);

				dispatch(updateLiveCheckout(updatedCheckout));
			}
		})();
	}, [selectedShippingOption]);

	if (!liveCheckout) return <p>Loading..</p>;

	return (
		<div className='flex justify-center items-start'>
			<div className='w-1/2 pr-10'>
				<AddressForm
					regions={regions}
					shippingCountries={shippingCountries}
					shippingOptions={shippingOptions}
					selectedShippingOption={selectedShippingOption}
				/>
				<PaymentForm liveCheckout={liveCheckout} checkoutId={checkout.id} />
			</div>

			<OrderSummary
				liveCheckout={liveCheckout}
				selectedShippingOption={selectedShippingOption}
				checkoutId={checkout.id}
			/>
		</div>
	);
};

export default CheckoutForm;
