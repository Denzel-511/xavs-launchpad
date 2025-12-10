"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                XAVS
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <span className="text-muted-foreground font-medium text-lg tracking-wide">Launchra</span>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "tracks", label: "Tracks" },
              { id: "how-it-works", label: "How It Works" },
              { id: "mentors", label: "Mentors" },
              { id: "pricing", label: "Pricing" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-medium group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </button>
            ))}
            <Link href="/apply">
              <Button variant="hero" size="lg" className="relative overflow-hidden group ml-4">
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-2 border-t border-border/30 animate-fade-in bg-background/95 backdrop-blur-xl">
            {[
              { id: "tracks", label: "Tracks" },
              { id: "how-it-works", label: "How It Works" },
              { id: "mentors", label: "Mentors" },
              { id: "pricing", label: "Pricing" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <Link href="/apply" className="w-full block pt-4">
              <Button variant="hero" size="lg" className="w-full">
                Apply Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;