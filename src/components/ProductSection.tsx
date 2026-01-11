import { products } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  categoryId: string;
  title: string;
  subtitle?: string;
}

const ProductSection = ({ categoryId, title, subtitle }: ProductSectionProps) => {
  const categoryProducts = products.filter(p => p.category === categoryId);

  return (
    <section id={categoryId} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-md mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
