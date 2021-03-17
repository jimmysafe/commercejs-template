import { FC } from 'react';
import { ProductData } from '../types/products';
import ProductCard from './ProductCard';

type Props = {
	products: ProductData[];
};

const ProductList: FC<Props> = ({ products }) => {
	return (
		<section className='container mx-auto my-8'>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					image_url={product.media.source}
					id={product.id}
					name={product.name}
					permalink={product.permalink}
					price={product.price}
				/>
			))}
		</section>
	);
};

export default ProductList;
