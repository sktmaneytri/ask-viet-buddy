import { ShoppingCart, Menu, X, Search, Shield, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import CartSheet from './CartSheet';

const Header = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Trang chủ', hash: '#home' },
    { name: 'Tai nghe bluetooth', hash: '#airpods' },
    { name: 'Loa', hash: '#speaker' },
    { name: 'Củ Sạc', hash: '#charger' },
    { name: 'Cáp Sạc', hash: '#cable' },
  ];

  const handleNavClick = (hash: string) => {
    // If we're not on the home page, navigate to home first then scroll to section
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      // We're already on home page, just scroll to section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Maney<span className="text-muted-foreground">Shop</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.hash)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}

            {/* Highlighted Links */}
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-border">
              <Link
                to="/chinh-sach-bao-hanh"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                Bảo hành
              </Link>
              <button
                onClick={() => handleNavClick('#reviews')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-sm font-medium hover:bg-amber-500/20 transition-colors"
              >
                <Star className="w-3.5 h-3.5" />
                Đánh giá
              </button>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => {
                  handleNavClick(link.hash);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}

            {/* Highlighted Mobile Links */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Link
                to="/chinh-sach-bao-hanh"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg text-sm font-medium"
              >
                <Shield className="w-4 h-4" />
                Bảo hành
              </Link>
              <button
                onClick={() => {
                  handleNavClick('#reviews');
                  setMobileMenuOpen(false);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-lg text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                Đánh giá
              </button>
            </div>
          </nav>
        )}
      </div>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
};

export default Header;
