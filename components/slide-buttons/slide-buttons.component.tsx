import { FC } from 'react';

type SlideButtonsProps = {
	listRef: React.RefObject<HTMLUListElement>;
};

const SlideButtons: FC<SlideButtonsProps> = ({ listRef }) => {
	const scrollList = (direction: 'left' | 'right') => {
		if (listRef.current) {
			const list = listRef.current;
			const listItems = list.querySelectorAll<HTMLLIElement>('& > li');
			let scrollToPostiion = list.scrollLeft;

			//scroll to the card which is cut
			if (direction === 'left') {
				for (let index = listItems.length - 1; index >= 0; index--) {
					const item = listItems[index];
					if (item.offsetLeft < scrollToPostiion) {
						scrollToPostiion = item.offsetLeft + item.offsetWidth + 10 - list.clientWidth;
						break;
					}
				}
			} else {
				for (let index = 0; index < listItems.length; index++) {
					const item = listItems[index];
					if (item.offsetLeft + item.offsetWidth > scrollToPostiion + list.clientWidth) {
						scrollToPostiion = item.offsetLeft - 10;
						break;
					}
				}
			}

			list.scrollTo({
				left: scrollToPostiion,
				behavior: 'smooth',
			});
		}
	};

	const onPreButtonClick = () => {
		scrollList('left');
	};

	const onNextButtonClick = () => {
		scrollList('right');
	};

	return (
		<div className="absolute bottom-[10px] right-[10px] flex gap-2 ">
			<button onClick={onPreButtonClick} className="p-1 shadow-[0px_0px_6px_#00000029]">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				</svg>
			</button>
			<button onClick={onNextButtonClick} className="p-1 shadow-[0px_0px_6px_#00000029]">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
				</svg>
			</button>
		</div>
	);
};

export default SlideButtons;
