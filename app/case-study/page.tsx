import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileSearch, Calendar, TrendingUp, Users, Target, CheckCircle } from "lucide-react"

export default function CaseStudyPage() {
  const caseStudies = [
    {
      title: "Digital Transformation of Legacy Banking System",
      client: "Regional Bank Corp",
      duration: "8 months",
      team: "5 developers, 2 analysts",
      category: "Financial Technology",
      challenge:
        "Modernize a 20-year-old banking system to support digital banking services while maintaining security and compliance standards.",
      solution:
        "Implemented a microservices architecture with API-first design, enabling gradual migration from legacy systems. Developed secure APIs for mobile banking and integrated modern authentication systems.",
      results: [
        "40% reduction in transaction processing time",
        "99.9% system uptime achieved",
        "50% increase in digital banking adoption",
        "Zero security incidents during migration",
      ],
      technologies: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Kubernetes", "OAuth 2.0"],
      metrics: {
        performance: "+40%",
        uptime: "99.9%",
        adoption: "+50%",
        security: "0 incidents",
      },
    },
    {
      title: "E-commerce Platform Scalability Enhancement",
      client: "Fashion Retail Inc",
      duration: "6 months",
      team: "4 developers, 1 DevOps engineer",
      category: "E-commerce",
      challenge:
        "Handle 10x traffic increase during peak shopping seasons without system crashes or performance degradation.",
      solution:
        "Redesigned the architecture using cloud-native technologies, implemented auto-scaling, and optimized database queries. Added CDN and caching layers for improved performance.",
      results: [
        "Handled 500% traffic spike successfully",
        "Page load time reduced by 60%",
        "99.95% uptime during Black Friday",
        "30% reduction in infrastructure costs",
      ],
      technologies: ["Node.js", "React", "MongoDB", "Redis", "AWS", "CloudFront"],
      metrics: {
        traffic: "500% spike",
        performance: "-60% load time",
        uptime: "99.95%",
        costs: "-30%",
      },
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "Metropolitan Hospital",
      duration: "12 months",
      team: "6 developers, 2 data scientists",
      category: "Healthcare",
      challenge:
        "Create a comprehensive analytics platform to improve patient outcomes and operational efficiency while ensuring HIPAA compliance.",
      solution:
        "Built a secure data pipeline with real-time analytics capabilities. Implemented machine learning models for predictive analytics and created intuitive dashboards for healthcare professionals.",
      results: [
        "25% improvement in patient diagnosis accuracy",
        "30% reduction in average treatment time",
        "Full HIPAA compliance achieved",
        "Real-time monitoring of 10,000+ patients",
      ],
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "React", "PostgreSQL"],
      metrics: {
        accuracy: "+25%",
        efficiency: "-30% time",
        compliance: "100% HIPAA",
        monitoring: "10k+ patients",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-muted-foreground">
              Real-world projects showcasing problem-solving approaches and measurable outcomes
            </p>
          </div>

          {/* Case Study Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-1 mb-1">8</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-2 mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-3 mb-1">$2M+</div>
              <div className="text-sm text-muted-foreground">Value Delivered</div>
            </Card>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileSearch className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-balance">{study.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">{study.client}</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{study.category}</Badge>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Content Sections */}
                <div className="grid lg:grid-cols-2 gap-8 mb-6">
                  {/* Challenge */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-chart-1" />
                      <h3 className="text-lg font-semibold">Challenge</h3>
                    </div>
                    <p className="text-muted-foreground text-pretty">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-chart-2" />
                      <h3 className="text-lg font-semibold">Solution</h3>
                    </div>
                    <p className="text-muted-foreground text-pretty">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-chart-3" />
                    <h3 className="text-lg font-semibold">Results & Impact</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    View Full Case Study
                  </Button>
                  <Button variant="outline" size="sm">
                    Download Report
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact for Similar Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Methodology */}
          <Card className="mt-12 p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">My Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="p-2 bg-primary/10 rounded-lg w-fit">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Problem Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Thorough understanding of business requirements and technical constraints
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-2 bg-chart-1/10 rounded-lg w-fit">
                  <CheckCircle className="h-5 w-5 text-chart-1" />
                </div>
                <h3 className="font-semibold">Solution Design</h3>
                <p className="text-sm text-muted-foreground">
                  Architecting scalable and maintainable solutions with modern best practices
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-2 bg-chart-2/10 rounded-lg w-fit">
                  <TrendingUp className="h-5 w-5 text-chart-2" />
                </div>
                <h3 className="font-semibold">Impact Measurement</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring and optimization to ensure measurable business outcomes
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
