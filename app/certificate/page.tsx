"use client";

import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Eye, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CertificatePage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const certificates = [
    {
      title: "AP Exams Scholar with Distinction",
      image: "./c1_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Pascal Contest Distinction Certificate ",
      image: "./c2_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "CEMC Waterloo Canadian Intermediate Mathematics Contest Distinction Certificate ",
      image: "./c3_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "CEMC Waterloo Canadian Senior Mathematics Contest Distinction Certificate",
      image: "./c4_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Galois Contest Distinction Certificate",
      image: "./c5_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Cayley Contest Distinction Certificate",
      image: "./c6_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Fermat Contest Distinction Certificate",
      image: "./c7_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International English Olympiad Certificate of Distinction 2023",
      image: "./c8_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International English Olympiad Certificate of Distinction 2022",
      image: "./c9_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad Certificate of Zonal Excellence 2022",
      image: "./c10_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad Certificate of Distinction 2022 ",
      image: "./c11_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Science Olympiad Certificate of Participation 2022 ",
      image: "./c12_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International Mathematics Olympiad Certificate of Participation 2022 ",
      image: "./c_13.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International Mathematics Olympiad Participation Certificate 2023 ",
      image: "./c14_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Green Olympiad Certificate of Merit ",
      image: "./c15_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "French Diploma DELF A1",
      image: "./c16_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Immerse Essay Competition ",
      image: "./c17_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Runner Up at DPS RK Puram Confabulation Event ",
      image: "./c18_.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Winning the DPS Real Estate Warriors 2024 ",
      image: "./c19_.png",
      issuer: "",
      date: "",
      category: "",
    },
  ];

  // Display all 19 certificates
  const displayedCertificates = certificates;

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
            {displayedCertificates.map((cert, idx) => (
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
                    {cert.category && (
                      <Badge variant="secondary" className="text-xs">
                        {cert.category}
                      </Badge>
                    )}
                    {cert.date && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cert.date}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  {cert.issuer && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.issuer}
                    </p>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setSelectedCertificate(cert.image)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Certificates Button - Opens PDF with all certificates */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("./all-certificates.pdf", "_blank")}
            >
              <Eye className="h-5 w-5 mr-2" />
              PFA a document containing all the certificates
            </Button>
          </div>
        </div>
      </div>

      {/* Certificate Modal - Scrollable */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center overflow-y-auto p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative my-8 w-full max-w-4xl">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="sticky top-4 left-full ml-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mt-4">
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-auto bg-white rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
