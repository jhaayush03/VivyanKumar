"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message (in a real app, you'd handle this properly)
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available for calls during business hours",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      description: "Open to remote work and relocation",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      description: "Professional network and career updates",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourprofile",
      description: "Open source projects and code repositories",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourprofile",
      description: "Tech thoughts and industry discussions",
    },
  ]

  const faqs = [
    {
      question: "What's the best way to contact you?",
      answer: "Email is the most reliable way to reach me. I typically respond within 24 hours during business days.",
    },
    {
      question: "Are you available for freelance projects?",
      answer:
        "Yes, I'm open to interesting freelance opportunities, especially those involving innovative technology or social impact.",
    },
    {
      question: "Do you offer mentoring or consulting?",
      answer:
        "I provide mentoring for students and early-career developers. For consulting inquiries, please reach out with project details.",
    },
    {
      question: "What types of collaborations interest you?",
      answer:
        "I'm particularly interested in AI/ML projects, social impact initiatives, and open source contributions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
              I'm always interested in new opportunities, collaborations, and meaningful conversations. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 animate-slide-up animation-delay-400 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-2 mb-6">
                  <MessageCircle className="h-5 w-5 text-primary animate-pulse" />
                  <h2 className="text-2xl font-bold hover:text-primary transition-colors duration-300">
                    Send a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="hover:text-primary transition-colors duration-300">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="hover:border-primary/50 focus:border-primary transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="hover:text-primary transition-colors duration-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="hover:border-primary/50 focus:border-primary transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="hover:text-primary transition-colors duration-300">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="hover:border-primary/50 focus:border-primary transition-all duration-300 hover:shadow-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="hover:text-primary transition-colors duration-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project, question, or how I can help..."
                      rows={6}
                      required
                      className="hover:border-primary/50 focus:border-primary transition-all duration-300 hover:shadow-md resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 animate-pulse" />
                    <span>I typically respond within 24 hours during business days</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="p-6 animate-slide-up animation-delay-600 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-4 hover:text-primary transition-colors duration-300">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 hover:bg-muted/30 p-2 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300 hover:scale-110">
                        <contact.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium hover:text-primary transition-colors duration-300">
                          {contact.label}
                        </div>
                        <a
                          href={contact.href}
                          className="text-primary hover:underline hover:text-primary/80 transition-colors duration-300"
                          {...(contact.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {contact.value}
                        </a>
                        <p className="text-xs text-muted-foreground mt-1 hover:text-foreground transition-colors duration-300">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 animate-slide-up animation-delay-800 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-4 hover:text-primary transition-colors duration-300">
                  Connect on Social
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group hover:scale-105 hover:shadow-md"
                    >
                      <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                        <social.icon className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium group-hover:text-primary transition-colors duration-300">
                          {social.label}
                        </div>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-6 animate-slide-up animation-delay-1000 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-4 hover:text-primary transition-colors duration-300">
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between hover:bg-muted/30 p-2 rounded-lg transition-all duration-300">
                    <span className="text-sm hover:text-primary transition-colors duration-300">
                      Freelance Projects
                    </span>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:scale-110 transition-transform duration-300">
                      Available
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between hover:bg-muted/30 p-2 rounded-lg transition-all duration-300">
                    <span className="text-sm hover:text-primary transition-colors duration-300">
                      Full-time Opportunities
                    </span>
                    <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:scale-110 transition-transform duration-300">
                      Selective
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between hover:bg-muted/30 p-2 rounded-lg transition-all duration-300">
                    <span className="text-sm hover:text-primary transition-colors duration-300">Mentoring</span>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:scale-110 transition-transform duration-300">
                      Available
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between hover:bg-muted/30 p-2 rounded-lg transition-all duration-300">
                    <span className="text-sm hover:text-primary transition-colors duration-300">
                      Speaking Engagements
                    </span>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:scale-110 transition-transform duration-300">
                      Available
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mt-12 p-8 animate-slide-up animation-delay-1200 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="space-y-2 hover:bg-muted/30 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <h3 className="font-semibold text-primary hover:text-primary/80 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty hover:text-foreground transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center animate-slide-up animation-delay-1400">
            <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">
              Ready to Start a Conversation?
            </h2>
            <p className="text-muted-foreground mb-6 hover:text-foreground transition-colors duration-300">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from
              you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 bg-transparent"
              >
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
