"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Ticket, CheckCircle2, Users, Lightbulb, Rocket, Briefcase, Code, Trophy, Mic } from "lucide-react";
import Image from "next/image";



export default function DemoDay() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    role: "",
    email: "",
    whyAttend: "",
    collaboration: "no",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      company: "",
      role: "",
      email: "",
      whyAttend: "",
      collaboration: "no",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      } as const
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, collaboration: value }));
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mt-10 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Launchra Demo Day Cohort 1
          </h1>
          <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
            Real Projects. Real Companies. Real Talent.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            An exclusive showcase where students present production-ready solutions built for local companies during their 8-week program.
          </p>
          <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
                    >
                      {[
                        { icon: Calendar, label: "Date", value: "March 15, 2026" },
                        { icon: MapPin, label: "Venue", value: "Accra, Ghana" },
                        { icon: Clock, label: "Time", value: "10:00 AM - 3:00 PM" },
                        { icon: Ticket, label: "Entry", value: "Invitation Only" },
                      ].map((item, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                          <Card className="bg-card/30 border-white/10 backdrop-blur-md hover:bg-card/50 transition-all text-foreground border-0 hover-lift">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                              <item.icon className="w-6 h-6 text-primary mb-2" />
                              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</div>
                              <div className="font-medium">{item.value}</div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>



          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <Button size="lg" className="text-lg px-8 h-12 font-bold rounded-full bg-gradient-hero hover:opacity-90 transition-opacity text-white border-0 shadow-lg hover-glow">
              Request an Invite
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-primary/20 text-foreground hover:bg-secondary rounded-full backdrop-blur-sm">
              Meet the Teams
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 1 - WHAT DEMO DAY IS */}
      <section className="py-24 px-4 bg-background overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-hero rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <Image 
                src={"/collaborating.png"} 
                alt="Students collaborating" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500 border border-white/10"
                width={1000}
                height={600}
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block animate-float">
                <p className="font-bold text-lg text-foreground">"No theory. No playground exercises."</p>
                <p className="text-sm text-muted-foreground mt-2">Only real-world, production-focused builds.</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight font-display">
                Where Learning Meets the <span className="text-primary">Real World</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Launchra Demo Day is a curated presentation of solutions built by student teams for real Ghanaian businesses. We bridge the gap between academic theory and industry reality.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "AI automations for real ops",
                  "Working prototypes solving pain points",
                  "Full-stack apps by cross-functional teams",
                  "Professional engineering presentations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHO SHOULD ATTEND */}
            <section className="py-24 px-4 bg-muted/30">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                    Who Is This Event For?
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Connecting talent, innovation, and capital in one room.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Founders", desc: "Looking for fresh talent to build their vision.", icon: Rocket },
                    { title: "Tech Leads", desc: "Scouting junior engineers with real experience.", icon: Code },
                    { title: "Product Teams", desc: "That want to outsource MVP ideas to capable teams.", icon: Briefcase },
                    { title: "Investors", desc: "Tracking early technical talent and potential startups.", icon: Trophy },
                    { title: "Partners", desc: "Companies interested in future capstone collaborations.", icon: Users },
                    { title: "Community", desc: "Innovation leaders in Ghana's tech ecosystem.", icon: Lightbulb },
                  ].map((item, idx) => (
                    <Card key={idx} className="border-border/50 shadow-sm bg-card overflow-hidden group hover-lift">
                      <div className="h-1 w-full bg-gradient-hero transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <CardContent className="p-8">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

      {/* SECTION 3 - THE PROJECTS */}
      {/* SECTION 3 - THE PROJECTS */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-hero mix-blend-overlay" />
          <Image src={"/student_presenting.png"} alt="Background" className="w-full h-full object-cover grayscale" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-background/90" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-foreground">What You'll See</h2>
            <p className="text-xl text-muted-foreground">
              Each team presents one real-company capstone built during Weeks 6–7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-primary font-display">Project Anatomy</h3>
              <ul className="space-y-4">
                {[
                  "A real business problem defined by a client",
                  "A functional prototype or MVP (Live Demo)",
                  "3-minute pitch + 2-minute Q&A",
                  "Tech stack justification",
                  "Business impact analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-foreground/90">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-display text-foreground">Sample Categories</h3>
              <div className="grid gap-4">
                {[
                  "Customer Experience Tools",
                  "AI Support Automation",
                  "Booking & Operations Software",
                  "Cloud Migration Tooling",
                  "Process Automation Flows",
                  "Internal Productivity Tools"
                ].map((cat, i) => (
                  <div key={i} className="p-4 bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-lg transition-colors cursor-default group">
                    <span className="text-foreground/80 font-medium group-hover:text-primary transition-colors">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - HOW COMPANIES PARTICIPATED */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Collaboration</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              Built <span className="italic text-secondary">WITH</span>, not FOR, companies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                role: "Partner Companies",
                items: ["1 real problem", "1 point-of-contact", "1 short briefing", "1 review session"],
                bg: "bg-background",
                border: "border-primary/20"
              },
              {
                role: "Students",
                items: ["Designed the solution", "Built the prototype", "Demoed to partner", "Integrated feedback"],
                bg: "bg-background",
                border: "border-secondary/20"
              },
              {
                role: "Outcome",
                items: ["A free solution", "Development roadmap", "Working MVP to adopt", "Talent pipeline"],
                bg: "bg-background",
                border: "border-accent/20"
              }
            ].map((card, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border ${card.border} ${card.bg} flex flex-col h-full shadow-sm hover-lift`}>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-display">{card.role}</h3>
                <ul className="space-y-3 flex-1">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - EVENT FLOW */}
      <section className="py-24 px-4 bg-background" id="schedule">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center font-display">
            Program Schedule
          </h2>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { time: "10:00 AM", event: "Welcome & Opening", desc: "Introduction to Launchpad and the Cohort." },
              { time: "10:15 AM", event: "Team Presentations", desc: "5 teams present their capstone projects (15m each)." },
              { time: "11:40 AM", event: "Judges' Deliberation", desc: "Feedback compilation and scoring." },
              { time: "12:00 PM", event: "Networking Session", desc: "Meet the students and try the demos yourself." },
              { time: "12:20 PM", event: "Awards & Recognition", desc: "Best Technical, Best UX, and Best Pitch awards." },
              { time: "12:45 PM", event: "Closing Remarks", desc: "Next steps and future cohorts." },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted group-[.is-active]:bg-primary text-muted-foreground group-[.is-active]:text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl shadow-sm border border-border hover-lift">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-foreground">{item.event}</div>
                    <time className="font-mono text-sm text-secondary font-bold">{item.time}</time>
                  </div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - JUDGES */}
      <section className="py-24 px-4 bg-muted/30" id="judges">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Expert Judging Panel
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our students are evaluated by industry veterans, not just academics. We look for production-readiness and business viability.
              </p>
              
              <h3 className="font-bold text-xl text-foreground mb-4">Panel Includes:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Senior Engineers from top tech firms",
                  "Startup Founders with successful exits",
                  "Product Managers & Designers",
                  "Industry Partners"
                ].map((judge, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                      {i + 1}
                    </div>
                    {judge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg hover-lift">
              <h3 className="font-bold text-xl text-foreground mb-6 flex items-center gap-2 font-display">
                <Trophy className="w-5 h-5 text-secondary" />
                Scoring Criteria
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Problem Understanding"},
                  { label: "Technical Execution"},
                  { label: "User Experience (UX)"},
                  { label: "Innovation"},
                  { label: "Presentation"},
                ].map((crit, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                    <span className="font-medium text-foreground">{crit.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - WHY COMPANIES SHOULD SHOW UP */}
      <section className="relative py-24 px-4 bg-background overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 font-display">
              Why Attend?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Discover motivated, job-ready talent before they hit the market",
                "Interact with teams that actually build, not just study",
                "Spot potential hires in action during live demos",
                "Explore partnership opportunities for your own business challenges",
                "See the capabilities of Launchra firsthand",
                "Network with founders + industry operators"
              ].map((benefit, idx) => (
                <div key={idx} className="p-4 bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-lg transition-colors cursor-default group flex gap-2">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground/80 font-medium group-hover:text-primary transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - REQUEST AN INVITE */}
      <section className="py-24 px-4 bg-muted/30">
              <div className="container mx-auto max-w-2xl">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                    Request an Invitation
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Limited Seating. Priority is given to hiring partners and industry leaders.
                  </p>
                </div>
      
                <Card className="border-border shadow-xl hover-lift">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input 
                            id="fullName" 
                            name="fullName" 
                            placeholder="John Doe" 
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="focus-visible:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="john@company.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="focus-visible:ring-primary"
                          />
                        </div>
                      </div>
      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company / Organization</Label>
                          <Input 
                            id="company" 
                            name="company" 
                            placeholder="Acme Inc." 
                            value={formData.company}
                            onChange={handleInputChange}
                            className="focus-visible:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role / Title</Label>
                          <Input 
                            id="role" 
                            name="role" 
                            placeholder="CTO, Founder, HR..." 
                            value={formData.role}
                            onChange={handleInputChange}
                            className="focus-visible:ring-primary"
                          />
                        </div>
                      </div>
      
                      <div className="space-y-2">
                        <Label htmlFor="whyAttend">Why do you want to attend?</Label>
                        <Textarea 
                          id="whyAttend" 
                          name="whyAttend" 
                          placeholder="I'm looking to hire developers..." 
                          className="h-24 focus-visible:ring-primary"
                          value={formData.whyAttend}
                          onChange={handleInputChange}
                        />
                      </div>
      
                      <div className="space-y-2">
                        <Label htmlFor="collaboration">Are You Interested in Future Collaboration?</Label>
                        <Select name="collaboration" onValueChange={handleSelectChange}>
                          <SelectTrigger className="focus:ring-primary">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, I have a project idea</SelectItem>
                            <SelectItem value="no">No, just attending</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
      
                      <Button type="submit" size="lg" className="w-full text-lg h-12 font-bold opacity-90 transition-opacity shadow-lg">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </section>

      <Footer />
    </div>
  );
}