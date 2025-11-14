import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { ArrowLeft } from "lucide-react";

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number must be less than 20 digits"),
  track: z.enum(["full-stack", "ai-automation"], { required_error: "Please select a track" }),
  experience: z.string().trim().min(50, "Please provide at least 50 characters about your experience").max(1000, "Experience must be less than 1000 characters"),
  motivation: z.string().trim().min(50, "Please provide at least 50 characters about your motivation").max(1000, "Motivation must be less than 1000 characters"),
  linkedin: z.string().trim().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  github: z.string().trim().url("Invalid GitHub URL").optional().or(z.literal("")),
});

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = applicationSchema.parse(formData);
      
      // Create mailto link with form data
      const subject = encodeURIComponent("Student Application - Founding Cohort");
      const body = encodeURIComponent(
        `Full Name: ${validatedData.fullName}\n` +
        `Email: ${validatedData.email}\n` +
        `Phone: ${validatedData.phone}\n` +
        `Track: ${validatedData.track === "full-stack" ? "Full-Stack Development" : "AI Automation"}\n\n` +
        `Experience:\n${validatedData.experience}\n\n` +
        `Motivation:\n${validatedData.motivation}\n\n` +
        `LinkedIn: ${validatedData.linkedin || "Not provided"}\n` +
        `GitHub: ${validatedData.github || "Not provided"}`
      );
      
      window.location.href = `mailto:applications@example.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Application Ready!",
        description: "Your email client will open with your application. Please review and send it.",
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
                Apply to Founding Cohort
              </h1>
              <p className="text-xl text-muted-foreground">
                Join the first cohort of 20 students starting January 10, 2026
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
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
                  <Label>Select Your Track *</Label>
                  <RadioGroup
                    value={formData.track}
                    onValueChange={(value) => handleChange("track", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full-stack" id="full-stack" />
                      <Label htmlFor="full-stack" className="font-normal cursor-pointer">
                        Full-Stack Development
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ai-automation" id="ai-automation" />
                      <Label htmlFor="ai-automation" className="font-normal cursor-pointer">
                        AI Automation
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.track && (
                    <p className="text-sm text-destructive">{errors.track}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">
                    Tell us about your technical experience *
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    placeholder="Describe your programming experience, projects you've worked on, technologies you're familiar with..."
                    className="min-h-32"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.experience.length}/1000 characters (minimum 50)
                  </p>
                  {errors.experience && (
                    <p className="text-sm text-destructive">{errors.experience}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">
                    Why do you want to join this program? *
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleChange("motivation", e.target.value)}
                    placeholder="What are your goals? What do you hope to achieve? Why this program?"
                    className="min-h-32"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.motivation.length}/1000 characters (minimum 50)
                  </p>
                  {errors.motivation && (
                    <p className="text-sm text-destructive">{errors.motivation}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/in/yourusername"
                  />
                  {errors.linkedin && (
                    <p className="text-sm text-destructive">{errors.linkedin}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile (Optional)</Label>
                  <Input
                    id="github"
                    type="url"
                    value={formData.github}
                    onChange={(e) => handleChange("github", e.target.value)}
                    placeholder="https://github.com/yourusername"
                  />
                  {errors.github && (
                    <p className="text-sm text-destructive">{errors.github}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default Apply;
