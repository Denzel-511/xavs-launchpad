import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";

const MentorsSection = () => {
  const mentors = [
    {
      image: mentor1,
      name: "Lead Mentor",
      title: "Full-Stack Engineering",
      bio: "10+ years building scalable web applications for startups and enterprises across Africa. Former tech lead at leading e-commerce platform.",
      expertise: ["React", "Node.js", "System Design", "Product Development"],
    },
    {
      image: mentor2,
      name: "Lead Mentor",
      title: "AI & Automation",
      bio: "AI engineer specializing in practical business applications. Built automation systems saving companies 40+ hours weekly. OpenAI community contributor.",
      expertise: ["Python", "OpenAI API", "Workflow Automation", "LLMs"],
    },
  ];

  return (
    <section id="mentors" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-sm text-primary font-medium">{mentor.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mentor.bio}
                </p>
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

        <Card className="max-w-3xl mx-auto p-8 bg-muted/30 border-2 border-dashed">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Additional mentors and guest speakers to be announced
            </p>
            <Button variant="outline">Want to mentor? Contact us →</Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MentorsSection;
