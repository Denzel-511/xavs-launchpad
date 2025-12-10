"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Bot, CheckCircle2, ArrowRight } from "lucide-react";

const TracksSection = () => {
  const tracks = [
    {
      icon: Code2,
      title: "Full-Stack Product Engineering",
      subtitle: "For those who want to build web products end-to-end",
      duration: "8 Weeks",
      skills: [
        "React, Node.js, Express",
        "API design & integration",
        "Database modeling",
        "Authentication & security",
        "Deployment (Vercel, Render, Railway)",
        "Product design thinking",
      ],
      perfectFor: [
        "Aspiring developers",
        "Startup founders",
        "Designers who want to code",
      ],
    },
    {
      icon: Bot,
      title: "AI & Automation Engineering",
      subtitle: "For those who want to use AI to solve real business problems",
      duration: "8 Weeks",
      skills: [
        "Python & FastAPI",
        "AI & OpenAI API integration",
        "Automation workflows (RPA, Zapier)",
        "Building chatbots and internal tools",
        "Deployment and data pipelines",
        "Responsible AI practices",
      ],
      perfectFor: [
        "Tech professionals upskilling",
        "Business analysts",
        "Anyone interested in applied AI",
      ],
    },
  ];

  return (
    <section id="tracks" className="py-20 md:py-32 relative overflow-hidden noise-overlay">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[150px] opacity-30" style={{ background: 'radial-gradient(circle, hsl(155 70% 45% / 0.2), transparent 70%)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="animate-fade-up">
            <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-xl mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide">Your Journey Starts Here</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Two Paths. One Goal —{" "}
              <span className="block mt-2 text-gradient">
                Build What Matters
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Choose the track that aligns with your career goals and interests
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <Card className="relative h-full hover-lift group overflow-hidden glass-card border-2 border-border/30 hover:border-primary/30 transition-all duration-700">
                {/* Gradient Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary opacity-60 group-hover:h-2 transition-all duration-500" />
                
                {/* Premium Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(circle at 50% 0%, hsl(155 70% 45% / 0.1), transparent 70%)' }} />

                <CardHeader className="space-y-5 relative z-10 pt-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg shadow-primary/10">
                        <track.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 group-hover:scale-110 transition-transform duration-500 shadow-md">
                      {track.duration}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors duration-500">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg text-muted-foreground">
                    {track.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8 relative z-10 pb-8">
                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-5 flex items-center gap-2 text-lg">
                      <span className="text-primary">You&apos;ll Learn:</span>
                    </h4>
                    <ul className="space-y-4">
                      {track.skills.map((skill, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perfect For */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.perfectFor.map((item, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-muted/50 text-muted-foreground border-border/50 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group/btn relative overflow-hidden"
                    asChild
                  >
                    <Link href={index === 0 ? "/tracks/full-stack" : "/tracks/ai-automation"}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;