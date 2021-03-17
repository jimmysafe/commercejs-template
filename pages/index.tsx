import commerce from '../commerce';
import { useEffect, useState } from 'react';
import { ProductRootData, ProductData } from '../types/products';
import ProductList from '../components/ProductList';

export default function Home() {
	const [products, setProducts] = useState<ProductData[]>([]);

	useEffect(() => {
		commerce.products
			.list({ category_slug: ['top'] })
			.then((products: ProductRootData) => setProducts(products.data))
			.catch((err: any) => console.log(err));
	}, []);

	return <ProductList products={products} />;
}
