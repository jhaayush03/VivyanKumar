import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, Users, Award, Eye } from "lucide-react"

export default function DocumentaryPage() {
  const documentaries = [
    {
      title: "The Future of AI in Healthcare",
      description:
        "An in-depth exploration of how artificial intelligence is revolutionizing healthcare, from diagnosis to treatment. Features interviews with leading researchers and real-world case studies.",
      duration: "45 minutes",
      year: "2024",
      role: "Producer & Director",
      category: "Technology",
      status: "Released",
      views: "125K",
      awards: ["Best Tech Documentary - University Film Festival 2024"],
      collaborators: ["Dr. Sarah Chen", "Prof. Michael Roberts", "AI Research Lab"],
      topics: ["Machine Learning", "Medical Diagnosis", "Healthcare Innovation", "Ethics in AI"],
      thumbnail: "/documentary-ai-healthcare.jpg",
    },
    {
      title: "Blockchain Revolution: Beyond Cryptocurrency",
      description:
        "A comprehensive look at blockchain technology applications beyond digital currency, exploring its potential in supply chain, voting systems, and digital identity management.",
      duration: "38 minutes",
      year: "2023",
      role: "Co-Producer & Research Lead",
      category: "Technology",
      status: "Released",
      views: "89K",
      awards: ["Audience Choice Award - Tech Film Festival 2023"],
      collaborators: ["Blockchain Consortium", "Tech Industry Leaders"],
      topics: ["Blockchain Technology", "Decentralization", "Digital Identity", "Supply Chain"],
      thumbnail: "/documentary-blockchain.jpg",
    },
    {
      title: "Sustainable Tech: Green Computing Solutions",
      description:
        "Investigating how the technology industry is addressing environmental challenges through green computing, renewable energy in data centers, and sustainable software development practices.",
      duration: "42 minutes",
      year: "2023",
      role: "Director & Editor",
      category: "Environment & Technology",
      status: "Released",
      views: "67K",
      awards: ["Environmental Impact Award - Green Film Festival 2023"],
      collaborators: ["Environmental Tech Alliance", "Green Data Centers Inc."],
      topics: ["Green Computing", "Sustainable Technology", "Environmental Impact", "Renewable Energy"],
      thumbnail: "/documentary-green-tech.jpg",
    },
    {
      title: "The Digital Divide: Bridging Technology Gaps",
      description:
        "Examining the global digital divide and innovative solutions to bring technology access to underserved communities. Features grassroots initiatives and policy discussions.",
      duration: "50 minutes",
      year: "2022",
      role: "Producer & Cinematographer",
      category: "Social Impact",
      status: "Released",
      views: "156K",
      awards: ["Social Impact Documentary Award 2022", "Best Cinematography - Documentary Film Awards"],
      collaborators: ["Digital Equity Foundation", "Community Tech Centers"],
      topics: ["Digital Equity", "Technology Access", "Social Impact", "Community Development"],
      thumbnail: "/documentary-digital-divide.jpg",
    },
  ]

  const inProduction = [
    {
      title: "Quantum Computing: The Next Frontier",
      description:
        "Exploring the cutting-edge world of quantum computing and its potential to solve humanity's most complex problems.",
      expectedRelease: "Q2 2024",
      progress: 75,
      role: "Executive Producer",
      status: "Post-Production",
    },
    {
      title: "Cybersecurity in the Age of IoT",
      description:
        "Investigating security challenges and solutions in our increasingly connected world of Internet of Things devices.",
      expectedRelease: "Q3 2024",
      progress: 45,
      role: "Director & Producer",
      status: "Production",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentary Films</h1>
            <p className="text-lg text-muted-foreground">
              Exploring technology's impact on society through compelling visual storytelling
            </p>
          </div>

          {/* Documentary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Films Produced</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-1 mb-1">437K</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-2 mb-1">8</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-3 mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Collaborators</div>
            </Card>
          </div>

          {/* Released Documentaries */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Released Films</h2>
            <div className="space-y-8">
              {documentaries.map((doc, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Thumbnail */}
                    <div className="lg:col-span-1">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-chart-1/10 relative overflow-hidden group">
                        <img
                          src={`/documentary-thumbnail.png?height=200&width=300&query=${doc.title} documentary thumbnail`}
                          alt={doc.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="lg" className="rounded-full">
                            <Play className="h-6 w-6 mr-2" />
                            Watch Trailer
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-balance">{doc.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {doc.year}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {doc.duration}
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {doc.views} views
                            </div>
                          </div>
                          <p className="text-primary font-medium mb-2">Role: {doc.role}</p>
                        </div>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">{doc.status}</Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty">{doc.description}</p>

                      {/* Topics */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {doc.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Awards */}
                      {doc.awards.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-1 text-yellow-500" />
                            Awards:
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {doc.awards.map((award, awardIndex) => (
                              <li key={awardIndex}>• {award}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Collaborators */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          Key Collaborators:
                        </h4>
                        <p className="text-sm text-muted-foreground">{doc.collaborators.join(", ")}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Film
                        </Button>
                        <Button variant="outline" size="sm">
                          View Trailer
                        </Button>
                        <Button variant="outline" size="sm">
                          Behind the Scenes
                        </Button>
                        <Button variant="outline" size="sm">
                          Press Kit
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* In Production */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">In Production</h2>
            <div className="space-y-6">
              {inProduction.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-balance">{project.title}</h3>
                      <p className="text-primary font-medium mb-2">Role: {project.role}</p>
                      <p className="text-muted-foreground text-pretty">{project.description}</p>
                    </div>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Expected Release:</span>
                      <span className="font-medium">{project.expectedRelease}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Progress:</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Production Philosophy */}
          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">Production Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-primary">Storytelling Approach</h3>
                <p className="text-sm text-muted-foreground">
                  I believe in making complex technical topics accessible through compelling human stories. Each
                  documentary combines rigorous research with engaging narrative to educate and inspire audiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-chart-1">Technical Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Using cutting-edge production techniques and equipment to ensure the highest quality output. Every
                  film is crafted with attention to visual aesthetics, sound design, and post-production excellence.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
