import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink, Github, Calendar, Star, GitBranch, Users } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI-Powered Code Review System",
      description:
        "An intelligent system that automatically reviews code for bugs, security vulnerabilities, and style issues using machine learning algorithms. Features real-time analysis and integration with popular version control systems.",
      category: "Machine Learning",
      status: "Completed",
      year: "2024",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
      features: [
        "Real-time code analysis",
        "Security vulnerability detection",
        "Style and best practice suggestions",
        "Integration with Git workflows",
        "Customizable rule sets",
      ],
      metrics: {
        accuracy: "89%",
        performance: "< 2s analysis",
        users: "500+",
        repositories: "1.2K+",
      },
      image: "/project-code-review.png",
      github: "https://github.com/yourusername/ai-code-review",
      demo: "https://code-review-demo.vercel.app",
      highlights: ["Featured on Product Hunt", "Open source with 200+ stars"],
    },
    {
      title: "E-commerce Platform with Microservices",
      description:
        "A scalable e-commerce platform built with microservices architecture. Includes user management, product catalog, order processing, payment integration, and real-time inventory management.",
      category: "Full Stack",
      status: "Completed",
      year: "2023",
      technologies: ["Node.js", "React", "MongoDB", "Redis", "Docker", "Kubernetes", "Stripe API"],
      features: [
        "Microservices architecture",
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard",
        "Mobile-responsive design",
      ],
      metrics: {
        uptime: "99.9%",
        performance: "< 1s load time",
        transactions: "10K+",
        revenue: "$500K+",
      },
      image: "/project-ecommerce.png",
      github: "https://github.com/yourusername/ecommerce-microservices",
      demo: "https://ecommerce-demo.vercel.app",
      highlights: ["Handles 1000+ concurrent users", "PCI DSS compliant"],
    },
    {
      title: "Healthcare Data Analytics Dashboard",
      description:
        "A comprehensive analytics platform for healthcare providers to visualize patient data, track treatment outcomes, and generate insights for improved care delivery. HIPAA compliant with advanced security features.",
      category: "Healthcare Tech",
      status: "Completed",
      year: "2023",
      technologies: ["React", "D3.js", "Python", "Django", "PostgreSQL", "Apache Kafka"],
      features: [
        "Real-time patient monitoring",
        "Predictive analytics",
        "HIPAA compliant security",
        "Interactive data visualizations",
        "Automated reporting",
      ],
      metrics: {
        patients: "10K+",
        accuracy: "94%",
        hospitals: "15",
        reports: "500+/month",
      },
      image: "/project-healthcare.png",
      github: "https://github.com/yourusername/healthcare-analytics",
      demo: "https://healthcare-demo.vercel.app",
      highlights: ["Improved diagnosis accuracy by 25%", "Used by 15 hospitals"],
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology. Ensures vote integrity, prevents tampering, and provides real-time results while maintaining voter anonymity.",
      category: "Blockchain",
      status: "Completed",
      year: "2022",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS", "MetaMask"],
      features: [
        "Immutable vote records",
        "Anonymous voting",
        "Real-time result tracking",
        "Smart contract automation",
        "Multi-device support",
      ],
      metrics: {
        votes: "50K+",
        security: "Zero breaches",
        elections: "25+",
        efficiency: "90% faster",
      },
      image: "/project-voting.png",
      github: "https://github.com/yourusername/blockchain-voting",
      demo: "https://voting-demo.vercel.app",
      highlights: ["Winner of Blockchain Hackathon 2022", "Deployed in 3 universities"],
    },
    {
      title: "Real-time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, video calls, and group management. Features end-to-end encryption and cross-platform compatibility.",
      category: "Web Application",
      status: "Completed",
      year: "2022",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC", "AWS S3"],
      features: [
        "Real-time messaging",
        "Video/audio calls",
        "File sharing",
        "Group chat management",
        "End-to-end encryption",
      ],
      metrics: {
        users: "5K+",
        messages: "1M+",
        uptime: "99.8%",
        response: "< 100ms",
      },
      image: "/project-chat.png",
      github: "https://github.com/yourusername/realtime-chat",
      demo: "https://chat-demo.vercel.app",
      highlights: ["Featured in tech blog", "5K+ active users"],
    },
    {
      title: "Machine Learning Model Deployment Platform",
      description:
        "A platform for data scientists to deploy, monitor, and scale machine learning models in production. Includes model versioning, A/B testing, and performance monitoring.",
      category: "MLOps",
      status: "In Progress",
      year: "2024",
      technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "MLflow", "Prometheus"],
      features: [
        "Model versioning",
        "A/B testing framework",
        "Performance monitoring",
        "Auto-scaling",
        "API management",
      ],
      metrics: {
        models: "100+",
        requests: "1M+/day",
        latency: "< 50ms",
        accuracy: "95%+",
      },
      image: "/project-mlops.png",
      github: "https://github.com/yourusername/ml-deployment",
      demo: "https://mlops-demo.vercel.app",
      highlights: ["Beta testing with 10 companies", "75% complete"],
    },
  ]

  const categories = [
    "All",
    "Machine Learning",
    "Full Stack",
    "Healthcare Tech",
    "Blockchain",
    "Web Application",
    "MLOps",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              A showcase of innovative solutions and technical implementations across various domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "25+", label: "Projects Built", color: "text-primary", delay: "0.1s" },
              { value: "15+", label: "Technologies", color: "text-chart-1", delay: "0.2s" },
              { value: "50K+", label: "Users Served", color: "text-chart-2", delay: "0.3s" },
              { value: "100+", label: "GitHub Stars", color: "text-chart-3", delay: "0.4s" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-4 text-center hover-lift animate-scale-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="transition-all duration-300 hover:scale-105 hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift group animate-scale-in gradient-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-chart-1/10 relative overflow-hidden">
                  <img
                    src={`/project-screenshot.png?height=300&width=500&query=${project.title} project screenshot`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge
                      className={
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-balance group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                        {project.year}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-muted/30 rounded-lg group-hover:bg-muted/50 transition-colors duration-300">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center hover:scale-105 transition-transform duration-200">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 group-hover:text-foreground transition-colors duration-300">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-primary">• +{project.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:scale-105 transition-transform duration-200"
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 flex items-center group-hover:text-primary transition-colors duration-300">
                        <Star className="h-4 w-4 mr-1 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                        Highlights:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 group-hover:text-foreground transition-colors duration-300">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" asChild className="hover-lift">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="hover-lift bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                      <Code className="h-4 w-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-muted/30 hover-lift animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">Open Source Contributions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: GitBranch,
                  title: "Active Contributor",
                  desc: "Regular contributions to popular open source projects including React, Node.js ecosystem, and ML libraries",
                  color: "text-primary",
                  delay: "0.1s",
                },
                {
                  icon: Users,
                  title: "Community Impact",
                  desc: "Maintained projects with 1000+ stars, helping developers worldwide with tools and libraries",
                  color: "text-chart-1",
                  delay: "0.2s",
                },
                {
                  icon: Star,
                  title: "Recognition",
                  desc: "Featured contributor in major projects, with contributions recognized by maintainers and community",
                  color: "text-chart-2",
                  delay: "0.3s",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 animate-scale-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className={`h-5 w-5 ${item.color} hover:rotate-12 transition-transform duration-300`} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mt-8 p-8 text-center hover-lift animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects and contribute to meaningful solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="hover-lift animate-glow">
                <a href="/contact">Start a Project</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift bg-transparent">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View All Projects
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
