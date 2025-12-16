"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, MapPin, Sparkles, Zap, Target } from "lucide-react";
import Link from "next/link"
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Premium Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/80" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-10 left-5 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30"
        style={{ 
          background: 'radial-gradient(circle, hsl(155 70% 45% / 0.3), transparent 70%)',
          x: mousePosition.x,
          y: mousePosition.y
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-5 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{ 
          background: 'radial-gradient(circle, hsl(155 60% 35% / 0.4), transparent 70%)',
          x: -mousePosition.x,
          y: -mousePosition.y
        }}
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-10"
            style={{ y: contentY, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge className="bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 hover:bg-primary/20 transition-all duration-500 hover:scale-105 backdrop-blur-xl shadow-lg shadow-primary/10">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-semibold tracking-wide">Cohort 1 • 25 Spots Only • January 2026</span>
              </Badge>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Build Real Tech Skills in{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">
                    8 Weeks
                  </span>
                  <Sparkles className="absolute -top-8 -right-10 w-8 h-8 text-primary animate-pulse-slow" />
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join our <span className="text-foreground font-semibold">community of builders</span> — an 8-week hybrid program where you learn by building real products, not watching tutorials.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: Zap, text: "Hands-On Projects" },
                { icon: Target, text: "Industry Mentors" },
                { icon: Sparkles, text: "Real Outcomes" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-lg shadow-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-5 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
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
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-8 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Premium Effects */}
          <motion.div 
            className="relative perspective-1000"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 group"
              whileHover={{ 
                y: -10,
                boxShadow: "0 40px 80px hsl(var(--primary) / 0.25)"
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={"/hero-image.jpg"}
                alt="Launchra students collaborating"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              {/* Animated Glow Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
            </motion.div>
            
            {/* Floating Stats Cards */}
            <motion.div 
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-gradient">8 Weeks</div>
              <div className="text-sm text-muted-foreground mt-1">Intensive Training</div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            </motion.div>
            
            <motion.div 
              className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-gradient">6 Projects</div>
              <div className="text-sm text-muted-foreground mt-1">Portfolio Ready</div>
              <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute top-1/4 -left-12 w-20 h-20 border-2 border-primary/20 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/4 -right-12 w-24 h-24 border-2 border-primary/20 rounded-2xl"
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-12 border-2 border-primary/40 rounded-full p-1.5 backdrop-blur-sm">
          <motion.div 
            className="w-2 h-3 bg-primary rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
