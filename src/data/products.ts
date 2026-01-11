import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'airpods',
    name: 'AirPods',
    icon: '🎧',
    description: 'Tai nghe không dây chính hãng'
  },
  {
    id: 'charger',
    name: 'Củ Sạc',
    icon: '🔌',
    description: 'Củ sạc nhanh cho mọi thiết bị'
  },
  {
    id: 'cable',
    name: 'Cáp Sạc',
    icon: '🔗',
    description: 'Cáp sạc chất lượng cao'
  }
];

export const products: Product[] = [
  // AirPods
  {
    id: 'airpods-3',
    name: 'AirPods 3',
    category: 'airpods',
    brand: 'Apple',
    price: 4290000,
    originalPrice: 4990000,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    description: 'AirPods thế hệ 3 với âm thanh không gian và chống nước IPX4',
    specifications: ['Chip H1', 'Âm thanh không gian', 'Chống nước IPX4', 'Pin 6 giờ'],
    inStock: true,
    rating: 4.8,
    reviews: 256
  },
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    category: 'airpods',
    brand: 'Apple',
    price: 3290000,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
    description: 'AirPods 4 mới nhất với thiết kế cải tiến và âm thanh vượt trội',
    specifications: ['Chip H2', 'Thiết kế mới', 'Pin 5 giờ', 'Sạc USB-C'],
    inStock: true,
    rating: 4.9,
    reviews: 128
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro',
    category: 'airpods',
    brand: 'Apple',
    price: 5590000,
    originalPrice: 6490000,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop',
    description: 'AirPods Pro với chống ồn chủ động và chế độ xuyên âm',
    specifications: ['Chống ồn chủ động', 'Chế độ xuyên âm', 'Chống nước IPX4', 'Chip H1'],
    inStock: true,
    rating: 4.9,
    reviews: 512
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    category: 'airpods',
    brand: 'Apple',
    price: 6290000,
    image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&h=400&fit=crop',
    description: 'AirPods Pro 2 với chip H2 mới, chống ồn gấp đôi',
    specifications: ['Chip H2', 'Chống ồn 2x', 'Âm thanh không gian', 'Adaptive Audio'],
    inStock: true,
    rating: 5.0,
    reviews: 324
  },

  // Củ sạc iPhone < 15
  {
    id: 'apple-20w',
    name: 'Apple 20W USB-C Power Adapter',
    category: 'charger',
    subcategory: 'iphone-old',
    brand: 'Apple',
    price: 590000,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop',
    description: 'Củ sạc Apple 20W chính hãng cho iPhone 14 trở xuống',
    specifications: ['Công suất 20W', 'Cổng USB-C', 'Sạc nhanh', 'Chính hãng Apple'],
    inStock: true,
    rating: 4.8,
    reviews: 890
  },
  {
    id: 'anker-nano-20w',
    name: 'Anker Nano 20W',
    category: 'charger',
    subcategory: 'iphone-old',
    brand: 'Anker',
    price: 350000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    description: 'Anker Nano siêu nhỏ gọn 20W cho iPhone 14 trở xuống',
    specifications: ['Công suất 20W', 'PowerIQ 3.0', 'Siêu nhỏ gọn', 'An toàn MultiProtect'],
    inStock: true,
    rating: 4.7,
    reviews: 1256
  },

  // Củ sạc iPhone 15+
  {
    id: 'apple-35w-dual',
    name: 'Apple 35W Dual USB-C',
    category: 'charger',
    subcategory: 'iphone-new',
    brand: 'Apple',
    price: 1290000,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    description: 'Củ sạc Apple 35W 2 cổng USB-C cho iPhone 15 series',
    specifications: ['Công suất 35W', '2 cổng USB-C', 'Sạc 2 thiết bị', 'Chính hãng Apple'],
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'anker-67w',
    name: 'Anker 737 GaNPrime 67W',
    category: 'charger',
    subcategory: 'iphone-new',
    brand: 'Anker',
    price: 890000,
    originalPrice: 1090000,
    image: 'https://images.unsplash.com/photo-1628815113969-0487917f66f3?w=400&h=400&fit=crop',
    description: 'Anker 737 công suất cao 67W, sạc siêu nhanh iPhone 15',
    specifications: ['Công suất 67W', 'GaN II', '2 USB-C + 1 USB-A', 'ActiveShield 2.0'],
    inStock: true,
    rating: 4.8,
    reviews: 567
  },

  // Cáp sạc
  {
    id: 'apple-usbc-lightning',
    name: 'Apple USB-C to Lightning 1m',
    category: 'cable',
    brand: 'Apple',
    price: 490000,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    description: 'Cáp sạc Apple USB-C to Lightning cho iPhone 14 trở xuống',
    specifications: ['Dài 1m', 'USB-C to Lightning', 'Sạc nhanh', 'Chính hãng'],
    inStock: true,
    rating: 4.7,
    reviews: 1890
  },
  {
    id: 'apple-usbc-usbc',
    name: 'Apple USB-C to USB-C 1m',
    category: 'cable',
    brand: 'Apple',
    price: 390000,
    image: 'https://images.unsplash.com/photo-1625425496397-d0cf2a5e3a12?w=400&h=400&fit=crop',
    description: 'Cáp sạc Apple USB-C to USB-C cho iPhone 15 series',
    specifications: ['Dài 1m', 'USB-C to USB-C', 'Hỗ trợ 60W', 'Chính hãng'],
    inStock: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'anker-usbc-lightning',
    name: 'Anker PowerLine III USB-C to Lightning',
    category: 'cable',
    brand: 'Anker',
    price: 290000,
    originalPrice: 390000,
    image: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=400&h=400&fit=crop',
    description: 'Cáp Anker bền bỉ, sạc nhanh cho iPhone 14 trở xuống',
    specifications: ['Dài 1.8m', 'MFi certified', 'Bền 35.000 lần gập', 'Sạc nhanh'],
    inStock: true,
    rating: 4.6,
    reviews: 2345
  },
  {
    id: 'anker-usbc-usbc-2m',
    name: 'Anker PowerLine III USB-C 2m',
    category: 'cable',
    brand: 'Anker',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop',
    description: 'Cáp Anker USB-C 2m cho iPhone 15 series và MacBook',
    specifications: ['Dài 2m', 'USB-C to USB-C', '100W PD', 'Vỏ bọc nylon'],
    inStock: true,
    rating: 4.7,
    reviews: 789
  }
];
