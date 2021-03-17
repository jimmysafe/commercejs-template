import { FC, useEffect } from 'react';
import commerce from '../commerce';
import { useDispatch } from '../store';
import { initCart } from '../store/cart';
import Cart from './cart/Cart';

const AppWrapper: FC = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const cart = await commerce.cart.retrieve();
			dispatch(initCart(cart));
		})();
	}, []);

	return (
		<main className='container mx-auto'>
			<Cart />
			{children}
		</main>
	);
};

export default AppWrapper;
