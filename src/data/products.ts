import { Product, Category, Testimonial } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'airpods',
    name: 'AirPods',
    icon: '🎧',
    description: 'Tai nghe không dây AP hổ vằn'
  },
  {
    id: 'speaker',
    name: 'Loa',
    icon: '🔊',
    description: 'Loa bluetooth chất lượng cao'
  },
  {
    id: 'charger',
    name: 'Củ Sạc',
    icon: '🔌',
    description: 'Củ sạc nhanh chính hãng anker, remax,.. siêu bền và an toàn'
  },
  {
    id: 'cable',
    name: 'Cáp Sạc',
    icon: '🔗',
    description: 'Cáp sạc nhanh chính hãng anker, remax,.. chất lượng cao'
  }
];

export const products: Product[] = [
  // AirPods
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    category: 'airpods',
    brand: 'Hàng replica',
    price: 300000,
    originalPrice: 599000,
    image: 'https://media.istockphoto.com/id/2237358070/vi/anh/tai-nghe-kh%C3%B4ng-d%C3%A2y-hi%E1%BB%87n-%C4%91%E1%BA%A1i-m%C3%A0u-tr%E1%BA%AFng-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-sao-ch%C3%A9p-kh%C3%B4ng-gian.jpg?s=2048x2048&w=is&k=20&c=S77IzExYDkGCuEIVCNl9lI89yDpagM54mvKI1ji4iE0=',
    images: [
      'https://media.istockphoto.com/id/2237358070/vi/anh/tai-nghe-kh%C3%B4ng-d%C3%A2y-hi%E1%BB%87n-%C4%91%E1%BA%A1i-m%C3%A0u-tr%E1%BA%AFng-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-sao-ch%C3%A9p-kh%C3%B4ng-gian.jpg?s=2048x2048&w=is&k=20&c=S77IzExYDkGCuEIVCNl9lI89yDpagM54mvKI1ji4iE0=',
      'https://onewaymobile.vn/images/products/2024/09/10/original/1.png',
      'https://onewaymobile.vn/images/products/2024/09/10/original/2.png',
      'https://onewaymobile.vn/images/products/2024/09/10/original/3.png',
      'https://onewaymobile.vn/images/products/2024/09/10/original/4.png',
      'https://onewaymobile.vn/images/products/2024/09/10/original/5.png',
      'https://onewaymobile.vn/images/products/2024/09/10/original/8.png',
    ],
    description: 'AirPods 4 ANC mới nhất với thiết kế cải tiến và âm thanh vượt trội - công nghệ chống ồn chủ động',
    specifications: ['Chip A12', 'Chống ồn chủ động ANC', 'Thiết kế mới', 'Pin 5 giờ', 'Sạc USB-C'],
    inStock: true,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro',
    category: 'airpods',
    brand: 'Hàng replica',
    price: 250000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=1170&auto=format&fit=crop',
      'https://apple.ngocnguyen.vn/cdn/images/202403/goods_img/tai-nghe-bluetooth-airpods-pro-2-type-c-brand-new-100-P15568-1710074772380.jpg',
      'https://apple.ngocnguyen.vn/cdn/images/202403/goods_img/tai-nghe-bluetooth-airpods-pro-2-type-c-brand-new-100-P15568-1710074772380.jpg',
      'https://apple.ngocnguyen.vn/cdn/images/202408/goods_img/tai-nghe-bluetooth-airpods-pro-2-type-c-brand-new-100-P15568-1722589129812.png'
    ],
    description: 'AirPods Pro với chống ồn chủ động và chế độ xuyên âm',
    specifications: ['Chống ồn chủ động', 'Chế độ xuyên âm', 'Chống nước IPX4', 'Chip H1'],
    inStock: false,
    rating: 4.9,
    reviews: 52
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    category: 'airpods',
    brand: 'Hàng replica',
    price: 280000,
    image: 'https://pakistanstore.pk/wp-content/uploads/2022/12/Apple-AirPods-Pro-2-ANC-Copy.jpg',
    images: [
      'https://pakistanstore.pk/wp-content/uploads/2022/12/Apple-AirPods-Pro-2-ANC-Copy.jpg',
      'https://onewaymobile.vn/images/products/2022/09/09/original/airpod-pro-2022-1.png',
      'https://onewaymobile.vn/images/products/2022/09/09/original/airpod-pro-2022-3.png',
      'https://onewaymobile.vn/images/products/2022/09/09/original/airpod-pro-2022-5.png',
    ],
    description: 'AirPods Pro 2 với chip H2 mới, chống ồn gấp đôi',
    specifications: ['Chip H2', 'Chống ồn 2x', 'Âm thanh không gian', 'Adaptive Audio'],
    inStock: true,
    rating: 5.0,
    reviews: 24
  },
  {
    id: 'airpods-3',
    name: 'AirPods 3',
    category: 'airpods',
    brand: 'Hàng replica',
    price: 250000,
    originalPrice: 499000,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop'
    ],
    description: 'AirPods thế hệ 3 với thiết kế công thái học, nhỏ gọn thoải mái cho tai',
    specifications: ['Chip H1', 'Âm thanh không gian', 'Chống nước IPX4', 'Pin 6 giờ'],
    inStock: false,
    rating: 4.8,
    reviews: 56
  },

  // Speakers - TẤT CẢ HẾT HÀNG
  {
    id: 'jbl-flip-6',
    name: 'JBL Flip 6',
    category: 'speaker',
    brand: 'Hàng replica',
    price: 599000,
    originalPrice: 749000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    description: 'Loa bluetooth JBL Flip 6 với âm bass mạnh mẽ, chống nước IP67',
    specifications: ['Công suất 30W', 'Pin 12 giờ', 'Chống nước IP67', 'PartyBoost'],
    inStock: false, // HẾT HÀNG
    rating: 4.8,
    reviews: 892
  },
  {
    id: 'marshall-emberton',
    name: 'Marshall Emberton II',
    category: 'speaker',
    brand: 'Marshall',
    price: 3890000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
    description: 'Loa Marshall Emberton II thiết kế cổ điển, âm thanh đỉnh cao',
    specifications: ['Công suất 20W', 'Pin 30 giờ', 'Chống nước IP67', 'Bluetooth 5.1'],
    inStock: false, // HẾT HÀNG
    rating: 4.9,
    reviews: 56
  },
  {
    id: 'bose-soundlink',
    name: 'Bose SoundLink Flex',
    category: 'speaker',
    brand: 'Bose',
    price: 3290000,
    originalPrice: 3790000,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop',
    description: 'Loa Bose SoundLink Flex siêu bền, âm thanh Bose đặc trưng',
    specifications: ['PositionIQ', 'Pin 12 giờ', 'Chống nước IP67', 'Chống va đập'],
    inStock: false, // HẾT HÀNG
    rating: 4.7,
    reviews: 45
  },
  {
    id: 'philips-tas2108',
    name: 'Philips TAS2108',
    category: 'speaker',
    brand: 'Philips',
    price: 1161000,
    originalPrice: 2290000,
    image: 'https://cdn.hstatic.net/products/200000097009/1_1aa95f027763496ab9a8aaf8260bfde6_grande.png',
    description: 'Loa bluetooth Philips TAS2108, công suất 5W màu đen',
    specifications: ['Công suất 30W', 'Hi-Res Audio', 'Pin 12 giờ', 'BassUp'],
    inStock: false, // HẾT HÀNG
    rating: 4.6,
    reviews: 34
  },

  // Củ sạc iPhone < 15
  {
    id: 'apple-20w',
    name: 'Apple 20W USB-C Power Adapter',
    category: 'charger',
    subcategory: 'iphone-old',
    brand: 'Apple',
    price: 590000,
    image: 'https://alodidong.vn/storage/image/san-pham/phu-kien/cu-sac/cu-sac-nhanh-iphone-type-c-20w.jpg',
    description: 'Củ sạc Apple 20W chính hãng cho iPhone 14 trở xuống',
    specifications: ['Công suất 20W', 'Cổng USB-C', 'Sạc nhanh', 'Chính hãng Apple'],
    inStock: true,
    rating: 4.8,
    reviews: 90
  },
  {
    id: 'anker-zolo-20w',
    name: 'Anker Zolo 20W',
    category: 'charger',
    subcategory: 'iphone-old',
    brand: 'Anker',
    price: 200000,
    originalPrice: 250000,
    image: 'https://pos.nvncdn.com/772a32-67469/ps/20250409_fExziFBf6B.jpeg?v=1744170184',
    description: 'Anker zolo siêu nhỏ gọn 20W cho iPhone 14 trở xuống',
    specifications: ['Công suất 20W', 'PowerIQ 3.0', 'Siêu nhỏ gọn', 'An toàn MultiProtect'],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },

  // Củ sạc iPhone 15+
  {
    id: 'anker-zolo-30w',
    name: 'Anker Zolo 30W',
    category: 'charger',
    subcategory: 'iphone-new',
    brand: 'Anker',
    price: 280000,
    image: 'https://pos.nvncdn.com/772a32-67469/ps/20250409_fExziFBf6B.jpeg?v=1744170184',
    description: 'Anker zolo siêu nhỏ gọn 30W cho iPhone 14 15 16 17 Pro max',
    specifications: ['Công suất 30W', '2 cổng USB-C', 'Sạc 2 thiết bị', 'Chính hãng ANKER'],
    inStock: true,
    rating: 4.9,
    reviews: 34
  },
  {
    id: 'remax-rp-u115',
    name: 'Remax RP-U115 20W Siêu Nhanh cho iPhone 14 đổ xuống',
    category: 'charger',
    subcategory: 'iphone-new',
    brand: 'Remax',
    price: 150000,
    originalPrice: 190000,
    image: 'https://product.hstatic.net/200000685523/product/coc_sac_remax_rp-u115_1u_20w_2e259e1a3a27436fab30333ddb849c0b.png',
    description: 'Remax RP-U115 20W Siêu Nhanh cho iPhone 14 đổ xuống',
    specifications: ['Công suất 20W', 'GaN II', 'ActiveShield 2.0'],
    inStock: true,
    rating: 4.8,
    reviews: 67
  },

  // Cáp sạc
  {
    id: 'apple-usbc-lightning',
    name: 'Apple USB-C to Lightning 1.5m',
    category: 'cable',
    brand: 'Apple',
    price: 190000,
    image: 'https://dstore.tn/1176-large_default/cable-type-c-lightning-apple.jpg',
    description: 'Cáp sạc Apple USB-C to Lightning cho iPhone 14 trở xuống',
    specifications: ['Dài 1.5m', 'USB-C to Lightning', 'Sạc nhanh', 'Chính hãng'],
    inStock: true,
    rating: 4.7,
    reviews: 90
  },
  {
    id: 'apple-usbc-usbc',
    name: 'Apple USB-C to USB-C 1.5m',
    category: 'cable',
    brand: 'Apple',
    price: 250000,
    image: 'https://cdn-img-v2.mybota.vn/uploadv2/web/82/8269/product/2024/10/31/07/51/1730380207_cap-type-c-type-c-1m-apple-mqkj3-thumb-600x600.jpg',
    description: 'Cáp sạc Apple USB-C to USB-C cho iPhone 15 series',
    specifications: ['Dài 1.5m', 'USB-C to USB-C', 'Hỗ trợ 60W', 'Chính hãng'],
    inStock: true,
    rating: 4.8,
    reviews: 56
  },
  {
    id: 'anker-usbc-lightning',
    name: 'Anker PowerLine III USB-C to Lightning',
    category: 'cable',
    brand: 'Anker',
    price: 290000,
    originalPrice: 390000,
    image: 'https://i.ebayimg.com/images/g/uNEAAOSwgtxlPEn5/s-l1600.webp',
    description: 'Cáp Anker bền bỉ, sạc nhanh cho iPhone 14 trở xuống',
    specifications: ['Dài 1.8m', 'MFi certified', 'Bền 35.000 lần gập', 'Sạc nhanh'],
    inStock: true,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 'anker-usbc-usbc-2m',
    name: 'Anker PowerLine III USB-C 2m',
    category: 'cable',
    brand: 'Anker',
    price: 520000,
    image: 'https://file.hstatic.net/1000153276/file/71oy25jjqql.png',
    description: 'Cáp Anker USB-C 2m cho iPhone 15 series và MacBook',
    specifications: ['Dài 2m', 'USB-C to USB-C', '100W PD', 'Vỏ bọc nylon'],
    inStock: true,
    rating: 4.7,
    reviews: 89
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Văn Minh',
    avatar: 'https://images.unsplash.com/photo-1750535135635-3783825e996c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'AirPods Pro 2 chất lượng tuyệt vời! Chống ồn cực tốt, pin trâu. Ship nhanh, đóng gói cẩn thận. Sẽ ủng hộ shop dài dài!',
    product: 'AirPods Pro 2',
    date: '15/01/2024',
    verified: true
  },
  {
    id: '2',
    name: 'Trần Thị Hương',
    avatar: 'https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'Mua củ sạc Anker 67W về dùng cho iPhone 15 Pro Max, sạc siêu nhanh. Giá tốt hơn nhiều nơi khác. Recommend mọi người!',
    product: 'Anker 737 GaNPrime 67W',
    date: '12/01/2024',
    verified: true
  },
  {
    id: '3',
    name: 'Lê Hoàng Nam',
    avatar: 'https://images.unsplash.com/photo-1750535135635-3783825e996c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'Loa JBL Flip 6 âm thanh quá đỉnh! Mang đi picnic, đi biển thoải mái vì chống nước tốt. Shop tư vấn nhiệt tình.',
    product: 'JBL Flip 6',
    date: '10/01/2024',
    verified: true
  },
  {
    id: '4',
    name: 'Phạm Thu Trang',
    avatar: 'https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    comment: 'Cáp sạc Anker dùng bền lắm, đã mua lần 2 rồi. Giao hàng nhanh, giá cả hợp lý. Chỉ tiếc là không có nhiều màu.',
    product: 'Anker PowerLine III',
    date: '08/01/2024',
    verified: true
  },
  {
    id: '5',
    name: 'Đỗ Quang Huy',
    avatar: 'https://images.unsplash.com/photo-1750535135635-3783825e996c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'Marshall Emberton II design đẹp quá! Âm thanh vintage rất hay. Pin dùng được mấy ngày luôn. Hàng chính hãng 100%.',
    product: 'Marshall Emberton II',
    date: '05/01/2024',
    verified: true
  },
  {
    id: '6',
    name: 'Vũ Thị Mai Anh',
    avatar: 'https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'Mua AirPods 3 tặng bạn gái, em ấy thích lắm. Đóng hộp đẹp, có túi giấy tặng kèm. Giá sale rẻ hơn Apple Store.',
    product: 'AirPods 3',
    date: '03/01/2024',
    verified: true
  },
  {
    id: '7',
    name: 'Hoàng Đức Thịnh',
    avatar: 'https://images.unsplash.com/photo-1750535135635-3783825e996c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'Shop uy tín, hàng chính hãng. Đã mua nhiều lần, lần nào cũng hài lòng. Nhân viên tư vấn rất am hiểu sản phẩm.',
    product: 'Apple 20W Adapter',
    date: '01/01/2024',
    verified: true
  },
  {
    id: '8',
    name: 'Nguyễn Thùy Linh',
    avatar: 'https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'Bose SoundLink Flex nhỏ gọn mà bass cực mạnh! Mang theo đi gym rất tiện. Recommend cho ai thích nghe nhạc.',
    product: 'Bose SoundLink Flex',
    date: '28/12/2023',
    verified: true
  }
];
