import { GetServerSideProps, NextPage } from 'next';
import commerce from '../../commerce';
import { useDispatch } from '../../store';
import { ProductData } from '../../types/products';
import { addToCart } from '../../store/cart';

type Props = {
	product: ProductData;
};

const ProductPage: NextPage<Props> = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddToCart = async (productId: string, quantity: number) => {
		const item = await commerce.cart.add(productId, quantity);
		dispatch(addToCart(item.cart));
	};

	return (
		<section className='container mx-auto flex justify-between items-start'>
			<div>
				<img src={product.media.source} alt={product.name} />
			</div>
			<div>
				<h1>{product.name}</h1>
				<h3>{product.price.formatted_with_symbol}</h3>
				<div dangerouslySetInnerHTML={{ __html: product.description }}></div>
				<div onClick={() => handleAddToCart(product.id, 1)}>Add To Cart</div>
			</div>
		</section>
	);
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const product: ProductData = await commerce.products.retrieve(params.permalink, {
		type: 'permalink',
	});
	return {
		props: {
			product,
		},
	};
};
