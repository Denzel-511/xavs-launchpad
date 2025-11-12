import { Card } from "@/components/ui/card";
import { Layers, Code, Rocket, Trophy } from "lucide-react";

const HowItWorksSection = () => {
  const timeline = [
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

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            8 Weeks. 6 Projects. 1 Career-Changing Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured journey from fundamentals to professional portfolio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <Card
                  key={index}
                  className="relative ml-0 md:ml-20 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon badge */}
                  <div className="absolute -left-4 md:-left-16 top-6 w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full ${phase.color} flex items-center justify-center`}>
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
              ))}
            </div>
          </div>
        </div>

        {/* Learning Model */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Learning Model</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🔨</div>
              <h4 className="font-bold mb-2">70% Building, 30% Learning</h4>
              <p className="text-sm text-muted-foreground">
                You spend most of your time coding, not watching tutorials
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="font-bold mb-2">Peer Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Work in small teams and simulate real-world software teams
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold mb-2">Industry-Led Mentorship</h4>
              <p className="text-sm text-muted-foreground">
                Learn directly from engineers and professionals currently in the field
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
