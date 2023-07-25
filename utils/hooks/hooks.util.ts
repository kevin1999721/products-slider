import { useState, useEffect } from 'react';

type MediaQuery = {
	type: 'max-width' | 'min-width';
	value: number;
};

export const useMediaQuery = (mediaQuery: MediaQuery) => {
	const [isMatched, setIsMatched] = useState<boolean>(false);

	useEffect(() => {
		const windowResizeHandler = () => {
			if (mediaQuery.type === 'max-width') {
				setIsMatched(window.innerWidth <= mediaQuery.value);
			} else {
				setIsMatched(window.innerWidth >= mediaQuery.value);
			}
		};

		windowResizeHandler();
		window.addEventListener('resize', windowResizeHandler);

		return () => {
			window.removeEventListener('resize', windowResizeHandler);
		};
	}, []);

	return isMatched;
};
