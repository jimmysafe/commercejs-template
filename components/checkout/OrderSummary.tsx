import { FC, useState, useRef, useEffect } from 'react';
import { useDispatch } from '../../store';
import { updateLiveCheckout } from '../../store/checkout';
import { liveCheckoutWithDiscountCode } from '../../queries';

type Location = {
	value: string;
	label: string;
};

type Props = {
	liveCheckout: any;
	selectedShippingOption: Location;
	checkoutId: string;
};

const OrderSummary: FC<Props> = ({ liveCheckout, selectedShippingOption, checkoutId }) => {
	const dispatch = useDispatch();

	const [discountCode, setDiscountCode] = useState<string>('');
	const discountCodeRef = useRef<HTMLInputElement>();

	// ASSOCIATE DISCOUNT CODE TO THE LIVE CHECKOUT
	useEffect(() => {
		(async () => {
			if (discountCode) {
				discountCodeRef.current.classList.remove('border', 'border-red-500');
				const newCheckout = await liveCheckoutWithDiscountCode(checkoutId, discountCode);
				console.log(newCheckout);
				if (newCheckout.discount.length === 0) {
					discountCodeRef.current.value = '';
					discountCodeRef.current.classList.add('border', 'border-red-500');
				} else {
					discountCodeRef.current.classList.add('border', 'border-green-500');
				}
				dispatch(updateLiveCheckout(newCheckout));
			}
		})();
	}, [discountCode]);

	console.log(discountCode);

	return (
		<div className='sticky top-20'>
			<div className='bg-blue-100 bg-opacity-30 flex flex-col px-8 pb-8'>
				<div className='mt-8 mb-4 font-semibold'>
					<h3>Your Order</h3>
				</div>
				<hr />
				<div className='my-4'>
					{liveCheckout.line_items.map((item) => (
						<div key={item.id} className='flex my-4'>
							<div>
								<img src={item.media.source} alt={item.name} className='h-24' />
							</div>
							<div className='flex-1 px-4'>
								<p className='font-semibold text-sm mb-2'>{item.name}</p>
								<p className='text-xs text-gray-400'>Quantity: {item.quantity}</p>
							</div>
							<div className='font-semibold text-sm'>
								<p>{item.price.formatted_with_symbol}</p>
							</div>
						</div>
					))}
				</div>
				<hr />
				<div className='flex my-4 items-center'>
					<input
						type='text'
						ref={discountCodeRef}
						id='discount'
						placeholder='Discount Code'
						className='flex-1 border border-gray-300 h-12 px-4 mr-4'
					/>
					<button
						className='bg-black text-white font-semibold h-12 px-4'
						onClick={() => setDiscountCode(discountCodeRef.current.value)}
					>
						Apply
					</button>
				</div>
				<hr />
				<div className='my-4'>
					<div className='flex justify-between items-center mb-2 text-sm'>
						<span>Subtotal</span>
						<span>{liveCheckout.subtotal.formatted_with_symbol}</span>
					</div>
					<div className='flex justify-between items-center mb-2 text-sm'>
						<span>Tax</span>
						<span>{liveCheckout.tax.amount.formatted_with_symbol}</span>
					</div>
					<div className='flex justify-between items-center mb-2 text-sm'>
						<span>Shipping</span>
						<span>
							{!selectedShippingOption
								? 'No shipping method selected'
								: selectedShippingOption.label}
						</span>
					</div>
					<div className='flex justify-between items-center mb-2 text-sm'>
						<span>Discount</span>
						<span>
							{liveCheckout.discount.length === 0
								? 'No discount code applied'
								: liveCheckout.discount.amount_saved.formatted_with_symbol}
						</span>
					</div>
				</div>
				<hr />
				<div className='mt-4 flex justify-between items-center font-semibold text-lg'>
					<span>Total Amount</span>
					<span>{liveCheckout.total.formatted_with_symbol}</span>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
