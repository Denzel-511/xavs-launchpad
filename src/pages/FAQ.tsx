import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "About the Program",
      questions: [
        {
          q: "What is XAVS Launchpad?",
          a: "An 8-week intensive professional development program teaching practical tech skills through project-based learning.",
        },
        {
          q: "Who runs XAVS Launchpad?",
          a: "XAVS Labs, a registered company in Ghana focused on tech training and consultancy.",
        },
        {
          q: "Is this program accredited?",
          a: "No. We're a professional training program, not an academic institution. We focus on real skills and portfolio outcomes.",
        },
        {
          q: "How is this different from online courses?",
          a: "Live mentorship, structured curriculum, peer collaboration, real company projects, and accountability — not just video tutorials.",
        },
      ],
    },
    {
      category: "Admission & Requirements",
      questions: [
        {
          q: "What are the prerequisites?",
          a: "Basic computer literacy and motivation to learn. We provide pre-work to bring everyone to the same starting point.",
        },
        {
          q: "How selective is admission?",
          a: "We accept motivated learners at all skill levels. Selection is based on commitment, not prior experience.",
        },
        {
          q: "When do applications close?",
          a: "January 10, 2026 (or when we reach 25 students).",
        },
        {
          q: "Can international students join?",
          a: "Yes! Remote participation via Zoom is available for Saturday sessions.",
        },
      ],
    },
    {
      category: "Program Logistics",
      questions: [
        {
          q: "Where are sessions held?",
          a: "In-person sessions in Accra (East Legon/Osu area). Location details sent upon acceptance.",
        },
        {
          q: "What if I can't attend in-person?",
          a: "All Saturday sessions are live-streamed and recorded. Remote participation is fully supported.",
        },
        {
          q: "What's the weekly time commitment?",
          a: "Saturdays: 7 hours (9am-4:30pm), Weekdays: 10-15 hours independent work. Total: 20-25 hours/week.",
        },
        {
          q: "Can I work full-time and do this program?",
          a: "Yes, if you can commit to Saturday sessions and evening/weekend independent work.",
        },
      ],
    },
    {
      category: "Learning & Support",
      questions: [
        {
          q: "How hands-on is the program?",
          a: "Very. 70% of your time is spent building projects, 30% learning concepts.",
        },
        {
          q: "Will I have a mentor?",
          a: "Yes. Lead mentors guide workshops, and support mentors help with debugging and questions.",
        },
        {
          q: "What if I get stuck?",
          a: "Office hours (Wednesday evenings), Discord community, and mentor support throughout the week.",
        },
        {
          q: "Do I work alone or in teams?",
          a: "Mix of both. Individual projects early on, team collaboration for the capstone.",
        },
      ],
    },
    {
      category: "Capstone & Demo Day",
      questions: [
        {
          q: "What is the capstone project?",
          a: "A real business challenge from one of our partner companies. You'll build a solution in Weeks 6-8.",
        },
        {
          q: "How are capstone projects assigned?",
          a: "Based on your track and interests. We match you with appropriate company challenges.",
        },
        {
          q: "What happens on Demo Day?",
          a: "You present your capstone project to company stakeholders, mentors, and peers. Top projects receive awards.",
        },
        {
          q: "Can my capstone project lead to a job?",
          a: "Potentially. Companies attend Demo Day looking for talent and solutions.",
        },
      ],
    },
    {
      category: "Career & Outcomes",
      questions: [
        {
          q: "Do you guarantee job placement?",
          a: "No. We equip you with skills, projects, and coaching. Job hunting is your responsibility.",
        },
        {
          q: "What kind of jobs can I pursue after?",
          a: "Full-Stack: Junior Developer, Frontend/Backend Developer. AI/Automation: Automation Specialist, AI Engineer, Chatbot Developer.",
        },
        {
          q: "How much can I earn?",
          a: "Entry-level: ₵3,000-6,000/month employed. Freelance: ₵500-2,000/project (varies). AI specialists often command premium rates.",
        },
        {
          q: "Will you help with my resume?",
          a: "Yes. Week 8 includes career coaching, resume review, and portfolio optimization.",
        },
      ],
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          q: "What's included in the fee?",
          a: "Everything: mentorship, materials, certificate, Demo Day, refreshments, post-program access.",
        },
        {
          q: "Are payment plans available?",
          a: "Yes. 60% deposit to secure spot, 40% by Week 4.",
        },
        {
          q: "Can I get financial aid?",
          a: "Limited need-based scholarships available. Apply separately via the application form.",
        },
        {
          q: "What's your refund policy?",
          a: "Before Jan 18: Full refund (minus ₵200). Week 1: 50% refund. After Week 1: No refunds.",
        },
      ],
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "What equipment do I need?",
          a: "Laptop (8GB+ RAM), stable internet, webcam/mic for virtual sessions.",
        },
        {
          q: "Do I need to buy software?",
          a: "No. All tools are free or have free tiers (VS Code, GitHub, etc.).",
        },
        {
          q: "What if my internet is unstable?",
          a: "Sessions are recorded. Catch up at your own pace if you miss live.",
        },
      ],
    },
    {
      category: "Post-Program",
      questions: [
        {
          q: "What happens after graduation?",
          a: "You get your certificate, portfolio, and 3 months continued access to materials. Alumni Discord remains open.",
        },
        {
          q: "Can I take the program again?",
          a: "Yes, at 50% discount (space permitting).",
        },
        {
          q: "Will there be advanced programs?",
          a: "Based on Cohort 1 feedback, we'll launch Cohort 2 (April 2026) and potentially advanced modules.",
        },
      ],
    },
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

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Comprehensive FAQ
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Everything You Need to Know About XAVS Launchpad
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our program
              </p>
            </div>

            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="space-y-4 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="bg-muted/50 rounded-xl p-8 text-center space-y-4 mt-12">
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <p className="text-muted-foreground">
                We're here to help! Reach out to our team for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
