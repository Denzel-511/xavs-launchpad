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
      color: "primary",
    },
    {
      icon: Bot,
      title: "AI & Automation Engineering",
      subtitle: "For those who want to use AI to solve real business problems",
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
      color: "secondary",
    },
  ];

  return (
    <section id="tracks" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Two Paths. One Goal — Build What Matters
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the track that aligns with your career goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-${track.color}`}
              />

              <CardHeader className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                  <track.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{track.title}</CardTitle>
                <CardDescription className="text-base">
                  {track.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">You'll Learn:</span>
                  </h4>
                  <ul className="space-y-2">
                    {track.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.perfectFor.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
