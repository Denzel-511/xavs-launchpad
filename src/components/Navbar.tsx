import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                XAVS
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-muted-foreground font-medium text-lg">Launchpad</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("tracks")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              <span>Tracks</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              <span>How It Works</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("mentors")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              <span>Mentors</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              <span>Pricing</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              <span>FAQ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </button>
            <Button variant="hero" size="lg" className="relative overflow-hidden group">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-slide-in">
            <button
              onClick={() => scrollToSection("tracks")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Tracks
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("mentors")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Mentors
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button variant="hero" size="lg" className="w-full">
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
