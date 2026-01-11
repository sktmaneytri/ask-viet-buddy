import { categories } from '@/data/products';

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Danh mục sản phẩm</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Chọn danh mục bạn quan tâm để khám phá các sản phẩm chất lượng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="card-glass card-hover p-8 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
