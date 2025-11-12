import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Instagram, Github, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "XAVS Launchpad",
      links: [
        { text: "About Us", href: "/#problem" },
        { text: "Our Story", href: "/#problem" },
        { text: "Contact Us", href: "/contact" },
        { text: "Blog (coming soon)", href: "#" },
      ],
    },
    {
      title: "Programs",
      links: [
        { text: "Full-Stack Engineering", href: "/#tracks" },
        { text: "AI & Automation", href: "/#tracks" },
        { text: "Curriculum Overview", href: "/#how-it-works" },
        { text: "Demo Day", href: "/#how-it-works" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "FAQ", href: "/faq" },
        { text: "Application Process", href: "/#pricing" },
        { text: "Student Handbook", href: "#" },
        { text: "Capstone Partners", href: "/#partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms & Conditions", href: "/terms" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Refund Policy", href: "/terms#refund" },
        { text: "Code of Conduct", href: "/terms#conduct" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                XAVS
              </div>
              <span className="text-muted-foreground">Launchpad</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building Africa's next generation of tech creators, one project at a time.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:academy@xavslabs.com" className="hover:text-primary transition-colors">
                  academy@xavslabs.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 XAVS Labs. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
          XAVS Launchpad is a professional training initiative powered by XAVS Labs, a registered 
          business in Ghana. We are not a degree-granting institution. Certificates issued recognize 
          professional skills training completion, not academic qualifications.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
