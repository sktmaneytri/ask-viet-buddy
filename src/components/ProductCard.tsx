import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="card-glass card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {discount > 0 && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-lg">
            -{discount}%
          </div>
        )}
        
        <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg border border-border">
          {product.brand}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} đánh giá)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>

          <Button
            size="icon"
            className="btn-primary-solid w-11 h-11 rounded-xl"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
