import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import CartSheet from './CartSheet';

const Header = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'AirPods', href: '#airpods' },
    { name: 'Loa', href: '#speaker' },
    { name: 'Củ Sạc', href: '#charger' },
    { name: 'Cáp Sạc', href: '#cable' },
    { name: 'Đánh giá', href: '#reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Maney<span className="text-muted-foreground">Shop</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
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
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
};

export default Header;
