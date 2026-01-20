import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.inStock) {
      toast.error(`${product.name} hiện đã hết hàng!`);
      return;
    }
    addToCart(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className={`card-glass card-hover overflow-hidden group cursor-pointer ${!product.inStock ? 'opacity-70' : ''}`}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${product.inStock ? 'group-hover:scale-110' : 'grayscale'}`}
        />
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold text-lg">
              HẾT HÀNG
            </span>
          </div>
        )}
        
        {discount > 0 && product.inStock && (
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
        <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
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
            className="w-11 h-11 md:w-11 md:h-11 sm:w-12 sm:h-12 rounded-xl"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            variant={product.inStock ? "default" : "secondary"}
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
