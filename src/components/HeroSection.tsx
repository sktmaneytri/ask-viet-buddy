import { ArrowRight, Headphones, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Ưu đãi đặc biệt - Giảm đến 20%</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Phụ kiện
              <br />
              <span className="text-muted-foreground">Công nghệ</span>
              <br />
              Chính hãng
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Tai nghe không dây bluetooth hổ vằn, loa, củ sạc, cáp sạc zin - chính hãng cam kết chất lượng tốt nhất cho khách hàng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="btn-primary-solid h-14 text-base px-8 gap-2"
                onClick={() => window.location.hash = 'airpods'}
              >
                Mua ngay
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline"
                className="h-14 text-base px-8 border-border hover:bg-secondary"
                onClick={() => window.location.hash = 'charger'}
              >
                Xem sản phẩm
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Bảo hành 12 tháng</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Giao hàng nhanh</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/20 rounded-full blur-3xl scale-75" />
              <img
                src="https://images.unsplash.com/photo-1688789645479-955d294b419f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AirPods"
                className="relative w-96 h-96 sm:w-full sm:h-auto lg:w-[500px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
