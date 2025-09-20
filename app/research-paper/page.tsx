import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Users, ExternalLink, Download, Eye } from "lucide-react"

export default function ResearchPaperPage() {
  const papers = [
    {
      title: "Machine Learning Approaches for Automated Code Review: A Comprehensive Study",
      authors: ["Your Name", "Dr. Jane Smith", "Prof. John Doe"],
      journal: "International Conference on Software Engineering (ICSE)",
      year: "2024",
      status: "Published",
      abstract:
        "This paper presents a comprehensive study on machine learning approaches for automated code review systems. We propose a novel neural network architecture that achieves 89% accuracy in detecting code issues and suggesting improvements. Our approach combines static analysis with deep learning techniques to provide more accurate and contextual code reviews.",
      keywords: ["Machine Learning", "Code Review", "Software Engineering", "Neural Networks"],
      citations: 15,
      downloads: 342,
      category: "Software Engineering",
      doi: "10.1109/ICSE.2024.123456",
    },
    {
      title: "Blockchain-Based Identity Management System for IoT Devices",
      authors: ["Your Name", "Dr. Sarah Wilson"],
      journal: "IEEE Transactions on Internet of Things",
      year: "2023",
      status: "Published",
      abstract:
        "We propose a novel blockchain-based identity management system specifically designed for IoT devices. The system addresses scalability and security challenges in IoT networks while maintaining low computational overhead. Our experimental results show a 40% improvement in authentication speed compared to existing solutions.",
      keywords: ["Blockchain", "IoT", "Identity Management", "Security"],
      citations: 28,
      downloads: 567,
      category: "Cybersecurity",
      doi: "10.1109/TIOT.2023.789012",
    },
    {
      title: "Deep Learning for Natural Language Processing in Healthcare Applications",
      authors: ["Your Name", "Dr. Michael Brown", "Dr. Lisa Chen"],
      journal: "Journal of Medical Internet Research",
      year: "2023",
      status: "Published",
      abstract:
        "This research explores the application of deep learning techniques in healthcare NLP tasks. We developed a transformer-based model that achieves state-of-the-art performance in medical text classification and named entity recognition. The model demonstrates 94% accuracy in identifying medical conditions from clinical notes.",
      keywords: ["Deep Learning", "NLP", "Healthcare", "Transformers"],
      citations: 42,
      downloads: 789,
      category: "Healthcare AI",
      doi: "10.2196/jmir.2023.345678",
    },
    {
      title: "Quantum Computing Applications in Cryptographic Systems",
      authors: ["Your Name", "Prof. David Lee"],
      journal: "Quantum Information Processing",
      year: "2022",
      status: "Published",
      abstract:
        "An investigation into the potential applications of quantum computing in modern cryptographic systems. We analyze the implications of quantum algorithms on current encryption methods and propose quantum-resistant cryptographic protocols. Our findings suggest new approaches to secure communication in the quantum era.",
      keywords: ["Quantum Computing", "Cryptography", "Security", "Quantum Algorithms"],
      citations: 35,
      downloads: 456,
      category: "Quantum Computing",
      doi: "10.1007/s11128-022-901234",
    },
  ]

  const inProgress = [
    {
      title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
      expectedJournal: "Nature Machine Intelligence",
      status: "Under Review",
      progress: 85,
      description:
        "Developing federated learning frameworks that enable collaborative healthcare analytics while preserving patient privacy.",
    },
    {
      title: "Edge Computing Optimization for Real-time AI Applications",
      expectedJournal: "ACM Computing Surveys",
      status: "In Preparation",
      progress: 60,
      description:
        "Investigating optimization techniques for deploying AI models on edge devices with resource constraints.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Research Papers</h1>
            <p className="text-lg text-muted-foreground">Published research contributions and ongoing academic work</p>
          </div>

          {/* Research Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Published Papers</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-1 mb-1">120+</div>
              <div className="text-sm text-muted-foreground">Total Citations</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-2 mb-1">2.1k</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-3 mb-1">4</div>
              <div className="text-sm text-muted-foreground">Research Areas</div>
            </Card>
          </div>

          {/* Published Papers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Published Papers</h2>
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-balance">{paper.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {paper.authors.join(", ")}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {paper.year}
                          </div>
                        </div>
                        <p className="text-primary font-medium mb-2">{paper.journal}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">{paper.status}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty">{paper.abstract}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium mb-2">Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Citations:</span>
                        <span className="font-medium">{paper.citations}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Downloads:</span>
                        <span className="font-medium">{paper.downloads}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>DOI:</span>
                        <span className="font-mono text-xs">{paper.doi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Abstract
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Publisher Link
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Work in Progress */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Work in Progress</h2>
            <div className="space-y-6">
              {inProgress.map((work, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-balance">{work.title}</h3>
                    <Badge variant="secondary">{work.status}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">Target Journal: {work.expectedJournal}</p>
                  <p className="text-muted-foreground mb-4 text-pretty">{work.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress:</span>
                      <span className="font-medium">{work.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${work.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <Card className="mt-12 p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Machine Learning & AI</h3>
                <p className="text-sm text-muted-foreground">
                  Deep learning, neural networks, and AI applications in software engineering
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-chart-1">Cybersecurity</h3>
                <p className="text-sm text-muted-foreground">
                  Blockchain technology, cryptography, and secure systems design
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-chart-2">Healthcare Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Medical informatics, healthcare AI, and privacy-preserving analytics
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
