"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useRouter } from 'next/navigation';

const mentorSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  expertise: z.string().trim().min(10, "Please provide at least 10 characters").max(500),
  experience: z.string().trim().min(50, "Please provide at least 50 characters about your experience").max(1000),
});

export function MentorContactDialog() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
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
      const validatedData = mentorSchema.parse(formData);
      const res = await fetch("/api/become-mentor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });
      
      if (!res.ok) {
      toast({
        title: "Error",
        description: "Failed to send your inquiry.",
        variant: "destructive",
      });
      throw new Error("Failed to send data.");
    }

    toast({
      title: "Thank you!",
      description: "Your mentor application has been sent.",
    });
    setOpen(false);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.issues.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);

      toast({
        title: "Validation Error",
        description: "Please fix the highlighted fields.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to send your inquiry.",
        variant: "destructive",
      });
    }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:scale-105 transition-transform">
          Want to mentor? Contact us →
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Become a Mentor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your name"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
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
            <Label htmlFor="expertise">Areas of Expertise *</Label>
            <Input
              id="expertise"
              value={formData.expertise}
              onChange={(e) => handleChange("expertise", e.target.value)}
              placeholder="e.g., React, Node.js, AI, etc."
            />
            {errors.expertise && <p className="text-sm text-destructive">{errors.expertise}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Your Experience & Background *</Label>
            <Textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
              placeholder="Tell us about your professional experience and why you'd like to mentor..."
              rows={6}
            />
            {errors.experience && <p className="text-sm text-destructive">{errors.experience}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
