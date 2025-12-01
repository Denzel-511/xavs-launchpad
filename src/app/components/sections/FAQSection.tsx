import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this program accredited?",
      answer:
        "Not yet — XAVS Launchpad is a professional development initiative by XAVS Labs. We focus on practical skills and portfolio outcomes, not formal academic certification.",
    },
    {
      question: "Do I need a tech background?",
      answer:
        "Basic familiarity with computers and logic helps, but beginners with commitment are welcome. You'll complete pre-work before Week 1 to bring everyone to the same starting point.",
    },
    {
      question: "How do the hybrid sessions work?",
      answer:
        "Saturday sessions happen in Accra (in-person or via Zoom for remote participants). Weekdays are async — you learn and build on your schedule with mentor check-ins and office hours on Wednesday evenings.",
    },
    {
      question: "Will I work on real projects?",
      answer:
        "Yes! You'll build 6 projects throughout the program, including a real company project in the final capstone sprint (Weeks 6-8) where you solve actual business challenges.",
    },
    {
      question: "Can I get a job after this?",
      answer:
        "We don't guarantee jobs, but you'll leave with real projects, a GitHub portfolio, professional mentorship, and career coaching. Many entry-level positions pay ₵3,000-6,000/month, with AI specialists commanding premium rates. The rest is up to you.",
    },
    {
      question: "How much time should I commit?",
      answer:
        "15–20 hours per week minimum: 7 hours on Saturday sessions plus 10-15 hours for independent work during the week.",
    },
    {
      question: "What tools will I need?",
      answer:
        "A laptop (8GB+ RAM recommended), stable internet, and basic setup (VS Code, Git, browser). We'll guide you through installation during Week 1.",
    },
    {
      question: "What if I fall behind?",
      answer:
        "Mentors are available during Wednesday office hours, and all sessions are recorded for review. We also have an active Discord community for peer support.",
    },
    {
      question: "What's the refund policy?",
      answer:
        "Full refund (minus ₵200 admin fee) if you cancel before January 18. 50% refund during Week 1. No refunds after Week 1.",
    },
    {
      question: "Can international students join?",
      answer:
        "Yes! All Saturday sessions are live-streamed and recorded. Remote participation via Zoom is fully supported, though you'll miss in-person networking opportunities.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about XAVS Launchpad
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
