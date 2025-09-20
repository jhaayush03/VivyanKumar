import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar, MapPin, Target, TrendingUp, Award, ExternalLink } from "lucide-react"

export default function SocietyWorkPage() {
  const societyWork = [
    {
      organization: "Code for Good Foundation",
      role: "Technical Lead & Volunteer Developer",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Present",
      type: "Ongoing",
      cause: "Digital Equity",
      description:
        "Leading technical initiatives to bridge the digital divide by developing accessible technology solutions for underserved communities. Coordinating with a team of 15+ volunteer developers.",
      impact: [
        "Built digital literacy platform serving 5,000+ users",
        "Trained 200+ seniors in basic computer skills",
        "Developed mobile app for community resource sharing",
        "Organized 12 coding workshops for underprivileged youth",
      ],
      projects: [
        {
          name: "Community Resource Hub",
          description: "Web platform connecting community members with local resources and services",
          beneficiaries: "2,500+ families",
        },
        {
          name: "Senior Tech Training Program",
          description: "Interactive learning platform for seniors to learn digital skills",
          beneficiaries: "500+ seniors",
        },
      ],
      technologies: ["React", "Node.js", "MongoDB", "React Native", "AWS"],
      skills: ["Team Leadership", "Community Outreach", "Technical Training", "Project Management"],
      recognition: ["Community Impact Award 2023", "Featured in Local News"],
    },
    {
      organization: "Girls Who Code",
      role: "Volunteer Instructor & Mentor",
      location: "Bay Area, CA",
      duration: "Sep 2022 - Present",
      type: "Ongoing",
      cause: "Gender Equality in Tech",
      description:
        "Teaching programming fundamentals to high school girls and providing mentorship to increase diversity in technology fields. Developing curriculum and leading workshops.",
      impact: [
        "Mentored 50+ girls in programming and career guidance",
        "Developed curriculum used by 3 local chapters",
        "Organized hackathon with 100+ participants",
        "85% of mentees pursued STEM in college",
      ],
      projects: [
        {
          name: "Web Development Bootcamp",
          description: "8-week intensive program teaching HTML, CSS, JavaScript, and React",
          beneficiaries: "120+ students",
        },
        {
          name: "Tech Career Mentorship",
          description: "One-on-one mentoring program for college and career guidance",
          beneficiaries: "50+ mentees",
        },
      ],
      technologies: ["HTML/CSS", "JavaScript", "React", "Python", "Git"],
      skills: ["Teaching", "Curriculum Development", "Mentorship", "Public Speaking"],
      recognition: ["Outstanding Volunteer Award 2023", "Mentor of the Year 2022"],
    },
    {
      organization: "Environmental Tech Alliance",
      role: "Software Developer & Data Analyst",
      location: "Remote",
      duration: "Jun 2022 - Dec 2023",
      type: "Completed",
      cause: "Environmental Conservation",
      description:
        "Developed data analysis tools and web applications to support environmental research and conservation efforts. Worked with scientists to visualize climate data and track conservation progress.",
      impact: [
        "Built climate data visualization platform used by 20+ researchers",
        "Analyzed data for 5 published environmental studies",
        "Developed carbon footprint calculator used by 10,000+ users",
        "Created automated reporting system saving 40 hours/month",
      ],
      projects: [
        {
          name: "Climate Data Dashboard",
          description: "Interactive dashboard for visualizing global climate trends and patterns",
          beneficiaries: "Research community",
        },
        {
          name: "Carbon Footprint Calculator",
          description: "Web tool helping individuals and businesses calculate and reduce carbon emissions",
          beneficiaries: "10,000+ users",
        },
      ],
      technologies: ["Python", "D3.js", "React", "PostgreSQL", "Jupyter"],
      skills: ["Data Analysis", "Scientific Computing", "Data Visualization", "Research Collaboration"],
      recognition: ["Environmental Impact Recognition", "Featured in Research Publications"],
    },
    {
      organization: "Local Food Bank Network",
      role: "Technology Coordinator",
      location: "San Jose, CA",
      duration: "Mar 2021 - May 2022",
      type: "Completed",
      cause: "Food Security",
      description:
        "Modernized food bank operations through technology solutions, improving inventory management and volunteer coordination. Developed systems to track donations and optimize distribution.",
      impact: [
        "Improved inventory tracking efficiency by 60%",
        "Streamlined volunteer scheduling for 200+ volunteers",
        "Reduced food waste by 25% through better tracking",
        "Served 15,000+ families through improved operations",
      ],
      projects: [
        {
          name: "Inventory Management System",
          description: "Digital system for tracking food donations, expiration dates, and distribution",
          beneficiaries: "15,000+ families",
        },
        {
          name: "Volunteer Coordination Platform",
          description: "Web platform for volunteer registration, scheduling, and communication",
          beneficiaries: "200+ volunteers",
        },
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Google APIs"],
      skills: ["Database Design", "System Integration", "Volunteer Management", "Operations Optimization"],
      recognition: ["Volunteer Excellence Award", "Technology Innovation Recognition"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Society Work</h1>
            <p className="text-lg text-muted-foreground">
              Using technology skills to create positive social impact and contribute to community development
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">25K+</div>
              <div className="text-sm text-muted-foreground">People Impacted</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-1 mb-1">8</div>
              <div className="text-sm text-muted-foreground">Organizations</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-2 mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Volunteer Hours</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-3 mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
          </div>

          {/* Society Work Experiences */}
          <div className="space-y-8">
            {societyWork.map((work, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{work.role}</h2>
                      <p className="text-xl text-primary font-semibold mb-2">{work.organization}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {work.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {work.location}
                        </div>
                        <div className="flex items-center">
                          <Target className="h-4 w-4 mr-1" />
                          {work.cause}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge
                    className={
                      work.type === "Ongoing"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                    }
                  >
                    {work.type}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">{work.description}</p>

                {/* Projects */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Key Projects</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {work.projects.map((project, projectIndex) => (
                      <Card key={projectIndex} className="p-4 bg-muted/30">
                        <h4 className="font-medium mb-2">{project.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                        <Badge variant="outline" className="text-xs">
                          Impact: {project.beneficiaries}
                        </Badge>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-chart-1" />
                    Social Impact
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {work.impact.map((impact, impactIndex) => (
                      <div key={impactIndex} className="flex items-start space-x-2">
                        <Heart className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Skills */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Skills Applied</h3>
                    <div className="flex flex-wrap gap-2">
                      {work.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recognition */}
                {work.recognition && work.recognition.length > 0 && (
                  <div className="border-t border-border pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1 text-yellow-500" />
                          Recognition
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {work.recognition.map((rec, recIndex) => (
                            <li key={recIndex}>• {rec}</li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Causes Supported */}
          <Card className="mt-12 p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">Causes I Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Digital Equity</h3>
                <p className="text-sm text-muted-foreground">
                  Bridging the digital divide through technology access and education
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-chart-1" />
                </div>
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering youth through STEM education and mentorship programs
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="font-semibold">Environment</h3>
                <p className="text-sm text-muted-foreground">
                  Using technology to support environmental research and conservation
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-chart-3" />
                </div>
                <h3 className="font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building stronger communities through technology solutions
                </p>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="mt-8 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Collaborate on Social Impact?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always looking for opportunities to use technology for positive social change
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Discuss a Project</a>
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-4 w-4 mr-2" />
                Join Our Cause
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
