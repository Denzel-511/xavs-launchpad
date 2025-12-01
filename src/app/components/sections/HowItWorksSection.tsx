import { Card } from "@/components/ui/card";
import { AnimatedTimeline } from "./AnimatedTimeline";

const HowItWorksSection = () => {

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            8 Weeks. 6 Projects. 1 Career-Changing Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured journey from fundamentals to professional portfolio
          </p>
        </div>

        <AnimatedTimeline />

        {/* Learning Model */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>Our Learning Model</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h4 className="font-bold mb-2">70% Building, 30% Learning</h4>
              <p className="text-sm text-muted-foreground">
                You spend most of your time coding, not watching tutorials
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h4 className="font-bold mb-2">Peer Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Work in small teams and simulate real-world software teams
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.8s" }}>
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
