import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";

const partnerSchema = z.object({
  companyName: z.string().trim().min(2, "Company name must be at least 2 characters").max(100, "Company name must be less than 100 characters"),
  contactName: z.string().trim().min(2, "Contact name must be at least 2 characters").max(100, "Contact name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number must be less than 20 digits"),
  industry: z.string().trim().min(2, "Industry must be at least 2 characters").max(100, "Industry must be less than 100 characters"),
  challenge: z.string().trim().min(100, "Please provide at least 100 characters describing your challenge").max(1500, "Challenge description must be less than 1500 characters"),
  website: z.string().trim().url("Invalid website URL").optional().or(z.literal("")),
  companySize: z.string().trim().min(1, "Please specify company size"),
});

const BecomePartner = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    challenge: "",
    website: "",
    companySize: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = partnerSchema.parse(formData);
      
      // Create mailto link with form data
      const subject = encodeURIComponent("Partner Company Inquiry");
      const body = encodeURIComponent(
        `Company Name: ${validatedData.companyName}\n` +
        `Contact Name: ${validatedData.contactName}\n` +
        `Email: ${validatedData.email}\n` +
        `Phone: ${validatedData.phone}\n` +
        `Industry: ${validatedData.industry}\n` +
        `Company Size: ${validatedData.companySize}\n` +
        `Website: ${validatedData.website || "Not provided"}\n\n` +
        `Technical Challenge:\n${validatedData.challenge}`
      );
      
      window.location.href = `mailto:partnerships@example.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Partnership Inquiry Ready!",
        description: "Your email client will open with your inquiry. Please review and send it.",
      });
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Become a Partner Company
              </h1>
              <p className="text-xl text-muted-foreground">
                Collaborate with talented students to solve your technical challenges
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    placeholder="Acme Industries"
                  />
                  {errors.companyName && (
                    <p className="text-sm text-destructive">{errors.companyName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => handleChange("contactName", e.target.value)}
                    placeholder="Jane Smith"
                  />
                  {errors.contactName && (
                    <p className="text-sm text-destructive">{errors.contactName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="jane@acme.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1234567890"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                    placeholder="E.g., Fintech, Healthcare, E-commerce"
                  />
                  {errors.industry && (
                    <p className="text-sm text-destructive">{errors.industry}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Input
                    id="companySize"
                    value={formData.companySize}
                    onChange={(e) => handleChange("companySize", e.target.value)}
                    placeholder="E.g., 10-50 employees"
                  />
                  {errors.companySize && (
                    <p className="text-sm text-destructive">{errors.companySize}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Company Website (Optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    placeholder="https://www.acme.com"
                  />
                  {errors.website && (
                    <p className="text-sm text-destructive">{errors.website}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge">
                    Describe Your Technical Challenge *
                  </Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => handleChange("challenge", e.target.value)}
                    placeholder="What technical problem or project would you like students to work on? Include details about the technologies involved, expected outcomes, and any specific requirements..."
                    className="min-h-40"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.challenge.length}/1500 characters (minimum 100)
                  </p>
                  {errors.challenge && (
                    <p className="text-sm text-destructive">{errors.challenge}</p>
                  )}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What to Expect:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Students work on your challenge during weeks 6-8 of the program</li>
                    <li>• You'll provide guidance and feedback throughout the project</li>
                    <li>• Final solutions are presented on Demo Day</li>
                    <li>• Opportunity to hire talented developers who demonstrate strong capabilities</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomePartner;
