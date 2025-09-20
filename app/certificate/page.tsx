import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, Download } from "lucide-react"

export default function CertificatePage() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      category: "Cloud Computing",
      description: "Comprehensive certification covering AWS cloud architecture and best practices.",
      credentialId: "AWS-SAA-123456",
      color: "primary",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      category: "Cloud Development",
      description: "Professional-level certification for developing applications on Google Cloud Platform.",
      credentialId: "GCP-PD-789012",
      color: "chart-1",
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      category: "Cloud Fundamentals",
      description: "Foundational knowledge of cloud services and Microsoft Azure.",
      credentialId: "AZ-900-345678",
      color: "chart-2",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      category: "Container Orchestration",
      description: "Expertise in Kubernetes cluster administration and management.",
      credentialId: "CKA-901234",
      color: "chart-3",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      category: "Frontend Development",
      description: "Advanced React development skills and best practices.",
      credentialId: "META-REACT-567890",
      color: "chart-4",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2022",
      category: "Machine Learning",
      description: "Comprehensive machine learning course covering algorithms and applications.",
      credentialId: "COURSERA-ML-123789",
      color: "chart-5",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Certificates</h1>
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-200">
              Professional certifications and achievements demonstrating expertise across various technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center animate-slide-up animation-delay-400 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              <div className="text-2xl font-bold text-primary mb-1 hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Total Certificates
              </div>
            </Card>
            <Card className="p-4 text-center animate-slide-up animation-delay-500 hover:shadow-lg hover:shadow-chart-1/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              <div className="text-2xl font-bold text-chart-1 mb-1 hover:scale-110 transition-transform duration-300">
                6
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Cloud Platforms
              </div>
            </Card>
            <Card className="p-4 text-center animate-slide-up animation-delay-600 hover:shadow-lg hover:shadow-chart-2/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              <div className="text-2xl font-bold text-chart-2 mb-1 hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Programming
              </div>
            </Card>
            <Card className="p-4 text-center animate-slide-up animation-delay-700 hover:shadow-lg hover:shadow-chart-3/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              <div className="text-2xl font-bold text-chart-3 mb-1 hover:scale-110 transition-transform duration-300">
                5
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Specializations
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-2 rounded-lg bg-${cert.color}/10 group-hover:bg-${cert.color}/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Award className={`h-6 w-6 text-${cert.color} group-hover:animate-pulse`} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    {cert.category}
                  </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-balance group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium mb-2 group-hover:text-primary/80 transition-colors duration-300">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground mb-4 text-pretty group-hover:text-foreground transition-colors duration-300">
                  {cert.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <Calendar className="h-4 w-4 mr-2 group-hover:text-primary transition-colors duration-300" />
                    Issued: {cert.date}
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Verify
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-6 animate-slide-up animation-delay-1400 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Additional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 hover:bg-muted/30 p-4 rounded-lg transition-all duration-300">
                <h3 className="font-semibold hover:text-primary transition-colors duration-300">
                  Programming & Development
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • JavaScript Algorithms and Data Structures (freeCodeCamp)
                  </li>
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • Full Stack Web Development (The Odin Project)
                  </li>
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • Advanced React Patterns (Epic React)
                  </li>
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • Node.js Application Development (IBM)
                  </li>
                </ul>
              </div>
              <div className="space-y-2 hover:bg-muted/30 p-4 rounded-lg transition-all duration-300">
                <h3 className="font-semibold hover:text-primary transition-colors duration-300">Data Science & AI</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • Deep Learning Specialization (Coursera)
                  </li>
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • Data Science Professional Certificate (IBM)
                  </li>
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • TensorFlow Developer Certificate (Google)
                  </li>
                  <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300">
                    • Python for Data Science (DataCamp)
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
