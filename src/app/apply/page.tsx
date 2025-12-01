"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowLeft, Check } from "lucide-react";
import { useRouter } from 'next/navigation';

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  track: z.enum(["full-stack", "ai-automation"], { required_error: "Please select a track" }),
  experience: z.string().trim().min(50, "Please provide at least 50 characters").max(1000),
  motivation: z.string().trim().min(50, "Please provide at least 50 characters").max(1000),
  linkedin: z.string().trim().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  github: z.string().trim().url("Invalid GitHub URL").optional().or(z.literal("")),
});

type Step = "application" | "payment";

const ApplyWithPayment = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState<Step>("application");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    track: "",
    experience: "",
    motivation: "",
    linkedin: "",
    github: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      applicationSchema.parse(formData);
      setStep("payment");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors and try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentComplete = () => {
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setTimeout(() => router.push('/'), 2000);
  };

  const pricingOption = formData.track === "full-stack" ? "Early Bird" : "Early Bird";
  const price = "₵1,000";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => step === "payment" ? setStep("application") : router.push("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {step === "payment" ? "Back to Application" : "Back to Home"}
        </Button>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "application" ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
            }`}>
              {step === "payment" ? <Check className="w-5 h-5" /> : "1"}
            </div>
            <span className="font-medium">Application</span>
          </div>
          <div className="w-16 h-0.5 bg-border" />
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "payment" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              2
            </div>
            <span className={step === "payment" ? "font-medium" : "text-muted-foreground"}>Payment</span>
          </div>
        </div>

        {step === "application" ? (
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Apply for Cohort 1</h1>
              <p className="text-muted-foreground">
                Only <span className="text-primary font-semibold">25 students</span> will be accepted.
                Take the first step toward a career in tech.
              </p>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+233 24 123 4567"
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Choose Your Track *</Label>
                <RadioGroup value={formData.track} onValueChange={(value) => handleChange("track", value)}>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="full-stack" id="full-stack" />
                    <Label htmlFor="full-stack" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Full-Stack Development</div>
                      <div className="text-sm text-muted-foreground">Build complete web applications</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="ai-automation" id="ai-automation" />
                    <Label htmlFor="ai-automation" className="flex-1 cursor-pointer">
                      <div className="font-semibold">AI & Automation</div>
                      <div className="text-sm text-muted-foreground">Build intelligent automation systems</div>
                    </Label>
                  </div>
                </RadioGroup>
                {errors.track && <p className="text-sm text-destructive">{errors.track}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Your Tech Experience *</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  placeholder="Tell us about your current experience with tech or coding..."
                  rows={4}
                />
                {errors.experience && <p className="text-sm text-destructive">{errors.experience}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why This Program? *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleChange("motivation", e.target.value)}
                  placeholder="What are you hoping to achieve? Why now?"
                  rows={4}
                />
                {errors.motivation && <p className="text-sm text-destructive">{errors.motivation}</p>}
              </div>

              <div className="space-y-4">
                <Label>Optional: Your Online Profiles</Label>
                <div className="space-y-2">
                  <Input
                    placeholder="LinkedIn URL"
                    value={formData.linkedin}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                  />
                  {errors.linkedin && <p className="text-sm text-destructive">{errors.linkedin}</p>}
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="GitHub URL"
                    value={formData.github}
                    onChange={(e) => handleChange("github", e.target.value)}
                  />
                  {errors.github && <p className="text-sm text-destructive">{errors.github}</p>}
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? "Validating..." : "Continue to Payment"}
              </Button>
            </form>
          </Card>
        ) : (
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Complete Your Payment</h1>
              <p className="text-muted-foreground">
                Secure your spot in Cohort 1
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-muted/30">
                <h3 className="font-bold mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Program Fee ({pricingOption})</span>
                    <span className="font-semibold">{price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Selected Track</span>
                    <span className="font-semibold">
                      {formData.track === "full-stack" ? "Full-Stack Development" : "AI & Automation"}
                    </span>
                  </div>
                  <div className="pt-3 border-t flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">{price}</span>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <h3 className="font-bold">Payment Methods</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full h-auto p-4 justify-start"
                    onClick={handlePaymentComplete}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Mobile Money</div>
                      <div className="text-sm text-muted-foreground">Pay with MTN, Vodafone, or AirtelTigo</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-auto p-4 justify-start"
                    onClick={handlePaymentComplete}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Card Payment</div>
                      <div className="text-sm text-muted-foreground">Pay with Visa, Mastercard, or Verve</div>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full h-auto p-4 justify-start"
                    onClick={handlePaymentComplete}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Bank Transfer</div>
                      <div className="text-sm text-muted-foreground">Direct bank transfer</div>
                    </div>
                  </Button>
                </div>
              </div>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Payment Plan Available:</span> Pay ₵500 upfront, then ₵500 by Week 4
                </p>
              </Card>
            </div>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyWithPayment;