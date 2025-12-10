"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Building2, Globe, Users, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const partnersData: Record<string, {
  name: string;
  industry: string;
  description: string;
  logo: string;
  longDescription: string;
  website?: string;
  challenge?: string;
  collaboration: string[];
  stats: { label: string; value: string }[];
}> = {
  "sua-pa-ai": {
    name: "Sua Pa AI",
    industry: "Tech & AI",
    description: "Ghana's first AI-powered educational assistant",
    logo: "/suapalogo.png",
    longDescription: "Sua Pa AI is pioneering the future of education in Ghana through cutting-edge artificial intelligence. Their platform provides personalized learning experiences, making quality education accessible to students across the nation.",
    website: "https://suapa.ai",
    collaboration: [
      "AI model integration projects",
      "Educational chatbot development",
      "Data analysis and insights",
      "Mobile app development"
    ],
    stats: [
      { label: "Students Reached", value: "10K+" },
      { label: "Schools", value: "50+" },
      { label: "AI Models", value: "5" }
    ]
  },
  "beyond-borders": {
    name: "Beyond Borders",
    industry: "Adventure Travel",
    description: "Immersive cultural experiences in Ghana",
    logo: "/beyond_borders.jpeg",
    longDescription: "Beyond Borders creates transformative travel experiences that connect visitors with authentic Ghanaian culture. They specialize in curated adventures that blend exploration, education, and meaningful community engagement.",
    collaboration: [
      "Booking platform development",
      "Experience management system",
      "Customer engagement tools",
      "Marketing automation"
    ],
    stats: [
      { label: "Tours Organized", value: "200+" },
      { label: "Happy Travelers", value: "1.5K+" },
      { label: "Communities", value: "15" }
    ]
  },
  "kenaa-industries": {
    name: "Kenaa Industries",
    industry: "Manufacturing & Metalworks",
    description: "Custom industrial fabrication and metalwork solutions",
    logo: "/kenaa-logo.jpeg",
    longDescription: "Kenaa Industries is a leading Ghanaian manufacturer specializing in custom industrial fabrication, metalwork, and engineering solutions. They serve various sectors including construction, agriculture, and energy.",
    collaboration: [
      "Inventory management systems",
      "Production tracking tools",
      "Customer portal development",
      "Supply chain optimization"
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Industries Served", value: "8" },
      { label: "Years Experience", value: "15+" }
    ]
  },
  "lyf-arena": {
    name: "Lyf Arena",
    industry: "Wellness & Lifestyle",
    description: "Holistic wellness and lifestyle development platform",
    logo: "/lyf-arena.jpeg",
    longDescription: "Lyf Arena is dedicated to transforming lives through holistic wellness programs. They combine fitness, mental health, and lifestyle coaching to help individuals achieve their full potential.",
    collaboration: [
      "Wellness app development",
      "Member management platform",
      "Progress tracking systems",
      "Community engagement tools"
    ],
    stats: [
      { label: "Active Members", value: "2K+" },
      { label: "Programs", value: "25" },
      { label: "Coaches", value: "12" }
    ]
  },
  "strategic-plus": {
    name: "Strategic Plus",
    industry: "Business Consulting",
    description: "Strategic business consulting and growth solutions",
    logo: "/strategic-plus.jpeg",
    longDescription: "Strategic Plus provides comprehensive business consulting services to help organizations scale and optimize their operations. They specialize in strategic planning, market analysis, and growth acceleration.",
    collaboration: [
      "Business analytics dashboards",
      "Client management systems",
      "Reporting automation",
      "Process optimization tools"
    ],
    stats: [
      { label: "Clients Served", value: "100+" },
      { label: "Growth Rate", value: "40%" },
      { label: "Industries", value: "12" }
    ]
  }
};

export default function PartnerPage() {
  const params = useParams();
  const slug = params.slug as string;
  const partner = partnersData[slug];

  if (!partner) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Partner Not Found</h1>
          <Link href="/#partners">
            <Button variant="hero">Back to Partners</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#partners">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Partners
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white/10 border border-border/30">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/30 mb-2">
                  {partner.industry}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold">{partner.name}</h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {partner.longDescription}
            </p>

            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Globe className="w-4 h-4" />
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {partner.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center hover-lift"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card p-8 border-gradient">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Collaboration Opportunities</h2>
              </div>

              <p className="text-muted-foreground mb-8">
                During Weeks 6-8 of Launchra, students work on real projects with our partner companies. Here&apos;s what you could build with {partner.name}:
              </p>

              <div className="space-y-4">
                {partner.collaboration.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border/30">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Why Partner With Launchra?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Access to talented tech students ready to build solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Low-risk way to prototype new ideas
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    First look at hiring potential candidates
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Card className="glass-card p-12 border-gradient max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Build With Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join Launchra and get the opportunity to work on real projects with companies like {partner.name}.
            </p>
            <Link href="/apply">
              <Button variant="hero" size="xl" className="group">
                Apply Now
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
