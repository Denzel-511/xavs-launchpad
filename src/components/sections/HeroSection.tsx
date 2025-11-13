import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, MapPin, Sparkles, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Floating Orbs */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 hover:bg-primary/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold">Cohort 1 • 20 Spots Only • January 2026</span>
              </Badge>
            </div>

            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Build Real Tech Skills in{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    8 Weeks
                  </span>
                  <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-secondary animate-pulse-slow" />
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Join XAVS Launchpad — an 8-week hybrid program by XAVS Labs where you{" "}
              <span className="text-foreground font-semibold">learn by building</span>, not by watching.
            </p>

            <div className="flex flex-wrap gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Zap, text: "Hands-On Projects", color: "primary" },
                { icon: Target, text: "Industry Mentors", color: "secondary" },
                { icon: Sparkles, text: "Real Outcomes", color: "primary" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 group cursor-default"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Apply for January 2026 Cohort
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("tracks")}
                className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                Explore Tracks
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 text-sm group cursor-default">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Accra & Online</span>
              </div>
              <div className="flex items-center gap-2 text-sm group cursor-default">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-medium">Limited to 20 Students</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Floating Elements */}
          <div className="relative animate-scale-in perspective-1000" style={{ animationDelay: "0.3s", transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_70px_hsl(var(--primary)/0.3)] transition-all duration-700 hover:-translate-y-2 group">
              <img
                src={heroImage}
                alt="XAVS Launchpad students collaborating"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border animate-gradient" style={{ backgroundSize: "200% 200%" }} />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-border hover-lift group">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">8 Weeks</div>
              <div className="text-sm text-muted-foreground mt-1">Intensive Training</div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-border hover-lift group">
              <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">6 Projects</div>
              <div className="text-sm text-muted-foreground mt-1">Portfolio Ready</div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full animate-pulse-slow" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 border-2 border-secondary/30 rounded-lg animate-float" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
