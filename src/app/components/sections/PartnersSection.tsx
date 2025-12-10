"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const partners = [
    {
      industry: "Tech & AI",
      name: "Sua Pa AI",
      description: "Ghana's first AI-powered educational assistant",
      logo: "/suapalogo.png",
      slug: "sua-pa-ai",
    },
    {
      industry: "Adventure Travel",
      name: "Beyond Borders",
      description: "Immersive cultural experiences in Ghana",
      logo: "/beyond_borders.jpeg",
      slug: "beyond-borders",
    },
    {
      industry: "Manufacturing & Metalworks",
      name: "Kenaa Industries",
      description: "Custom industrial fabrication and metalwork solutions",
      logo: "/kenaa-logo.jpeg",
      slug: "kenaa-industries",
    },
    {
      industry: "Wellness & Lifestyle",
      name: "Lyf Arena",
      description: "Holistic wellness and lifestyle development platform",
      logo: "/lyf-arena.jpeg",
      slug: "lyf-arena",
    },
    {
      industry: "Business Consulting",
      name: "Strategic Plus",
      description: "Strategic business consulting and growth solutions",
      logo: "/strategic-plus.jpeg",
      slug: "strategic-plus",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="py-24 md:py-40 relative overflow-hidden"
    >
      {/* Premium Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"
        style={{ y: backgroundY }}
      />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          style={{ opacity }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-xl mb-8"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                Industry Partners
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Build Solutions for{" "}
              <span className="text-gradient">Real Companies</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              During Weeks 6-8, you&apos;ll work on actual challenges from partner companies.
              These aren&apos;t hypothetical projects — they&apos;re real problems that need solving.
            </p>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-10 mb-20 glass-card border-gradient relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-2xl font-bold mb-8 text-primary relative z-10">What This Means For You:</h3>
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                {[
                  "Your portfolio includes genuine business impact",
                  "You get exposure to potential employers",
                  "Companies see your work firsthand on Demo Day",
                  "Your solution might get implemented (and you might get hired)",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-primary rounded-full mt-2 shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 text-lg">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Partners Header */}
          <motion.h3
            className="text-2xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Partner Companies{" "}
            <span className="text-primary">(Founding Cohort)</span>
          </motion.h3>

          {/* Partners Grid */}
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group p-8 glass-card flex flex-col items-center text-center h-full relative overflow-hidden border-border/30 hover:border-primary/30 transition-colors duration-500">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                  </div>

                  <motion.div
                    className="relative mb-6 w-full h-28 flex items-center justify-center overflow-hidden rounded-xl bg-white/5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="object-contain max-h-24 transition-all duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Building2 className="w-10 h-10 text-primary" />
                      </div>
                    )}
                  </motion.div>

                  <p className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
                    {partner.name}
                  </p>
                  <p className="text-xs text-primary/70 mb-3 font-semibold uppercase tracking-wider">
                    {partner.industry}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow relative z-10">
                    {partner.description}
                  </p>

                  <Link href={`/partners/${partner.slug}`} className="w-full mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary hover:text-primary hover:bg-primary/10 relative z-10"
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Become Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-12 md:p-16 text-center glass-card border-gradient relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center relative z-10"
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                <Plus className="w-10 h-10 text-primary" />
              </motion.div>

              <h4 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                More Partners Coming Soon
              </h4>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg relative z-10">
                If you&apos;re a company with a technical challenge, reach out to collaborate with our talented cohort
              </p>

              <Link href="/become-partner">
                <Button variant="hero" size="xl" className="group/btn relative z-10">
                  Become a Partner
                  <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
