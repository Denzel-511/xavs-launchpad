import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoDay() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    role: "",
    email: "",
    whyAttend: "",
    collaboration: "no",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      company: "",
      role: "",
      email: "",
      whyAttend: "",
      collaboration: "no",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mt-10 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Launchpad Demo Day Cohort 1
          </h1>
          <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
            Real Projects. Real Companies. Real Talent.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            An exclusive showcase where students present production-ready solutions built for local companies during their 8-week program.
          </p>

          <div className="gap-4 mb-16 text-slate-700 dark:text-slate-300 flex flex-row flex-wrap items-center justify-center">
            <p>📅 <span className="font-semibold">Date:</span> March 15, 2026</p>
            <p>📍 <span className="font-semibold">Venue:</span> Accra (final venue announced soon)</p>
            <p>⏱️ <span className="font-semibold">Time:</span> 10:00 AM — 3:00 PM</p>
            <p>🎟️ <span className="font-semibold">Attendance:</span> By invitation only</p>
          </div>



          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Request an Invite
            </Button>
            <Button size="lg" variant="outline">
              Meet the Teams
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 1 - WHAT DEMO DAY IS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 min-h-screen overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-50">
            Where Learning Meets the Real World
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Launchpad Demo Day is a curated presentation of solutions built by student teams for real Ghanaian businesses.
            <span className="block font-semibold mt-2">No theory. No playground exercises. Only real-world, production-focused builds.</span>
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">You will see:</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>✓ AI automations built for real operations</li>
            <li>✓ Working prototypes solving real business pain points</li>
            <li>✓ Full-stack applications created by cross-functional teams</li>
            <li>✓ Students presenting like real product engineers, not "students"</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2 - WHO SHOULD ATTEND */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50 text-center">
            This Event Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Founders looking for fresh talent",
              "Tech leads scouting junior engineers",
              "Product teams that want to outsource MVP ideas",
              "Investors tracking early technical talent",
              "Companies interested in partnering for future capstones",
              "Community & innovation leaders in Ghana's tech ecosystem",
            ].map((item, idx) => (
              <Card key={idx} className="p-4 border-l-4 border-primary">
                <p className="text-slate-700 dark:text-slate-300">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE PROJECTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">
            What You'll See
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Each team presents one real-company capstone they built during Weeks 6–7.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Every project includes:</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
            <li>• A real business problem</li>
            <li>• A real client</li>
            <li>• A functional prototype or MVP</li>
            <li>• A live demo</li>
            <li>• A 3-minute pitch + 2-minute Q&A</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Sample categories:</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• Customer experience tools</li>
            <li>• AI customer support automation</li>
            <li>• Booking & operations software</li>
            <li>• Cloud migration tooling</li>
            <li>• Process automation flows</li>
            <li>• Internal productivity tools</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 - HOW COMPANIES PARTICIPATED */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-50 text-center">
            Built WITH, not FOR, companies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Partner Companies</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                <li>• 1 real problem</li>
                <li>• 1 point-of-contact</li>
                <li>• 1 short briefing</li>
                <li>• 1 review session</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Students</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                <li>• Designed the solution</li>
                <li>• Built the prototype</li>
                <li>• Demoed to the partner</li>
                <li>• Integrated feedback</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Companies Received</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                <li>• A free solution</li>
                <li>• A development roadmap</li>
                <li>• A working MVP they can adopt or continue</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 - EVENT FLOW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50">
            Program Schedule
          </h2>

          <div className="space-y-4">
            {[
              { time: "10:00 – 10:15 AM", event: "Welcome & Opening" },
              { time: "10:15 – 11:40 AM", event: "Team Presentations (5 teams)" },
              { time: "11:40 – 12:00 PM", event: "Judges' Notes / Feedback" },
              { time: "12:00 – 12:20 PM", event: "Networking Session" },
              { time: "12:20 – 12:45 PM", event: "Awards & Recognition" },
              { time: "12:45 – 1:00 PM", event: "Closing Remarks" },
            ].map((item, idx) => (
              <Card key={idx} className="p-4 flex items-center gap-4 bg-slate-50 dark:bg-slate-900 border-0">
                <span className="font-semibold text-primary">{item.time}</span>
                <span className="text-slate-700 dark:text-slate-300">{item.event}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - JUDGING PANEL */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50">
            Judging Panel
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Judges Include:</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• Senior engineers</li>
                <li>• Startup founders</li>
                <li>• Product managers</li>
                <li>• Designers</li>
                <li>• Industry partners</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Criteria:</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• Problem understanding</li>
                <li>• Execution</li>
                <li>• User experience</li>
                <li>• Innovation</li>
                <li>• Presentation clarity</li>
                <li>• Production readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - WHY COMPANIES SHOULD SHOW UP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50 text-center">
            Benefits for Attendees
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Discover motivated, job-ready talent",
              "Interact with teams that actually build",
              "Spot potential hires",
              "Explore partnership opportunities",
              "See the capabilities of XAVS Labs firsthand",
              "Network with founders + industry operators",
            ].map((benefit, idx) => (
              <Card key={idx} className="p-4 border-l-4 border-purple-600 bg-slate-50 dark:bg-slate-900 border-0">
                <p className="text-slate-700 dark:text-slate-300">✓ {benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - REQUEST AN INVITE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50 text-center">
            Limited Seating — Priority for Partners
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-8">
            This is a small, high-quality event. We are curating the room intentionally.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Role / Position
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Why You Want to Attend
              </label>
              <textarea
                name="whyAttend"
                value={formData.whyAttend}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Are You Interested in Future Collaboration?
              </label>
              <select
                name="collaboration"
                value={formData.collaboration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Request an Invite
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}