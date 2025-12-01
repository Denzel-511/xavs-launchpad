"use client";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Layers, Code, Rocket, Trophy, LucideIcon } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface TimelinePhase {
  icon: LucideIcon;
  weeks: string;
  title: string;
  description: string;
  color: string;
}

const timeline: TimelinePhase[] = [
  {
    icon: Layers,
    weeks: "Weeks 1–2",
    title: "Foundations",
    description: "Master core tools and concepts. Build your first mini-projects.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Code,
    weeks: "Weeks 3–5",
    title: "Applied Projects",
    description: "Work through guided projects with mentor feedback and code reviews.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Rocket,
    weeks: "Weeks 6–7",
    title: "Capstone Sprint",
    description: "Collaborate in teams to solve a real business problem from partner companies.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Trophy,
    weeks: "Week 8",
    title: "Launch",
    description: "Present your final project on Demo Day. Get your certificate. Leave with a portfolio.",
    color: "bg-secondary/10 text-secondary",
  },
];

export function AnimatedTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(timelineRef);

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Static background line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />
        
        {/* Animated progress line */}
        <div 
          className="absolute left-8 top-8 w-0.5 bg-primary hidden md:block transition-all duration-300 ease-out"
          style={{ 
            height: `${progress}%`,
            maxHeight: 'calc(100% - 4rem)'
          }}
        />

        <div className="space-y-8">
          {timeline.map((phase, index) => {
            const phaseProgress = Math.max(0, Math.min(100, (progress - (index * 25)) * 4));
            const isActive = phaseProgress > 0;
            
            return (
              <Card
                key={index}
                className={`relative ml-0 md:ml-20 transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-4'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateX(${isActive ? 0 : 16}px)`,
                }}
              >
                {/* Icon badge */}
                <div className="absolute -left-4 md:-left-16 top-6 w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center transition-all duration-500">
                  <div 
                    className={`w-10 h-10 rounded-full ${phase.color} flex items-center justify-center transition-all duration-500`}
                    style={{
                      transform: `scale(${isActive ? 1.1 : 1})`,
                      boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                    }}
                  >
                    <phase.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 ml-12 md:ml-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {phase.weeks}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
