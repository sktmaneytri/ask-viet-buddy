import { Star, CheckCircle, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialSection = () => {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium">Đánh giá từ khách hàng</span>
          </div>
          
          <h2 className="section-title mb-4">Khách hàng nói gì về chúng tôi?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn 1.000 khách hàng đã tin tưởng ManeyShop. Đọc những đánh giá thực từ người dùng.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <p className="text-4xl font-bold">4.75/5</p>
              <div className="flex items-center justify-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Điểm đánh giá</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">1K+</p>
              <p className="text-sm text-muted-foreground mt-3">Khách hàng</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">97%</p>
              <p className="text-sm text-muted-foreground mt-3">Hài lòng</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-glass card-hover p-6 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= testimonial.rating
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                "{testimonial.comment}"
              </p>

              {/* Product */}
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Sản phẩm: <span className="font-medium text-foreground">{testimonial.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
