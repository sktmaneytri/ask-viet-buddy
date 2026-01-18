import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { ShoppingCart, Zap, Clock, Sparkles, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DailyDealsSection = () => {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Get random deal products (products with discount)
  const dealProducts = products
    .filter(p => p.originalPrice && p.inStock)
    .slice(0, 3);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (product: typeof dealProducts[0]) => {
    addToCart(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  if (dealProducts.length === 0) return null;

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500" />
      
      {/* Floating sparkles */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Sparkles className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce delay-100">
        <Sparkles className="w-8 h-8 text-orange-500" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-bounce delay-200">
        <Flame className="w-6 h-6 text-red-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with countdown */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mb-4 animate-pulse">
            <Zap className="w-5 h-5" />
            <span className="font-bold">FLASH SALE</span>
            <Zap className="w-5 h-5" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🔥 Khuyến mãi trong ngày 🔥
          </h2>
          
          {/* Countdown timer */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>Kết thúc sau:</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-foreground text-background px-4 py-2 rounded-lg min-w-[60px]">
                <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs block">Giờ</span>
              </div>
              <span className="text-2xl font-bold self-center">:</span>
              <div className="bg-foreground text-background px-4 py-2 rounded-lg min-w-[60px]">
                <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs block">Phút</span>
              </div>
              <span className="text-2xl font-bold self-center">:</span>
              <div className="bg-foreground text-background px-4 py-2 rounded-lg min-w-[60px] animate-pulse">
                <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs block">Giây</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deal products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dealProducts.map((product, index) => {
            const discount = product.originalPrice 
              ? Math.round((1 - product.price / product.originalPrice) * 100) 
              : 0;

            return (
              <div 
                key={product.id}
                className="group relative bg-card border-2 border-orange-500/30 rounded-2xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hot badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-bounce">
                  -{discount}%
                </div>

                {/* Lightning effect */}
                <div className="absolute top-4 left-4">
                  <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500 animate-pulse" />
                </div>

                <div className="relative aspect-square mb-4 bg-muted/30 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-foreground line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-orange-500">
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice.toLocaleString('vi-VN')}₫
                      </span>
                    )}
                  </div>

                  {/* Progress bar for urgency */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Đã bán: {Math.floor(Math.random() * 50 + 20)}</span>
                      <span>Còn lại: {Math.floor(Math.random() * 20 + 5)}</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        style={{ width: `${Math.random() * 40 + 50}%` }}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Mua ngay
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
