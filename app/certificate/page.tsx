import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Download } from "lucide-react";

export default function CertificatePage() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      image: "./certificate1.jpg",
      issuer: "Amazon Web Services",
      date: "2023",
      category: "Cloud Computing",
    },
    {
      title: "Google Cloud Professional Developer",
      image: "./certificate2.jpg",
      issuer: "Google Cloud",
      date: "2023",
      category: "Cloud Development",
    },
    {
      title: "Microsoft Azure Fundamentals",
      image: "./certificate3.jpg",
      issuer: "Microsoft",
      date: "2022",
      category: "Cloud Fundamentals",
    },
    {
      title: "Certified Kubernetes Administrator",
      image: "./certificate4.jpg",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      category: "Container Orchestration",
    },
    {
      title: "React Developer Certification",
      image: "./certificate5.jpg",
      issuer: "Meta",
      date: "2022",
      category: "Frontend Development",
    },
    {
      title: "Machine Learning Specialization",
      image: "./certificate6.jpg",
      issuer: "Stanford University (Coursera)",
      date: "2022",
      category: "Machine Learning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Certificates</h1>
            <p className="text-lg text-muted-foreground">
              Professional certifications and achievements demonstrating
              expertise across various technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full">
                <img
                  src={certificates[0].image}
                  alt={certificates[0].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {certificates[0].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {certificates[0].date}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[0].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificates[0].issuer}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full">
                <img
                  src={certificates[1].image}
                  alt={certificates[1].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {certificates[1].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {certificates[1].date}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[1].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificates[1].issuer}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full">
                <img
                  src={certificates[2].image}
                  alt={certificates[2].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {certificates[2].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {certificates[2].date}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[2].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificates[2].issuer}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full">
                <img
                  src={certificates[3].image}
                  alt={certificates[3].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {certificates[3].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {certificates[3].date}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[3].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificates[3].issuer}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full">
                <img
                  src={certificates[4].image}
                  alt={certificates[4].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {certificates[4].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {certificates[4].date}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[4].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificates[4].issuer}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="w-full">
                <img
                  src={certificates[5].image}
                  alt={certificates[5].title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {certificates[5].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {certificates[5].date}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[5].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificates[5].issuer}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
