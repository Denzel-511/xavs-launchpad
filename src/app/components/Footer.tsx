import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Instagram, Github, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerSections = [
    {
      title: "Launchra",
      links: [
        { text: "About Us", href: "/#problem" },
        { text: "Our Story", href: "/#problem" },
        { text: "Contact Us", href: "/contact" },
        { text: "Join the Community", href: "https://www.instagram.com/buildwithlaunchra?igsh=MWw4ODVlcWQ3cnJ2eg%3D%3D&utm_source=qr" },
      ],
    },
    {
      title: "Programs",
      links: [
        { text: "Full-Stack Engineering", href: "/tracks/full-stack" },
        { text: "AI & Automation", href: "/tracks/ai-automation" },
        { text: "Curriculum Overview", href: "/#how-it-works" },
        { text: "Demo Day", href: "/demoday" },
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
    { icon: Instagram, href: "https://www.instagram.com/buildwithlaunchra?igsh=MWw4ODVlcWQ3cnJ2eg%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-muted/10 border-t border-border/30 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/launchra-logo.jpeg"
                alt="Launchra"
                width={160}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              A community of builders creating real impact — join us and grow together.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:joinlaunchra@xavslabs.com" className="hover:text-primary transition-colors duration-300">
                  joinlaunchra@xavslabs.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-primary" />
                <a href="https://wa.me/233543951760" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                  +233 543 951 760
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-5 text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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

        <Separator className="my-10 bg-border/30" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 XAVS Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-muted/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 flex items-center justify-center group"
              >
                <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-border/30" />

        <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
          Launchra is a professional training initiative powered by XAVS Labs, a registered 
          business in Ghana. We are not a degree-granting institution. Certificates issued recognize 
          professional skills training completion, not academic qualifications.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
