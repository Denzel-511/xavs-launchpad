import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Building2, Award, Camera, Lightbulb } from "lucide-react";

const FoundingCohortSection = () => {
  const perks = [
    {
      icon: Sparkles,
      title: "Lower Pricing",
      description: "₵1,500 early bird — exclusive to founding members",
    },
    {
      icon: Users,
      title: "Direct Access",
      description: "Work directly with founders and mentors",
    },
    {
      icon: Building2,
      title: "Real Client Projects",
      description: "Build solutions for actual partner companies",
    },
    {
      icon: Award,
      title: "Founding Member Status",
      description: "Forever recognized as a pioneer",
    },
    {
      icon: Camera,
      title: "Featured Recognition",
      description: "Showcased on our site and social media",
    },
    {
      icon: Lightbulb,
      title: "Shape the Future",
      description: "Your feedback builds Cohort 2 and beyond",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Be Part of Something New — and Help Shape It
            </h2>
            <p className="text-xl text-muted-foreground">
              The January 2026 cohort is our <span className="font-bold text-primary">first-ever pilot</span>, 
              and that makes it special.
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-center mb-8">
              You're not just a student — you're a <span className="font-bold">co-builder</span> of what this program becomes.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2 animate-fade-in group"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background group-hover:scale-110 transition-transform duration-300">
                    <perk.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm">{perk.title}</h4>
                  <p className="text-xs text-muted-foreground">{perk.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-muted/50 border-2 border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-xl font-bold mb-4 text-center">The Trade-Off</h3>
            <p className="text-muted-foreground text-center mb-6">
              We're new. You won't see polished testimonials or massive alumni networks yet. 
              But you get unprecedented access, lower prices, and the pride of being first.
            </p>
            <div className="text-center">
              <Button variant="hero" size="xl" className="group">
                Apply Now — Limited to 20 Students
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FoundingCohortSection;
