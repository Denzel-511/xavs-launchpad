import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      industry: "Fintech",
      challenge: "Automate customer onboarding workflow",
    },
    {
      industry: "E-commerce",
      challenge: "Build analytics dashboard for sales data",
    },
    {
      industry: "Healthcare",
      challenge: "Create AI chatbot for customer support",
    },
  ];

  return (
    <section id="partners" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Build Solutions for Real Companies
            </h2>
            <p className="text-xl text-muted-foreground">
              During Week 6-8, you'll work on actual challenges from partner companies. 
              These aren't hypothetical projects — they're real problems that businesses need solved.
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4">This Means:</h3>
            <ul className="space-y-3">
              {[
                "Your portfolio includes genuine business impact",
                "You get exposure to potential employers",
                "Companies see your work firsthand on Demo Day",
                "Your solution might get implemented (and you might get hired)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Partner Companies (Founding Cohort)
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-sm text-muted-foreground mb-2">
                  {partner.industry}
                </p>
                <p className="text-sm font-semibold mb-1">Challenge:</p>
                <p className="text-sm text-muted-foreground">{partner.challenge}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 text-center bg-gradient-to-br from-secondary/10 to-primary/10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4 transition-transform hover:rotate-90 duration-300" />
            <h4 className="text-xl font-bold mb-2">More Partners Announced Soon</h4>
            <p className="text-muted-foreground mb-6">
              If you're a company with a technical challenge, reach out to collaborate
            </p>
            <Button variant="outline" className="hover:scale-105 transition-transform">Become a Partner →</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
