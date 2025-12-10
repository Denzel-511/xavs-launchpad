"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, MapPin, Sparkles, Zap, Target } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center noise-overlay">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute top-10 left-5 w-[500px] h-[500px] rounded-full blur-[100px] animate-float opacity-40"
        style={{ 
          background: 'radial-gradient(circle, hsl(155 70% 45% / 0.3), transparent 70%)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
        }}
      />
      <div 
        className="absolute bottom-10 right-5 w-[600px] h-[600px] rounded-full blur-[120px] animate-float-delayed opacity-30"
        style={{ 
          background: 'radial-gradient(circle, hsl(155 60% 35% / 0.4), transparent 70%)',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` 
        }}
      />
      
      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Badge className="bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 hover:bg-primary/20 transition-all duration-500 hover:scale-105 backdrop-blur-xl shadow-lg shadow-primary/10">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold tracking-wide">Cohort 1 • 25 Spots Only • January 2026</span>
              </Badge>
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Build Real Tech Skills in{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">
                    8 Weeks
                  </span>
                  <Sparkles className="absolute -top-8 -right-10 w-8 h-8 text-primary animate-pulse-slow" />
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Join XAVS Launchpad — an 8-week hybrid program by XAVS Labs where you{" "}
              <span className="text-foreground font-semibold">learn by building</span>, not by watching.
            </p>

            <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: Zap, text: "Hands-On Projects" },
                { icon: Target, text: "Industry Mentors" },
                { icon: Sparkles, text: "Real Outcomes" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-lg shadow-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Link href="/apply">
                <Button variant="hero" size="xl" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Apply for January 2026 Cohort
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                </Button>
              </Link>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("tracks")}
                className="group"
              >
                Explore Tracks
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3 text-sm group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-muted-foreground">Accra & Online</span>
              </div>
              <div className="flex items-center gap-3 text-sm group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-muted-foreground">Limited to 25 Students</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Premium Effects */}
          <div className="relative animate-blur-in perspective-1000" style={{ animationDelay: "0.4s", transform: `translateY(${scrollY * 0.08}px)` }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_hsl(var(--primary)/0.25)] transition-all duration-700 hover:-translate-y-3 group border border-border/30">
              <Image
                src={"/hero-image.jpg"}
                alt="XAVS Launchpad students collaborating"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              {/* Animated Glow Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl hover-lift group animate-glow-pulse">
              <div className="text-4xl font-bold text-gradient">8 Weeks</div>
              <div className="text-sm text-muted-foreground mt-1">Intensive Training</div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            </div>
            
            <div className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl shadow-2xl hover-lift group animate-glow-pulse" style={{ animationDelay: "1.5s" }}>
              <div className="text-4xl font-bold text-gradient">6 Projects</div>
              <div className="text-sm text-muted-foreground mt-1">Portfolio Ready</div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-12 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-12 w-24 h-24 border-2 border-primary/20 rounded-2xl animate-float" />
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-primary/40 rounded-full p-1.5 backdrop-blur-sm">
          <div className="w-2 h-3 bg-primary rounded-full mx-auto animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;