import { GetServerSideProps, NextPage } from 'next';
import commerce from '../../commerce/config';
import { Product, ProductQuery } from '../../commerce/types/product';
import ProductList from '../../components/ProductList';

type CategoryPageProps = {
	products: Product[];
	category: string;
};

const CategoryPage: NextPage<CategoryPageProps> = ({ products, category }) => {
	return (
		<div>
			<h1>{category}</h1>

			<div className='mt-8'>
				<ProductList products={products} />
			</div>
		</div>
	);
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const categoryProducts: ProductQuery = await commerce.products.list({
		category_slug: [params.slug],
	});
	const products = categoryProducts.data;
	return {
		props: {
			products,
			category: params.slug,
		},
	};
};
