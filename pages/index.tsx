import commerce from '../commerce/config';
import { useEffect, useState } from 'react';
import { Product, ProductQuery } from '../commerce/types/product';
import ProductList from '../components/ProductList';

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		commerce.products
			.list({ category_slug: ['top'] })
			.then((products: ProductQuery) => setProducts(products.data))
			.catch((err: any) => console.log(err));
	}, []);

	console.log(products);

	return <ProductList products={products} />;
}
