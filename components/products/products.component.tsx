'use client';

import { useRef } from 'react';
import { products } from '@/data/products.data';
import { useMediaQuery } from '@/utils/hooks/hooks.util';

import SlideButtons from '../slide-buttons/slide-buttons.component';
import ProductCard from '../product-card/product-card.component';

const Products = () => {
	const isMediaQueryMatched = useMediaQuery({ type: 'min-width', value: 769 });
	const listRef = useRef<HTMLUListElement>(null);

	let isMouseDown = false;
	let previousTouch: Touch | null = null;

	const onListMouseDown = () => {
		isMouseDown = true;
	};

	const onListMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
		if (isMouseDown && listRef.current) {
			const list = listRef.current;
			list.scrollLeft -= e.movementX;
		}
	};

	const onListMouseUp = () => {
		isMouseDown = false;
	};

	const onListMouseLeave = () => {
		isMouseDown = false;
	};

	const onListTouchStart = () => {
		isMouseDown = true;
	};

	const onListTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
		const touch = e.touches[0];

		if (previousTouch && isMouseDown && listRef.current) {
			const movementX = touch.pageX - previousTouch.pageX;
			const list = listRef.current;
			list.scrollLeft -= movementX;
		}

		previousTouch = touch as Touch;
	};

	const onListTouchEnd = () => {
		previousTouch = null;
		isMouseDown = false;
	};

	return (
		<div className="max-w-[1480px] m-auto">
			<div className="relative p-[10px]">
				<h1 className="text-center font-bold text-3xl">Best Seller Gaming PC</h1>
				<h2 className="text-center font-bold text-2xl">Prebuilt & Custom</h2>
				{isMediaQueryMatched && <SlideButtons listRef={listRef} />}
			</div>
			<ul
				ref={listRef}
				onMouseDown={onListMouseDown}
				onMouseMove={onListMouseMove}
				onMouseUp={onListMouseUp}
				onMouseLeave={onListMouseLeave}
				onTouchStart={onListTouchStart}
				onTouchMove={onListTouchMove}
				onTouchEnd={onListTouchEnd}
				className={'flex gap-[20px] p-[10px] overflow-hidden relative'}
			>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default Products;
