import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Maney<span className="text-muted-foreground">Shop</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Cửa hàng phụ kiện công nghệ chính hãng. Chất lượng tạo nên sự khác biệt.
            </p>
            <div className="flex gap-3">
            <a
                href="https://www.facebook.com/maneyshop1609"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/maneyshoop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2">
              <li><a href="#airpods" className="text-muted-foreground hover:text-foreground transition-colors">AirPods</a></li>
              <li><a href="#speaker" className="text-muted-foreground hover:text-foreground transition-colors">Loa</a></li>
              <li><a href="#charger" className="text-muted-foreground hover:text-foreground transition-colors">Củ sạc</a></li>
              <li><a href="#cable" className="text-muted-foreground hover:text-foreground transition-colors">Cáp sạc</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><a href="/chinh-sach-bao-hanh" className="text-muted-foreground hover:text-foreground transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Hướng dẫn mua hàng</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Đánh giá khách hàng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+84 382 943 017</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>sktmaneytri@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
          <p>© 2024 ManeyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
