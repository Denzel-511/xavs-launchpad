import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Zap, Target } from "lucide-react";

const ProblemSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "70%",
      label: "Companies cite practical skill gaps",
    },
    {
      icon: DollarSign,
      value: "₵3-8K",
      label: "Entry-level developer salary/month",
    },
    {
      icon: Zap,
      value: "40-60%",
      label: "Higher earnings with AI skills",
    },
    {
      icon: Target,
      value: "8 Weeks",
      label: "To job-ready portfolio",
    },
  ];

  return (
    <section id="problem" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm">The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              The Tech Skills Gap in Africa is{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Real
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-destructive via-primary to-secondary rounded-full opacity-50 blur-sm" />
              </span>
              {" "}— We're Closing It
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Across Ghana and Africa, many aspiring developers learn online but{" "}
              <span className="text-foreground font-semibold">never build anything real</span>. 
              Employers struggle to find people who can deliver.
            </p>
            
            {/* Divider with CTA */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-primary/20"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-background px-8 py-4 rounded-2xl border-2 border-primary/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    We created XAVS Launchpad to fix that
                  </span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-slow" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
                </div>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              We turn{" "}
              <span className="text-foreground font-semibold">theory into experience</span>{" "}
              through structured, project-based learning — 
              built around how tech teams actually work.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <Card className="p-8 text-center hover-lift group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 h-full">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-3">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Value */}
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
