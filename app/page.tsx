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
  const galleryItems = [
    {
      id: 1,
      image: "./feature1.jpg",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "./feature2.jpg",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "./feature3.jpg",
      title: "",
      description: "",
    },
    {
      id: 4,
      image: "./feature4.jpg",
      title: "",
      description: "",
    },
    {
      id: 5,
      image: "./feature6.jpg",
      title: "",
      description: "",
    },
    {
      id: 6,
      image: "./feature7.jpg",
      title: "",
      description: "",
    },
  ];
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
                  An A-Level student at DPS International, Saket, with top
                  scores in Maths, Sciences, and Psychology. I've earned
                  distinctions in global math competitions, excelled in
                  standardized exams like SAT, AP, and TOEFL, and led tech and
                  science clubs through hackathons and scientific debates. I
                  play the Indian classical flute, teach STEM concepts on
                  YouTube, and work with Python and machine learning tools. My
                  journey blends academic achievement, research, leadership, and
                  creativity.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-4 animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              >
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
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              <b>Vivyan Kumar</b>
              <br></br>As an A-Level student at Delhi Public School
              International, Saket, I've cultivated a passion for bridging the
              gap between theoretical knowledge and real-world applications.
              With exceptional performance across standardized tests (SAT: 1570,
              TOEFL: 115) and multiple AP Scholar distinctions, my academic
              foundation spans mathematics, sciences, and psychology. My
              achievements in global mathematics competitions, including ranking
              in the top 500 worldwide in the Avogadro contest and earning
              International Honour Roll recognition in multiple Waterloo
              competitions, reflect my analytical mindset and problem-solving
              abilities.<br></br>
              <br></br> Beyond academics, I've emerged as a leader in technology
              and innovation through my roles as Head of Hackathon at SYNTAX
              Tech Club, where I pioneered our school's first inter-school Game
              Jam, and as a core member of Domus Scientia Science Club. My
              published research on "Imitation Learning in Games: Teaching AI
              Through Mimicking Expert Human Players" demonstrates my commitment
              to exploring cutting-edge applications of artificial intelligence.
              This research journey, combined with my data science internship at
              Pickl.AI, showcases my dedication to understanding how technology
              can enhance human experiences.
              <br></br>
              <br></br> My diverse interests extend from Indian classical flute,
              where I've earned distinction certificates, to competitive
              speedcubing with sub-5-second 2x2 solves, reflecting my ability to
              excel across varied domains. Through volunteer work at COVID
              vaccination camps and my YouTube channel teaching mathematics
              through gaming examples, I strive to make learning accessible and
              engaging for others. My journey is a blend of academic excellence,
              research curiosity, leadership experience, and creative
              problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Certificates",
                desc: "",
                color: "primary",
                delay: "0.1s",
                link: "/certificate",
              },
              {
                icon: FileText,
                title: "Research",
                desc: "",
                color: "chart-2",
                delay: "0.3s",
                link: "/research-paper",
              },
              {
                icon: Briefcase,
                title: "Experience",
                desc: "",
                color: "chart-3",
                delay: "0.4s",
                link: "/Experiences",
              },
              {
                icon: Code,
                title: "SpeedCubing",
                desc: "",
                color: "chart-1",
                delay: "0.2s",
                link: "/speedcubing",
              },
            ].map((item, index) => (
              <Link key={index} href={item.link} className="block">
                <Card
                  className="p-6 hover-lift group animate-scale-in gradient-border h-full hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className={`p-3 bg-${item.color}/10 rounded-lg group-hover:bg-${item.color}/20 transition-all duration-300 group-hover:scale-110`}
                    >
                      <item.icon
                        className={`h-8 w-8 text-${item.color} group-hover:rotate-12 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my Achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={galleryItems[0].image}
                  alt={galleryItems[0].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {galleryItems[0].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[0].description}
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={galleryItems[1].image}
                  alt={galleryItems[1].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {galleryItems[1].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[1].description}
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={galleryItems[2].image}
                  alt={galleryItems[2].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {galleryItems[2].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[2].description}
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={galleryItems[3].image}
                  alt={galleryItems[3].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {galleryItems[3].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[3].description}
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={galleryItems[4].image}
                  alt={galleryItems[4].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {galleryItems[4].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[4].description}
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={galleryItems[5].image}
                  alt={galleryItems[5].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {galleryItems[5].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems[5].description}
                </p>
              </div>
            </Card>
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
