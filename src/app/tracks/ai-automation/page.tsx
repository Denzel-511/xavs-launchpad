"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, CheckCircle2, ArrowRight, Calendar, Users, Zap, BookOpen, Brain, Workflow, Code } from "lucide-react";

const AITrack = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const weeks = [
    {
      week: 1,
      title: "Python & Automation Basics",
      topics: ["Python fundamentals", "Variables, loops, functions", "File handling & scripting", "APIs and HTTP requests", "Environment setup (VS Code, pip, virtual environments)"],
      project: "Build a web scraper that extracts and saves data automatically"
    },
    {
      week: 2,
      title: "Working with AI APIs",
      topics: ["OpenAI API integration", "Prompt engineering fundamentals", "Text generation & completion", "API authentication & rate limits", "Error handling & retries"],
      project: "Create an AI-powered content generator for social media"
    },
    {
      week: 3,
      title: "Building Intelligent Chatbots",
      topics: ["Conversational AI design", "Context management", "Multi-turn conversations", "Intent recognition", "Integrating chatbots with platforms (Slack, Discord)"],
      project: "Build a customer support chatbot with memory"
    },
    {
      week: 4,
      title: "Workflow Automation",
      topics: ["Zapier & Make.com fundamentals", "Webhook triggers", "Data transformation & mapping", "Email automation", "Connecting multiple tools"],
      project: "Automated lead generation and follow-up system"
    },
    {
      week: 5,
      title: "Data Processing & Pipelines",
      topics: ["Working with CSV, JSON, databases", "Data cleaning & transformation", "Pandas basics", "Scheduled jobs (cron, task schedulers)", "Error logging & monitoring"],
      project: "Build an automated reporting system with visualizations"
    },
    {
      week: 6,
      title: "Advanced AI Applications",
      topics: ["Image generation (DALL-E, Stable Diffusion)", "Document analysis & extraction", "Sentiment analysis", "Embeddings & semantic search", "RAG (Retrieval Augmented Generation)"],
      project: "Intelligent document Q&A system using embeddings"
    },
    {
      week: 7,
      title: "Deployment & Production",
      topics: ["FastAPI for AI services", "Docker basics", "Environment variables & secrets", "Deploying to cloud (Railway, Render)", "API security & authentication", "Monitoring & logging"],
      project: "Deploy all projects as production APIs"
    },
    {
      week: 8,
      title: "Capstone Sprint",
      topics: ["Responsible AI practices", "Cost optimization", "Performance tuning", "Team collaboration", "Documentation", "Client presentation skills"],
      project: "Real company challenge - Build and deploy an AI automation solution"
    }
  ];

  const skills = [
    { icon: Brain, name: "AI & OpenAI Integration", level: "Advanced" },
    { icon: Code, name: "Python & FastAPI", level: "Intermediate" },
    { icon: Workflow, name: "Automation Workflows", level: "Advanced" },
    { icon: Bot, name: "Chatbot Development", level: "Advanced" }
  ];

  const outcomes = [
    "Build 6+ AI-powered automation projects",
    "Master OpenAI API and prompt engineering",
    "Create intelligent chatbots for business use",
    "Automate workflows that save hours of manual work",
    "Deploy production-ready AI services to the cloud",
    "Understand responsible AI practices and ethics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{
            top: '10%',
            left: `${mousePosition.x * 0.02}%`,
            transition: 'left 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            bottom: '20%',
            right: `${mousePosition.x * 0.02}%`,
            transition: 'right 0.3s ease-out'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 animate-pulse-slow">
                <Bot className="w-4 h-4 mr-2 inline" />
                8 Week Intensive Program
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                AI & Automation{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Engineering
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full opacity-50 blur-sm" />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Harness the power of AI to solve real business problems. Build intelligent chatbots, automate workflows, and deploy production-ready AI solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link href="/apply">
                <Button size="xl" variant="accent" className="gap-2 group hover-glow">
                  Apply for January 2026
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Button size="xl" variant="outline" asChild>
                <Link href="/#pricing">View Pricing</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: Calendar, label: "Duration", value: "8 Weeks" },
                { icon: Bot, label: "AI Projects", value: "6+ Apps" },
                { icon: Users, label: "Cohort Size", value: "20 Max" },
                { icon: Zap, label: "Time/Week", value: "20-25hrs" }
              ].map((stat, idx) => (
                <Card key={idx} className="hover-lift border-2 hover:border-secondary/30 transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Skills You'll{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI APIs to automation workflows — learn to build intelligent systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, idx) => (
              <Card 
                key={idx} 
                className="hover-lift group border-2 hover:border-secondary/30 transition-all duration-500"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <skill.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{skill.level}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Curriculum */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Week-by-Week{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Curriculum
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured path from Python basics to production AI systems
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {weeks.map((week, idx) => (
              <Card 
                key={idx} 
                className="hover-lift group border-2 hover:border-secondary/30 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary to-primary opacity-70 group-hover:h-3 transition-all duration-500" />
                
                <CardHeader className="pt-8">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="text-lg px-4 py-1 bg-secondary">Week {week.week}</Badge>
                        <CardTitle className="text-2xl group-hover:text-secondary transition-colors">
                          {week.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base mb-4">
                        <span className="font-semibold text-foreground">Project:</span> {week.project}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    Topics Covered:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {week.topics.map((topic, topicIdx) => (
                      <li 
                        key={topicIdx} 
                        className="flex items-start gap-2 group/item"
                      >
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What You'll{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Achieve
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                By the end of 8 weeks, you'll have a portfolio of AI-powered projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, idx) => (
                <Card 
                  key={idx}
                  className="hover-lift border-2 hover:border-secondary/30 transition-all duration-500 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="text-lg pt-2">{outcome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Master AI & Automation?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join Cohort 1 in January 2026. Only 20 spots available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply">
                <Button size="xl" variant="accent" className="gap-2 group hover-glow">
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">Have Questions? Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITrack;