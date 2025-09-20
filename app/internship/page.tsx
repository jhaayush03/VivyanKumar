import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Calendar, MapPin, Users, TrendingUp, Award, ExternalLink } from "lucide-react"

export default function InternshipPage() {
  const internships = [
    {
      company: "Google",
      position: "Software Engineering Intern",
      location: "Mountain View, CA",
      duration: "Jun 2023 - Aug 2023",
      type: "Full-time",
      team: "Search Infrastructure",
      description:
        "Worked on improving search query processing efficiency and developed new algorithms for better search result ranking. Collaborated with senior engineers on large-scale distributed systems.",
      achievements: [
        "Improved search query processing speed by 15%",
        "Developed new ranking algorithm adopted by the team",
        "Contributed to 3 major releases during internship",
        "Received 'Outstanding Intern' recognition",
      ],
      technologies: ["Java", "Python", "C++", "Bigtable", "MapReduce", "Protocol Buffers"],
      projects: [
        {
          name: "Query Processing Optimization",
          description: "Optimized search query processing pipeline resulting in 15% performance improvement",
        },
        {
          name: "Ranking Algorithm Enhancement",
          description: "Developed machine learning-based ranking improvements for search results",
        },
      ],
      mentor: "Dr. Sarah Johnson, Senior Staff Engineer",
      skills: ["Large-scale Systems", "Algorithm Design", "Performance Optimization", "Machine Learning"],
      logo: "/company-google.png",
    },
    {
      company: "Microsoft",
      position: "Software Development Intern",
      location: "Redmond, WA",
      duration: "Jun 2022 - Aug 2022",
      type: "Full-time",
      team: "Azure Cloud Services",
      description:
        "Contributed to Azure cloud infrastructure development, focusing on container orchestration and microservices architecture. Worked on improving deployment automation and monitoring systems.",
      achievements: [
        "Reduced deployment time by 30% through automation",
        "Implemented monitoring dashboard used by 50+ teams",
        "Fixed critical bugs in production systems",
        "Presented project to VP of Engineering",
      ],
      technologies: ["C#", ".NET Core", "Azure", "Docker", "Kubernetes", "PowerShell"],
      projects: [
        {
          name: "Deployment Automation Tool",
          description: "Built automated deployment pipeline reducing manual deployment time by 30%",
        },
        {
          name: "Monitoring Dashboard",
          description: "Created real-time monitoring dashboard for cloud services health tracking",
        },
      ],
      mentor: "Mark Thompson, Principal Engineer",
      skills: ["Cloud Computing", "DevOps", "Microservices", "Automation"],
      logo: "/company-microsoft.png",
    },
    {
      company: "Meta",
      position: "Frontend Engineering Intern",
      location: "Menlo Park, CA",
      duration: "May 2021 - Aug 2021",
      type: "Full-time",
      team: "Instagram Web Platform",
      description:
        "Worked on Instagram web platform, focusing on performance optimization and user experience improvements. Developed new features for the web interface and improved accessibility.",
      achievements: [
        "Improved page load speed by 25% for mobile users",
        "Implemented accessibility features reaching WCAG 2.1 AA compliance",
        "Developed 3 new user-facing features",
        "Mentored 2 junior interns",
      ],
      technologies: ["React", "JavaScript", "GraphQL", "Relay", "Flow", "Jest"],
      projects: [
        {
          name: "Performance Optimization",
          description: "Optimized Instagram web app performance, achieving 25% faster load times",
        },
        {
          name: "Accessibility Enhancement",
          description: "Implemented comprehensive accessibility improvements for better user inclusion",
        },
      ],
      mentor: "Lisa Chen, Senior Frontend Engineer",
      skills: ["Frontend Development", "Performance Optimization", "Accessibility", "User Experience"],
      logo: "/company-meta.png",
    },
    {
      company: "Stripe",
      position: "Backend Engineering Intern",
      location: "San Francisco, CA",
      duration: "Jun 2020 - Aug 2020",
      type: "Full-time",
      team: "Payments Infrastructure",
      description:
        "Contributed to Stripe's core payments infrastructure, working on transaction processing systems and fraud detection algorithms. Gained experience with financial technology and security.",
      achievements: [
        "Improved fraud detection accuracy by 12%",
        "Reduced transaction processing latency by 20ms",
        "Implemented new API endpoints used by 1000+ merchants",
        "Contributed to PCI DSS compliance improvements",
      ],
      technologies: ["Ruby", "Go", "PostgreSQL", "Redis", "Kafka", "Docker"],
      projects: [
        {
          name: "Fraud Detection Enhancement",
          description: "Improved machine learning models for fraud detection with 12% accuracy increase",
        },
        {
          name: "API Performance Optimization",
          description: "Optimized payment processing APIs reducing latency by 20ms",
        },
      ],
      mentor: "David Kim, Staff Engineer",
      skills: ["Backend Development", "Financial Technology", "Security", "API Design"],
      logo: "/company-stripe.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Internship Experience</h1>
            <p className="text-lg text-muted-foreground">
              Professional internships at leading technology companies, gaining hands-on experience in software
              development and engineering
            </p>
          </div>

          {/* Internship Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-1 mb-1">12</div>
              <div className="text-sm text-muted-foreground">Months Experience</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-2 mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-3 mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </Card>
          </div>

          {/* Internships */}
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <Building className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{internship.position}</h2>
                      <p className="text-xl text-primary font-semibold mb-2">{internship.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {internship.team}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{internship.type}</Badge>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">{internship.description}</p>

                {/* Projects */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Key Projects</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {internship.projects.map((project, projectIndex) => (
                      <Card key={projectIndex} className="p-4 bg-muted/30">
                        <h4 className="font-medium mb-2">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-chart-1" />
                    Key Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {internship.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Skills */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Skills Developed</h3>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mentor */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Mentor</p>
                      <p className="font-medium">{internship.mentor}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Recommendation
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <Card className="mt-12 p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">Skills Gained Through Internships</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Technical Skills</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Full-stack web development</li>
                  <li>• Large-scale system design</li>
                  <li>• Cloud computing and DevOps</li>
                  <li>• Machine learning and AI</li>
                  <li>• Database design and optimization</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-chart-1">Professional Skills</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Agile development methodologies</li>
                  <li>• Code review and collaboration</li>
                  <li>• Technical documentation</li>
                  <li>• Project management</li>
                  <li>• Cross-functional teamwork</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-chart-2">Industry Knowledge</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Software engineering best practices</li>
                  <li>• Security and compliance standards</li>
                  <li>• Performance optimization techniques</li>
                  <li>• User experience design principles</li>
                  <li>• Business impact measurement</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
