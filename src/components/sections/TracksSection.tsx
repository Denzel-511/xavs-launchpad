import { Link } from "react-router-dom";
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
      emoji: "💻",
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
      color: "from-primary to-primary",
    },
    {
      icon: Bot,
      title: "AI & Automation Engineering",
      subtitle: "For those who want to use AI to solve real business problems",
      duration: "8 Weeks",
      emoji: "🤖",
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
      color: "from-secondary to-secondary",
    },
  ];

  return (
    <section id="tracks" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 backdrop-blur-sm mb-4">
              <span className="text-secondary font-semibold text-sm">Your Journey Starts Here</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Two Paths. One Goal —{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Build What Matters
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-50 blur-sm" />
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Choose the track that aligns with your career goals and interests
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <Card className="relative h-full hover-lift group overflow-hidden border-2 hover:border-primary/30 transition-all duration-500">
                {/* Gradient Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${track.color} opacity-70 group-hover:h-3 transition-all duration-500`} />
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/3 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="space-y-4 relative z-10 pt-8">
                  {/* Icon & Emoji */}
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <track.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 text-3xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        {track.emoji}
                      </div>
                    </div>
                    <Badge variant="secondary" className="group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {track.duration}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    {track.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                      <span className="text-primary">You'll Learn:</span>
                    </h4>
                    <ul className="space-y-3">
                      {track.skills.map((skill, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 group/item"
                          style={{ 
                            animation: "fade-in 0.5s ease-out",
                            animationDelay: `${0.3 + index * 0.15 + idx * 0.05}s`,
                            animationFillMode: "backwards"
                          }}
                        >
                          <div className="mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-125 transition-transform" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perfect For */}
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.perfectFor.map((item, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs hover:scale-110 transition-transform duration-300 cursor-default"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 relative overflow-hidden"
                    asChild
                  >
                    <Link to={index === 0 ? "/tracks/full-stack" : "/tracks/ai-automation"}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    </Link>
                  </Button>
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
