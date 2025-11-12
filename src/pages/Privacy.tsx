import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Effective Date: January 1, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-3">We collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Information</strong>: Name, email, phone, address (during application)</li>
                  <li><strong>Program Data</strong>: Attendance, project submissions, grades</li>
                  <li><strong>Technical Data</strong>: IP address, browser type (via website analytics)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Process applications and enrollment</li>
                  <li>Communicate program updates</li>
                  <li>Improve program quality</li>
                  <li>Send certificates and materials</li>
                  <li>Marketing (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Data Storage & Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Data stored securely using industry-standard practices</li>
                  <li>Access limited to authorized XAVS Labs staff</li>
                  <li>We do not sell or share your data with third parties (except service providers like email platforms)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
                <p className="text-muted-foreground mb-3">We use:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Google Workspace (email, forms)</li>
                  <li>Zoom (virtual sessions)</li>
                  <li>Payment processors (mobile money, banks)</li>
                  <li>Analytics tools (Google Analytics)</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  These services have their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-3">You can:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Request access to your data</li>
                  <li>Request correction or deletion</li>
                  <li>Opt out of marketing emails</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  <strong>Contact:</strong> <a href="mailto:academy@xavslabs.com" className="text-primary hover:underline">academy@xavslabs.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies for analytics and functionality. You can disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Changes to Policy</h2>
                <p className="text-muted-foreground">
                  We may update this policy. Major changes will be communicated to enrolled participants.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
                <p className="text-muted-foreground">
                  Questions about privacy? Email <a href="mailto:academy@xavslabs.com" className="text-primary hover:underline">academy@xavslabs.com</a>
                </p>
              </section>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Questions About Your Data?</h3>
              <p className="text-muted-foreground">
                We're committed to protecting your privacy. Contact us anytime with concerns.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
