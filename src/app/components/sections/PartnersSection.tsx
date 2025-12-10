"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    {
      industry: "Tech & AI",
      name: "Sua Pa AI",
      description: "Ghana's first AI-powered educational assistant",
      logo: "/suapalogo.png",
    },
    {
      industry: "Adventure Travel",
      name: "Beyond Borders",
      description: "Immersive cultural experiences in Ghana",
      logo: "/beyond_borders.jpeg",
    },
    {
      industry: "Manufacturing & Metalworks",
      name: "Kenaa Industries",
      description: "Custom industrial fabrication and metalwork solutions",
      logo: "/kenaa-logo.jpeg",
    },
    {
      industry: "Wellness & Lifestyle",
      name: "Lyf Arena",
      description: "Holistic wellness and lifestyle development platform",
      logo: "/lyf-arena.jpeg",
    },
    {
      industry: "Business Consulting",
      name: "Strategic Plus",
      description: "Strategic business consulting and growth solutions",
      logo: "/strategic-plus.jpeg",
    },
  ];

  return (
    <section id="partners" className="py-20 md:py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide">Industry Partners</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Solutions for{" "}
              <span className="text-gradient">Real Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              During Week 6-8, you'll work on actual challenges from partner companies. 
              These aren't hypothetical projects — they're real problems that businesses need solved.
            </p>
          </div>

          {/* Benefits Card */}
          <Card className="p-8 mb-16 glass-card hover-glow-subtle animate-fade-in border-gradient" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-6 text-primary">This Means:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Your portfolio includes genuine business impact",
                "You get exposure to potential employers",
                "Companies see your work firsthand on Demo Day",
                "Your solution might get implemented (and you might get hired)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Partners Header */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Partner Companies <span className="text-primary">(Founding Cohort)</span>
          </h3>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group p-6 hover-lift glass-card flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative mb-4 w-full h-24 flex items-center justify-center overflow-hidden rounded-lg bg-white/5">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="object-contain max-h-20 transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
                <p className="font-bold text-base mb-1 group-hover:text-primary transition-colors duration-300">{partner.name}</p>
                <p className="text-xs text-primary/70 mb-2 font-medium">{partner.industry}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{partner.description}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary hover:text-primary hover:bg-primary/10"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Become Partner CTA */}
          <Card className="p-10 text-center glass-card hover-glow animate-fade-in border-gradient" style={{ animationDelay: "0.8s" }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-colors duration-300">
              <Plus className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-90" />
            </div>
            <h4 className="text-2xl font-bold mb-3">More Partners Announced Soon</h4>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              If you're a company with a technical challenge, reach out to collaborate with our talented cohort
            </p>
            <Link href="/become-partner">
              <Button variant="hero" size="lg" className="group">
                Become a Partner
                <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;