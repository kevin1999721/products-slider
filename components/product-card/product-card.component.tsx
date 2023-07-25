import { FC } from 'react';
import { Product } from '@/data/products.data';

import Image from 'next/image';
import affirmIcon from '@/public/icons/icon-affirm.svg';

type ProductCardProps = {
	product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<li className="w-[350px] shrink-0 shadow-[0px_0px_10px_#00000029] rounded-[10px] select-none">
			<div className="p-5">
				<div className="flex justify-center relative p-5">
					<Image
						draggable="false"
						src={product.imageUrl}
						alt={product.name}
						width={200}
						height={200}
						quality={75}
						className="cursor-pointer"
					/>
					<span className="absolute top-0 left-0 px-1 py-0.5 border border-[#929292] rounded-full text-[#929292] text-xs font-bold">
						{product.type === 'prebuilt' ? 'Prebuilt PC' : 'Custom PC'}
					</span>
				</div>
				<div>
					<h6 className="font-bold mb-5 truncate hover:text-[#FF1B1B] cursor-pointer">
						{product.name}
					</h6>
					<div>
						{product.specification.map(specification => (
							<p key={specification} className="text-sm leading-loose">
								{specification}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="bg-[#F2F6FA] p-5">
				<div className="mb-2.5">
					<span className="px-2 py-1 text-white text-xs bg-[#FF1B1B] rounded-full">{`SAVE $${
						product.price - product.discountPrice
					}`}</span>
				</div>
				<div className="mb-2.5">
					<span>
						<span className="text-2xl font-bold">{`$${product.discountPrice}`}</span>
						<span className="ml-1.5 text-sm text-[#929292] line-through">{`$${product.price}`}</span>
					</span>
					<span className="flex items-center">
						<span className="text-sm cursor-pointer">
							Starting at{' '}
							<span className="text-[#004CFF]">{`$${product.affirmPrice}/mo`} with</span>
						</span>
						<span>
							<Image src={affirmIcon} alt="affirm" width={42} />
						</span>
					</span>
				</div>
				<div className="flex justify-between items-center">
					<div>
						<p className="text-sm font-bold">Free Shipping</p>
						<p className="text-sm">{product.deliveryDate}</p>
					</div>
					<div>
						<button className="px-3.5 py-1 border border-[#FF1B1B] rounded-full text-[#FF1B1B] text-sm hover:bg-[#FF1B1B] hover:text-white transition-all">
							{product.type === 'prebuilt' ? 'Buy Now' : 'Customize'}
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProductCard;
