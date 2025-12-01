import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Tag } from "lucide-react";
import Link  from "next/link";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Early Bird",
      price: "₵1,500",
      availability: "Until January 5, 2026",
      badge: "Best Value",
      variant: "accent" as const,
    },
    {
      name: "Standard",
      price: "₵2,000",
      availability: "January 6 onwards",
      badge: null,
      variant: "default" as const,
    },
  ];

  const included = [
    "8 weeks of intensive training",
    "All learning materials and resources",
    "Mentor-led workshops and code reviews",
    "Real company capstone project",
    "Certificate of Completion",
    "Demo Day participation",
    "Light refreshments during in-person sessions",
    "3 months post-program access to materials",
  ];

  const paymentMethods = ["Mobile Money (MTN, Vodafone, AirtelTigo)", "Bank Transfer", "Card Payment"];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Invest in Your Future
          </h2>
          <p className="text-xl text-muted-foreground">
            Affordable, transparent pricing with flexible payment options
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover-lift animate-fade-in ${
                  tier.badge ? "border-2 border-secondary shadow-xl" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-12">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {tier.price}
                  </div>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    {tier.availability}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/apply">
                    <Button
                      variant={tier.variant}
                      size="lg"
                      className="w-full"
                    >
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Plan */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-start gap-4">
              <Tag className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Payment Plan Available</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 60% upfront (secure your spot)</li>
                  <li>• 40% by Week 4</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* What's Included */}
          <Card className="p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">What&apos;s Included</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Payment Methods */}
          <Card className="p-8 bg-muted/50 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-xl font-bold mb-4 text-center">Payment Methods</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentMethods.map((method, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                  {method}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
