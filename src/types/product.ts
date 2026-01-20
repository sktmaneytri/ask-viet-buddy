export interface Product {
  id: string;
  name: string;
  category: 'airpods' | 'charger' | 'cable' | 'speaker';
  subcategory?: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // Multiple images for gallery
  description: string;
  specifications?: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
  verified: boolean;
}
