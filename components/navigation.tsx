"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Resume", href: "/resume" },
    { label: "Certificates", href: "/certificate" },
    { label: "Research Paper", href: "/research-paper" },
    { label: "Experience", href: "/Experiences" },
    { label: "Speed Cubing", href: "/Speedcubing" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vivyan-kumar-a869a2381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:vivyankumar2008@gmail.com", label: "Email" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-foreground bg-gradient-to-r from-primary to-chart-1 bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Vivyan Kumar
            </Link>
          </div>

          {/* Middle - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right - Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-border transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 px-3 py-4 border-t border-border">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
