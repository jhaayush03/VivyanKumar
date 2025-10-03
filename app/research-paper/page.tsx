import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  Users,
  ExternalLink,
  Download,
  Eye,
} from "lucide-react";

export default function ResearchPaperPage() {
  const papers = [
    {
      title:
        "Imitation Learning In Games: Teaching AI Through Mimicking Expert Human Players.",
      authors: ["Vivyan Kumar"],
      journal: "Lex Localis ISSN:1581-5374E-ISSN:1855-363X",
      //year: "2024",
      status: "",
      abstract:
        "Under the guidance of Mr. Vishal Gupta, I’ve written a research paper (accepted for publication in Lex Localis ISSN:1581-5374E-ISSN:1855-363X) on the topic Imitation Learning In Games: Teaching AI Through Mimicking Expert Human Players. In this paper, I researched methods of teaching AI human-like behaviours, with methods such as Behavioural Cloning, Inverse Reinforcement Learning and Generative Adversarial Imitation Learning. I looked at these methods under the lens of video games, writing about how these methods can be used to create more challenging AI bots for the player to play against, as well as improving NPC behaviour to increase immersion in the game’s fictional world.",
      //keywords: [
      //"Machine Learning",
      //"Code Review",
      //"Software Engineering",
      //"Neural Networks",
      //],
      //citations: 15,
      //downloads: 342,
      //category: "Software Engineering",
      //doi: "10.1109/ICSE.2024.123456",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Research Papers</h1>
            <p className="text-lg text-muted-foreground">
              Published research contributions and ongoing academic work
            </p>
          </div>

          {/* Published Papers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Published Papers</h2>
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-balance">
                          {paper.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {paper.authors.join(", ")}
                          </div>
                        </div>
                        <p className="text-primary font-medium mb-2">
                          {paper.journal}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                      {paper.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty">
                    {paper.abstract}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium mb-2"></h4>
                    </div>
                    <div className="space-y-2"></div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <a
                        href="./research_paper_vivyan_kumar.pdf"
                        download="Research_Paper_Vivayn_Kumar.pdf"
                      >
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
