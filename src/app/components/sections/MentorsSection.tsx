import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MentorContactDialog } from "@/components/MentorContactDialog";
import Image from 'next/image';

const MentorsSection = () => {
  const mentors = [
    {
      image: "/mentor-1.jpg",
      name: "Lead Mentor",
      title: "Full-Stack Engineering",
      bio: "10+ years building scalable web applications for startups and enterprises across Africa. Former tech lead at leading e-commerce platform.",
      linkedin: "https://www.linkedin.com/",
      expertise: ["React", "Node.js", "System Design", "Product Development"],
    },
    {
      image: "/mentor-2.jpg",
      name: "Lead Mentor",
      title: "AI & Automation",
      bio: "AI engineer specializing in practical business applications. Built automation systems saving companies 40+ hours weekly. OpenAI community contributor.",
      linkedin: "https://www.linkedin.com/",
      expertise: ["Python", "OpenAI API", "Workflow Automation", "LLMs"],
    },
  ];

  return (
    <section id="mentors" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Learn from Practitioners, Not Professors
          </h2>
          <p className="text-xl text-muted-foreground">
            Get mentored by professionals actively working in the field
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <Image 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                width={400} 
                height={400} />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-sm text-primary font-medium">{mentor.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mentor.bio}
                </p>
                {mentor.linkedin && (
                <div className="mb-3 flex items-center justify-center sm:justify-start">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    aria-label={`Open ${mentor.name ?? 'mentor'}'s LinkedIn`}
                  >
                    {/* simple LinkedIn SVG icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.9V24h-5V16.7c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z"/>
                    </svg>
                  </a>
                </div>
              )}
                <div>
                  <p className="text-sm font-semibold mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto p-8 bg-muted/30 border-2 border-dashed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Additional mentors and guest speakers to be announced
            </p>
            <MentorContactDialog />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MentorsSection;
