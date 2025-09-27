import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      {/* Top bar */}
      <div className="bg-ccr-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>0452385321</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Next to Foot Locker and Boost Juice, Near Food Court, BIGW Mall, Orion Springfield Central, Kiosk 1/1 Main St, Springfield Central QLD 4300</span>
            </div>
          </div>
          <div className="hidden md:block">
            
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-ccr-primary">CCR</span>
              <span className="text-ccr-secondary ml-2">COOL CASE REPAIR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-ccr-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-ccr-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-ccr-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-ccr-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-ccr-primary text-ccr-primary hover:bg-ccr-primary hover:text-white">
              Get Quote
            </Button>
            <Button className="bg-ccr-accent hover:bg-ccr-accent/90 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-ccr-primary transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-ccr-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-ccr-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-ccr-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="border-ccr-primary text-ccr-primary hover:bg-ccr-primary hover:text-white">
                  Get Quote
                </Button>
                <Button className="bg-ccr-accent hover:bg-ccr-accent/90 text-white">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;