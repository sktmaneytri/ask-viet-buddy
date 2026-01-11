export interface Product {
  id: string;
  name: string;
  category: 'airpods' | 'charger' | 'cable';
  subcategory?: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
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
