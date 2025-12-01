"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  const urgencyPoints = [
    {
      icon: Clock,
      text: "Applications close: January 10, 2026",
    },
    {
      icon: Calendar,
      text: "Early bird pricing ends: January 5, 2026",
    },
    {
      icon: Users,
      text: "Founding member benefits available now",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-2xl border-2">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
              Limited Spots Available
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold">
              January 2026 Cohort Now Open
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Only 20 spots available. This is your chance to build real, portfolio-ready skills.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 py-8">
              {urgencyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="hero" size="xl" className="group">
                <Link href="/apply">
                  <span className="inline-flex items-center gap-2">
                    Apply for Cohort 1
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>


              <a href="mailto:academy@xavslabs.com">
                <Button variant="outline" size="xl">
                  Schedule a Call
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Questions? Email us at{" "}
              <a
                href="mailto:academy@xavslabs.com"
                className="text-primary hover:underline font-medium"
              >
                academy@xavslabs.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
