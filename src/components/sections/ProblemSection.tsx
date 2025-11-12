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
    <section id="problem" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Tech Skills Gap in Africa is Real — We're Closing It
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Across Ghana and Africa, many aspiring developers learn online but never build anything real. 
            Employers struggle to find people who can deliver.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="p-8 bg-card shadow-md hover-lift">
            <p className="text-lg leading-relaxed">
              We created <span className="font-bold text-primary">XAVS Launchpad</span> to fix that.
              We turn theory into experience through structured, project-based learning — 
              built around how tech teams actually work.
            </p>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10 transition-transform hover:scale-110 duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
