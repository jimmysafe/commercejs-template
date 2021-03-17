import { FC } from 'react';
import { Product } from '../commerce/types/product';
import ProductCard from './ProductCard';

type Props = {
	products: Product[];
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
