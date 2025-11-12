import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      content: "academy@xavslabs.com",
      href: "mailto:academy@xavslabs.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+233 XX XXX XXXX",
      href: "tel:+233XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Accra, Ghana",
      href: "#",
    },
    {
      icon: Calendar,
      title: "Office Hours",
      content: "Wednesdays, 6:00-7:00 PM GMT",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's Talk
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about XAVS Launchpad? Want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <a
                    href={method.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {method.content}
                  </a>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Program Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="space-y-8">
                <Card className="p-8 bg-gradient-hero bg-opacity-5">
                  <h2 className="text-2xl font-bold mb-4">Prospective Students</h2>
                  <p className="text-muted-foreground mb-6">
                    Speak with our admissions team to learn more about the program.
                  </p>
                  <Button variant="outline" size="lg" className="w-full">
                    Schedule a 15-Minute Call
                  </Button>
                </Card>

                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Companies & Partners</h2>
                  <p className="text-muted-foreground mb-4">
                    Interested in providing capstone projects or sponsoring students?
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    📧 <a href="mailto:partnerships@xavslabs.com" className="text-primary hover:underline">partnerships@xavslabs.com</a>
                  </p>
                </Card>

                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Media & Press</h2>
                  <p className="text-muted-foreground mb-4">
                    For press inquiries and media kits:
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    📧 <a href="mailto:press@xavslabs.com" className="text-primary hover:underline">press@xavslabs.com</a>
                  </p>
                </Card>

                <Card className="p-8 bg-muted/50">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-8 text-center bg-gradient-hero bg-opacity-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold mb-4">Response Time</h2>
              <p className="text-muted-foreground">
                We typically respond within 24 hours on business days.
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
