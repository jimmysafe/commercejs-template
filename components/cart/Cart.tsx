import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from '../../store';
import commerce from '../../commerce/config';
import { removeFromCart } from '../../store/cart';

const Cart: FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const handleRemoveFromCart = async (productId: string) => {
		const item = await commerce.cart.remove(productId);
		dispatch(removeFromCart(item.cart));
	};

	return (
		<div>
			{cart.items.map((item) => (
				<div key={item.id} className='flex py-4'>
					<p className='mx-2'>{item.name}</p>
					<p className='mx-2'>{item.price.formatted_with_symbol}</p>
					<p className='mx-2'>Quantity: {item.quantity}</p>
					<p className='mx-2' onClick={() => handleRemoveFromCart(item.id)}>
						X
					</p>
				</div>
			))}
			<p>Total: {cart.total}</p>
			<button onClick={() => router.push(`/checkout?id=${cart.id}`)}>Checkout</button>
		</div>
	);
};

export default Cart;
