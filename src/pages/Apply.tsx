import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 characters").max(20),
  track: z.enum(["full-stack", "ai-automation"], { required_error: "Please select a track" }),
  experience: z.enum(["beginner", "intermediate", "advanced"], { required_error: "Please select your experience level" }),
  education: z.string().trim().min(5, "Please provide your education background").max(200),
  motivation: z.string().trim().min(50, "Please provide at least 50 characters about your motivation").max(1000),
  goals: z.string().trim().min(30, "Please provide at least 30 characters about your goals").max(500),
  availability: z.enum(["full-time", "part-time"], { required_error: "Please select your availability" }),
  hearAbout: z.string().trim().min(3, "Please tell us how you heard about us").max(200),
  linkedin: z.string().trim().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  github: z.string().trim().url("Invalid GitHub URL").optional().or(z.literal("")),
});

const Apply = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    track: "",
    experience: "",
    education: "",
    motivation: "",
    goals: "",
    availability: "",
    hearAbout: "",
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
      
      const subject = encodeURIComponent("New KENAA Bootcamp Application");
      const body = encodeURIComponent(
        `New Application Received\n\n` +
        `Full Name: ${validatedData.fullName}\n` +
        `Email: ${validatedData.email}\n` +
        `Phone: ${validatedData.phone}\n` +
        `Track: ${validatedData.track === "full-stack" ? "Full-Stack Development" : "AI & Automation"}\n` +
        `Experience Level: ${validatedData.experience}\n` +
        `Education: ${validatedData.education}\n` +
        `Availability: ${validatedData.availability}\n\n` +
        `Motivation:\n${validatedData.motivation}\n\n` +
        `Goals:\n${validatedData.goals}\n\n` +
        `How they heard about us: ${validatedData.hearAbout}\n\n` +
        `LinkedIn: ${validatedData.linkedin || "Not provided"}\n` +
        `GitHub: ${validatedData.github || "Not provided"}`
      );
      
      window.location.href = `mailto:applications@kenaa.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Application Ready!",
        description: "Your email client will open with your application details.",
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
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Apply to KENAA Bootcamp
                </h1>
                <p className="text-xl text-muted-foreground">
                  Join Cohort 1 - January 2026 (Limited to 25 Students)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track">Select Track *</Label>
                  <Select value={formData.track} onValueChange={(value) => handleChange("track", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-stack">Full-Stack Development</SelectItem>
                      <SelectItem value="ai-automation">AI & Automation</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.track && <p className="text-sm text-destructive">{errors.track}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (No coding experience)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some coding knowledge)</SelectItem>
                      <SelectItem value="advanced">Advanced (Experienced developer)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && <p className="text-sm text-destructive">{errors.experience}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education Background *</Label>
                  <Input
                    id="education"
                    value={formData.education}
                    onChange={(e) => handleChange("education", e.target.value)}
                    placeholder="e.g., Bachelor's in Computer Science, High School Graduate, etc."
                  />
                  {errors.education && <p className="text-sm text-destructive">{errors.education}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select value={formData.availability} onValueChange={(value) => handleChange("availability", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time (Can dedicate 40+ hours/week)</SelectItem>
                      <SelectItem value="part-time">Part-time (20-30 hours/week)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && <p className="text-sm text-destructive">{errors.availability}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join KENAA Bootcamp? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleChange("motivation", e.target.value)}
                    placeholder="Tell us what motivates you to join this bootcamp..."
                    rows={5}
                  />
                  {errors.motivation && <p className="text-sm text-destructive">{errors.motivation}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What are your career goals? *</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleChange("goals", e.target.value)}
                    placeholder="Describe your short-term and long-term career goals..."
                    rows={4}
                  />
                  {errors.goals && <p className="text-sm text-destructive">{errors.goals}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hearAbout">How did you hear about us? *</Label>
                  <Input
                    id="hearAbout"
                    value={formData.hearAbout}
                    onChange={(e) => handleChange("hearAbout", e.target.value)}
                    placeholder="e.g., Social media, friend, website, etc."
                  />
                  {errors.hearAbout && <p className="text-sm text-destructive">{errors.hearAbout}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  {errors.linkedin && <p className="text-sm text-destructive">{errors.linkedin}</p>}
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
                  {errors.github && <p className="text-sm text-destructive">{errors.github}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
