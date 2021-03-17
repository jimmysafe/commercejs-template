import commerce from '../commerce/config';
import { useEffect, useState, FC } from 'react';
import { Category, CategoryQuery } from '../commerce/types/categories';
import { useRouter } from 'next/router';

const Categories: FC = () => {
	const router = useRouter();
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		commerce.categories
			.list()
			.then((categories: CategoryQuery) => setCategories(categories.data))
			.catch((err: any) => console.log(err));
	}, []);
	return (
		<div className='py-8 flex'>
			{categories.map((cat) => (
				<div
					key={cat.id}
					onClick={() => router.push(`/category/${cat.slug}`)}
					className='uppercase font-semibold mx-2 cursor-pointer'
				>
					<p>{cat.name}</p>
				</div>
			))}
		</div>
	);
};

export default Categories;
