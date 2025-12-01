import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus } from "lucide-react";
import Link  from "next/link";
import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    {
      industry: "Tech & AI",
      name: "Sua Pa AI",
      description: "Ghana's first AI-powered educational assistant",
      logo: "/suapalogo.png",
    },
    {
      industry: "E-commerce",
      name: "AfriShop",
      description: "Pan-African online marketplace connecting buyers and sellers",
    },
    {
      industry: "Adventure Travel",
      name: "Beyond Borders",
      description: "Immersive cultural experiences in Ghana",
      logo: "/beyond_borders.jpeg",
    },
    {
      industry: "Manufacturing & Metalworks",
      name: "Kenaa Industries",
      description: "Custom industrial fabrication and metalwork solutions",
      logo: "/kenaa-logo.jpeg",
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
              During Week 6-8, you&apos;ll work on actual challenges from partner companies. 
              These aren&apos;t hypothetical projects — they&apos;re real problems that businesses need solved.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="p-6 hover-lift animate-fade-in flex flex-col"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {partner.logo ? (
                  <div className="mb-4">
                    
                  <Image
                    src={partner.logo} // must be a string or imported static file
                    alt={partner.name}
                    width={200}        // or any width you want
                    height={96}        // match your h-24 roughly (24*4=96px)
                    className="object-contain w-full"
                  />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                )}
                <p className="font-bold text-base mb-2">{partner.name}</p>
                <p className="text-sm text-muted-foreground mb-2">{partner.industry}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{partner.description}</p>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          <Card className="p-8 text-center bg-gradient-to-br from-secondary/10 to-primary/10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4 transition-transform hover:rotate-90 duration-300" />
            <h4 className="text-xl font-bold mb-2">More Partners Announced Soon</h4>
            <p className="text-muted-foreground mb-6">
              If you&apos;re a company with a technical challenge, reach out to collaborate
            </p>
            <Link href="/become-partner">
              <Button variant="outline" className="hover:scale-105 transition-transform">Become a Partner →</Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
