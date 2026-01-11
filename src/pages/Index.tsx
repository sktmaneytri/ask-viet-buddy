import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ProductSection from '@/components/ProductSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import ChatSupport from '@/components/ChatSupport';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductSection
          categoryId="airpods"
          title="AirPods"
          subtitle="Tai nghe không dây chính hãng Apple với âm thanh đỉnh cao"
        />
        <ProductSection
          categoryId="speaker"
          title="Loa Bluetooth"
          subtitle="Loa di động từ JBL, Marshall, Bose, Anker cho âm nhạc mọi nơi"
        />
        <ProductSection
          categoryId="charger"
          title="Củ Sạc"
          subtitle="Củ sạc nhanh từ Apple, Anker cho mọi thiết bị iPhone"
        />
        <ProductSection
          categoryId="cable"
          title="Cáp Sạc"
          subtitle="Cáp sạc bền bỉ, sạc nhanh cho iPhone mọi thế hệ"
        />
        <TestimonialSection />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Index;
