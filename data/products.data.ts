export type Product = {
	id: number;
	name: string;
	imageUrl: string;
	specification: string[];
	price: number;
	discountPrice: number;
	affirmPrice: number;
	deliveryDate: string;
	type: 'prebuilt' | 'custom';
};

export const products: Product[] = [
	{
		id: 1,
		name: 'Gaming RDY SLMBG221',
		imageUrl: '/images/Gaming-RDY-SLMBG221.png',
		specification: [
			'Windows 11 Home',
			'Intel® Core™ i7-13700F CPU',
			'GeForce RTX 4060 Ti - 8GB',
			'1TB M.2 NVMe SSD',
			'16GB DDR5-5200 RAM',
		],
		price: 1679,
		discountPrice: 1499,
		affirmPrice: 94,
		deliveryDate: 'Delivery By Wednesday, Jul 26',
		type: 'prebuilt',
	},
	{
		id: 2,
		name: 'Gaming RDY SLMRR214',
		imageUrl: '/images/Gaming-RDY-SLMRR214.png',
		specification: [
			'Windows 11 Home',
			'AMD Ryzen 5 7600 CPU',
			'AMD Radeon RX 7600 - 8GB',
			'1TB M.2 NVMe SSD',
			'16GB DDR5-5200 RAM',
		],
		price: 1399,
		discountPrice: 1149,
		affirmPrice: 72,
		deliveryDate: 'Delivery By Wednesday, Jul 26',
		type: 'prebuilt',
	},
	{
		id: 3,
		name: 'Intel 13th Gen Ultimate Gaming Daily Deal',
		imageUrl: '/images/Intel-13th-Gen-Ultimate-Gaming-Daily-Deal.png',
		specification: [
			'Windows 11 Home',
			'Intel® Core™ i9-13900KF CPU',
			'GeForce RTX 4080 - 16GB',
			'1TB WD SN570 M.2 NVMe SSD',
			'32GB DDR5-6000MHz ADATA RGB RAM',
		],
		price: 3019,
		discountPrice: 2819,
		affirmPrice: 137,
		deliveryDate: 'Estimate Ship By 07/31/2023',
		type: 'custom',
	},
	{
		id: 4,
		name: 'AMD Ryzen Performance Daily Deal',
		imageUrl: '/images/AMD-Ryzen-Performance-Daily-Deal.png',
		specification: [
			'Windows 11 Home',
			'AMD Ryzen™ 7 7700X CPU',
			'GeForce RTX 4060 Ti - 16GB',
			'1TB WD SN570 M.2 NVMe SSD',
			'32GB DDR5-5600MHz TEAMGROUP RGB RAM',
		],
		price: 1717,
		discountPrice: 1917,
		affirmPrice: 83,
		deliveryDate: 'Estimate Ship By 07/31/2023',
		type: 'custom',
	},
	{
		id: 5,
		name: 'Gaming RDY SLHBG227',
		imageUrl: '/images/Gaming-RDY-SLHBG227.png',
		specification: [
			'Windows 11 Home',
			'Intel® Core™ i7-13700F CPU',
			'GeForce RTX 4070 - 12GB',
			'2TB M.2 NVMe SSD',
			'16GB DDR5-5200 RAM',
		],
		price: 2099,
		discountPrice: 1749,
		affirmPrice: 85,
		deliveryDate: 'Delivery By Wednesday, Jul 26',
		type: 'prebuilt',
	},
	{
		id: 6,
		name: 'Creator RDY LCMRG211',
		imageUrl: '/images/Creator-RDY-LCMRG211.png',
		specification: [
			'Windows 11 Pro',
			'AMD Ryzen 9 7950X CPU',
			'GeForce RTX 4090 - 24GB',
			'2TB M.2 NVMe SSD',
			'32GB DDR5-5600MHz RGB RAM',
		],
		price: 3799,
		discountPrice: 3299,
		affirmPrice: 160,
		deliveryDate: 'Delivery By Wednesday, Jul 26',
		type: 'prebuilt',
	},
	{
		id: 7,
		name: 'Intel 13th Gen Gaming PC Daily Deal',
		imageUrl: '/images/Intel-13th-Gen-Gaming-PC-Daily-Deal.png',
		specification: [
			'Windows 11 Home',
			'Intel® Core™ i5-13600KF CPU',
			'GeForce RTX 3080 - 10GB',
			'1TB WD SN570 M.2 NVMe SSD',
			'32GB DDR5-6000MHz ADATA RGB RAM',
		],
		price: 2109,
		discountPrice: 1959,
		affirmPrice: 95,
		deliveryDate: 'Estimate Ship By 07/31/2023',
		type: 'custom',
	},
	{
		id: 8,
		name: 'AMD Ryzen Gaming Plus Daily Deal',
		imageUrl: '/images/AMD-Ryzen-Gaming-Plus-Daily-Deal.png',
		specification: [
			'Windows 11 Home',
			'AMD Ryzen™ 5 7600 CPU',
			'GeForce RTX 4060 - 8GB',
			'1TB ADATA M.2 NVMe SSD',
			'32GB DDR5-5600MHz TEAMGROUP RGB RAM',
		],
		price: 1579,
		discountPrice: 1379,
		affirmPrice: 86,
		deliveryDate: 'Estimate Ship By 07/31/2023',
		type: 'custom',
	},
];
