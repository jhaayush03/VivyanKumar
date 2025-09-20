import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Briefcase,
  GraduationCap,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance animate-fade-in">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent animate-glow">
                    Vivyan Kumar
                  </span>
                </h1>
                <p
                  className="text-xl text-muted-foreground text-pretty max-w-2xl animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  A high-achieving A-Level student at DPS International, Saket,
                  with top scores in Maths, Sciences, and Psychology. He has
                  strong credentials in standardized tests (SAT, AP, TOEFL),
                  many awards in math competitions, and leadership roles in tech
                  and science clubs. Beyond academics, he plays the flute,
                  speaks publicly, teaches via his YouTube channel, and works
                  with Python and ML tools.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-4 animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Button asChild size="lg" className="group hover-lift">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover-lift bg-transparent"
                >
                  <Link href="/resume">Download Resume</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {[
                  {
                    value: "10+",
                    label: "Projects",
                    color: "text-primary",
                    delay: "0.6s",
                  },
                  {
                    value: "5+",
                    label: "Research Papers",
                    color: "text-chart-1",
                    delay: "0.7s",
                  },
                  {
                    value: "3+",
                    label: "Internships",
                    color: "text-chart-2",
                    delay: "0.8s",
                  },
                  {
                    value: "15+",
                    label: "Certificates",
                    color: "text-chart-3",
                    delay: "0.9s",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-scale-in hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-1/20 rounded-2xl blur-3xl animate-glow"></div>
                <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover-tilt">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-auto rounded-xl transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              <b>Vivyan Kumar</b>
              <br></br>A driven STEM scholar excelling in Mathematics, Sciences
              & Psychology, with a 1530 SAT & 115 TOEFL. Top-tier IGCSE,
              AS/A-Level & AP results, plus wins in international math contests.
              Active leader in school tech & science clubs, skilled in Python &
              ML. Outside academics: flute player, public speaker & educational
              content creator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Strong academic foundation with focus on Mathematics and Science.",
                color: "primary",
                delay: "0.1s",
              },
              {
                icon: Code,
                title: "Leadership",
                desc: "increasing participation and innovation while mentoring peers to collaborate effectively.",
                color: "chart-1",
                delay: "0.2s",
              },
              {
                icon: FileText,
                title: "Research",
                desc: "Published research papers and case studies in various domains.",
                color: "chart-2",
                delay: "0.3s",
              },
              {
                icon: Briefcase,
                title: "Experience",
                desc: "Professional experience through internships and Participation in Top-level Competitions..",
                color: "chart-3",
                delay: "0.4s",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-lift group animate-scale-in gradient-border"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-2 bg-${item.color}/10 rounded-lg group-hover:bg-${item.color}/20 transition-all duration-300 group-hover:scale-110`}
                  >
                    <item.icon
                      className={`h-6 w-6 text-${item.color} group-hover:rotate-12 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my Achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <Card
                key={item}
                className="overflow-hidden hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-chart-1/10 relative overflow-hidden">
                  <img
                    src={`./feature${item}.jpg `}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Achievments {item}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            I'm always interested in new opportunities and collaborations. Let's
            connect and discuss how we can create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="hover-lift animate-glow">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover-lift bg-transparent"
            >
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
