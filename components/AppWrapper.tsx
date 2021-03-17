import { FC, useEffect } from 'react';
import commerce from '../commerce/config';
import { useDispatch } from '../store';
import { initCart } from '../store/cart';
import Cart from './cart/Cart';
import Categories from './Categories';

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
			<Categories />
			{children}
		</main>
	);
};

export default AppWrapper;
