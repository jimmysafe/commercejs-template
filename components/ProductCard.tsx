import { useRouter } from 'next/router';
import { FC } from 'react';
import { Price } from '../commerce/types/product';

export type ProductCardProps = {
	id: string;
	name: string;
	price: Price;
	permalink: string;
	image_url: string;
};

const ProductCard: FC<ProductCardProps> = ({ id, name, price, permalink, image_url }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push(`/products/${permalink}`)}
			className='flex flex-col justify-start items-center shadow-md rounded-md cursor-pointer'
			style={{ maxWidth: 300 }}
		>
			<div
				className='bg-center bg-cover h-80 w-full'
				style={{ backgroundImage: `url('${image_url}')` }}
			></div>
			<div className='py-4 w-full text-center'>
				<p className='mb-2'>{name}</p>
				<p>{price.formatted_with_symbol}</p>
			</div>
		</div>
	);
};

export default ProductCard;
