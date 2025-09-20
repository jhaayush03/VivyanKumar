"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const resumeItems = [
    { label: "Resume", href: "/resume" },
    { label: "Certificate", href: "/certificate" },
    { label: "Academic", href: "/academic" },
  ]

  const researchItems = [
    { label: "Research Paper", href: "/research-paper" },
    { label: "Case Study", href: "/case-study" },
    { label: "Documentary", href: "/documentary" },
  ]

  const experienceItems = [
    { label: "Internship", href: "/internship" },
    { label: "Society Work", href: "/society-work" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/yourprofile", label: "GitHub" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-foreground bg-gradient-to-r from-primary to-chart-1 bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105"
            >
              Your Name
            </Link>
          </div>

          {/* Middle - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                <span>Resume</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {resumeItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                <span>Research</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {researchItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                <span>Experience</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {experienceItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="transition-all duration-300 hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden border-t border-border transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Resume Section */}
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground px-3 py-2">Resume</div>
              {resumeItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-200 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Research Section */}
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground px-3 py-2">Research</div>
              {researchItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-200 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-200 hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>

            {/* Experience Section */}
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground px-3 py-2">Experience</div>
              {experienceItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-200 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 px-3 py-4 border-t border-border">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
