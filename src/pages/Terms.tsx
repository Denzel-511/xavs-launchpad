import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Legal
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground">
                Effective Date: January 1, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By enrolling in XAVS Launchpad, you agree to these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Program Description</h2>
                <p className="text-muted-foreground">
                  XAVS Launchpad is an 8-week professional development program by XAVS Labs. It focuses on project-based learning, mentorship, and portfolio building. This is not an academic degree or diploma program.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Enrollment & Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Enrollment is confirmed only after payment</li>
                  <li>Payment plans must be completed within the program period</li>
                  <li>Early bird pricing valid until January 5, 2026</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Refund Policy</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Before Program Start</strong> (Jan 18): Full refund minus ₵200 admin fee</li>
                  <li><strong>Week 1</strong>: 50% refund</li>
                  <li><strong>After Week 1</strong>: No refunds</li>
                  <li>Request refunds via email to academy@xavslabs.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Attendance & Participation</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Participants must attend minimum 7/8 Saturday sessions (live or recorded)</li>
                  <li>Complete 5/6 weekly projects to graduate</li>
                  <li>Participate respectfully in all activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All course materials remain property of XAVS Labs</li>
                  <li>Projects built during the program belong to participants</li>
                  <li>XAVS Labs may showcase student projects (with permission) for marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Code of Conduct</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Respect all participants, mentors, and staff</li>
                  <li>No harassment, discrimination, or disruptive behavior</li>
                  <li>Plagiarism results in project failure; repeat offenses may lead to removal without refund</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-3">XAVS Labs is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Job placement outcomes</li>
                  <li>Equipment damage or internet issues</li>
                  <li>Third-party service disruptions (Zoom, GitHub, etc.)</li>
                  <li>Personal injuries during in-person sessions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Certificate Issuance</h2>
                <p className="text-muted-foreground mb-3">Certificates are issued to participants who:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Complete 5/6 weekly projects</li>
                  <li>Submit capstone project</li>
                  <li>Attend 7/8 sessions (or watch recordings)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Privacy & Data</h2>
                <p className="text-muted-foreground">
                  We collect and store participant information securely. See our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  XAVS Labs reserves the right to update these terms. Participants will be notified of major changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of Ghana.
                </p>
              </section>

              <section className="bg-muted/50 rounded-xl p-6">
                <p className="text-muted-foreground">
                  <strong>Contact:</strong> <a href="mailto:academy@xavslabs.com" className="text-primary hover:underline">academy@xavslabs.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
