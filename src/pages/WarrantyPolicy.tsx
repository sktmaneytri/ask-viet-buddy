import { ArrowLeft, Headphones, Speaker, Cable, AlertTriangle, Truck, Shield, CheckCircle2, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại trang chủ
            </Link>
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Chính Sách <span className="text-primary">Bảo Hành</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ManeyShop luôn mong muốn mang đến trải nghiệm tốt nhất cho khách hàng. 
                Dưới đây là chính sách bảo hành chi tiết cho từng dòng sản phẩm.
              </p>
            </div>
          </div>
        </section>

        {/* Warranty Policies */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Tai nghe */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tai nghe Bluetooth AP</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Bảo hành 06 tháng</p>
                      <p className="text-sm text-muted-foreground">1 đổi 1 nếu có bất kỳ lỗi nào từ nhà sản xuất</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Liên hệ trực tiếp qua Facebook hoặc Instagram: ManeyShop
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Bảo hành theo số điện thoại khách hàng (không dán tem)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Loa */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                  <Speaker className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Loa chính hãng</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Bảo hành 01 năm</p>
                      <p className="text-sm text-muted-foreground">Đối với tất cả các lỗi do nhà sản xuất</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Liên hệ trực tiếp qua Facebook hoặc Instagram: ManeyShop
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Bảo hành theo tem dán trên sản phẩm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cáp & Củ sạc */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                  <Cable className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cáp sạc & Củ sạc</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <p className="font-medium text-sm">Cáp sạc giá rẻ</p>
                    <p className="text-primary font-semibold">Bảo hành 30 ngày</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <p className="font-medium text-sm">Cáp zin (C to L / C to C) bóc hộp</p>
                    <p className="text-primary font-semibold">Bảo hành 06 tháng – bao đổi trả</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <p className="font-medium text-sm">Củ sạc Anker & Remax</p>
                    <p className="text-primary font-semibold">Bảo hành 06 tháng – bao đổi trả</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold">Lưu ý trước khi gửi sản phẩm bảo hành</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Để tiết kiệm thời gian cho khách hàng, shop mong bạn vui lòng kiểm tra trước:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Cable className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Đối với cáp sạc</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Khách vui lòng dùng một bộ cáp sạc khác đang hoạt động bình thường để kiểm tra, 
                    nhằm xác định lỗi do cáp hay củ sạc trước khi gửi bảo hành.
                  </p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Đối với tai nghe</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Khách vui lòng thực hiện theo bảng hướng dẫn fix các lỗi tai nghe thông dụng 
                    (shop cung cấp bên dưới) trước khi gửi sản phẩm về shop.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Policy */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Phí vận chuyển</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-400">Sản phẩm lỗi đúng điều kiện bảo hành</p>
                    <p className="text-muted-foreground">
                      Shop hỗ trợ <span className="text-green-400 font-semibold">100% phí ship</span>, 
                      cam kết không thu thêm phụ phí.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Sản phẩm không lỗi nhưng vẫn gửi về shop</p>
                    <p className="text-muted-foreground">
                      Khách hàng vui lòng thanh toán phí vận chuyển.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Liên hệ ngay để được hỗ trợ bảo hành</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/maneyshop1609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/maneyshoop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border text-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WarrantyPolicy;
