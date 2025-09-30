import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Download } from "lucide-react";

export default function CertificatePage() {
  const certificates = [
    {
      title:
        "CIMC Waterloo Canadian Intermediate Mathematics Contest Distinction Certificate",
      image: "./1.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "CIMC Waterloo Canadian Intermediate Mathematics Contest Distinction Certificate",
      image: "./2.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Scholar Badge Class XI",
      image: "./3.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Merit Certification Class IX",
      image: "./4.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "1st place in Real Estate Warriors Competition - DPSI Class X",
      image: "./5.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Mathsoc Delhi 2020",
      image: "./6.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Canadian International Mathematics Contest",
      image: "./7.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Fermat Contest 2025",
      image: "./8.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Physics 2 Score",
      image: "./9.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Cayley School Contest",
      image: "./10.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF International English Olympiad",
      image: "./11.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Science Olympiad",
      image: "./12.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Scholar Badge class IX",
      image: "./13.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Merit Certification in Mathematics class IX",
      image: "./14.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Syntax Hackathon 2024",
      image: "./15.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti - Junior Diploma Examination",
      image: "./16.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Humanity Work - Covid-19",
      image: "./17.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SAT Score",
      image: "./18.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Schoolathon On Sustainability 2023",
      image: "./19.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Cayley Contest - Mathematics and Computing",
      image: "./20.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Avogadro Result",
      image: "./21.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Canadian Senior Mathematics Contest Medal",
      image: "./22.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "CEMC Waterloo Canadian Senior Mathematics Competition Honour Roll",
      image: "./23.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF International English Olympiad",
      image: "./24.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad",
      image: "./25.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Merit Certification in Additional Mathematics Class IX",
      image: "./26.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Merit Certification in Chemistry Class X",
      image: "./27.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Marksheet",
      image: "./28.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Covid Vaccination Camp Volunteering Certificate",
      image: "./29.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "PB Smashathon Delhi 2019",
      image: "./30.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Chemistry Score",
      image: "./31.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "French Diploma DELF A1",
      image: "./32.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Physics C : Mechanics",
      image: "./33.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Canadian Senior Mathematics Contest",
      image: "./34.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Fermat School Champion Medal",
      image: "./35.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF International English Olympiad Class IX",
      image: "./36.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF International Mathematics Olympiad Class IX",
      image: "./37.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Merit Certificate in Physics Class IX",
      image: "./38.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Marksheet 2022-23",
      image: "./39.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Internship in Pickl.AI",
      image: "./40.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Fermat Contest Distinction Certificate",
      image: "./41.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Scholar Badge Class X",
      image: "./42.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Syntax Hackathon Head",
      image: "./43.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPS Merit Certificate in Chemistry",
      image: "./44.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Cubing PB Smashathon PB Certificate",
      image: "./45.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Toefl Score",
      image: "./46.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Pascal Contest Distinction Certificate",
      image: "./47.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Galois Contest School Champion Medal",
      image: "./48.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Galois Contest Honour Roll",
      image: "./49.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad",
      image: "./50.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Merit Cetificate in French as a secondary langage Class X",
      image: "./51.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Marksheet 2019-2020",
      image: "./52.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Physics 1 Score",
      image: "./53.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF International English Olympiad Class X",
      image: "./54.jpg",
      issuer: "",
      date: "",
      category: "",
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
            {certificates.slice(1).map((cert, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full bg-gray-50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.issuer}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
