"use client";

import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Eye, X } from "lucide-react";
import { useState } from "react";

export default function CertificatePage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const certificates = [
    {
      title: "AP Calculus BC Score",
      image: "./AP_Calculus_BC_Score.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Chemistry Score",
      image: "./AP_Chemistry_Score.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Computer Science A score",
      image: "./AP_Computer_Science_A_Score.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Physics 1 Score",
      image: "./AP_Physics_1_Score.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Physics 2 Score",
      image: "./AP_Physics_2_Score.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "AP Physics C Mechanics Score",
      image: "./AP_Physics_C_Mechanics_Score.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Cayley Contest Distribution Certificate",
      image: "./CEMC_Cayley_Contest_Distinction_Certificate.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Galois Contest Distinction Certificate",
      image: "./CEMC_Galois_Contest_Distinction_Certificate.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "CEMC Waterloo Canadian Intermediate Mathematics Contest Distinction Certificate",
      image:
        "./CEMC_Waterloo_Canadian_Intermediate_Mathematics_Contest_Distinction_Certificate.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "CEMC  Waterloo Canadian Senior Mathematics Contest Distinction Certificate",
      image:
        "./CEMC_Waterloo_Canadian_Senior_Mathematics_Contest_Distinction_Certificate.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Fermat Contest Distinction Certificate",
      image: "./CEMC_Waterloo_Fermat_Contest_Distinction_Certificate.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "CEMC Waterloo Pascal Contest Distinction Certificate",
      image: "./CEMC_Waterloo_Pascal_Contest_Distinction_Certificate.jpg",
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
      title: "DPS School Scholar Badge Class IX",
      image: "./DPS_School_Scholar_Badge_Class_IX.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPSI Scholar Badge Class X",
      image: "./DPSI_Scholar_Badge_Class_X.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPS School Merit Certificate Additional Mathematics",
      image: "./DPSI_School_Merit_Certificate_Additional_Mathematics.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPS School Merit Certificate for Additional Mathematics",
      image: "./DPSI_School_Merit_Certificate_for_Additional_Mathematics.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPS School Merit Certificate for Chemistry",
      image: "./DPSI_School_Merit_Certificate_for_Chemistry.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPS School Merit Certificate for French",
      image: "./DPSI_School_Merit_Certificate_for_French.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "DPS School Merit Certificate for Mathematics",
      image: "./DPSI_School_Merit_Certificate_for_Mathematics.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "French Diploma DELF A1",
      image: "./French_Diploma_DELF_A1.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Green Olympiad Certificate of Merit",
      image: "./Green_Olympiad_Certificate_of_Merit.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad",
      image: "./image_38.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Marksheet",
      image: "./image_39.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Immerse Essay Competition",
      image: "./Immerse_Essay_Competition.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Examination Marksheet 2022-23",
      image: "./Prayag_Sangeet_Samiti_Examination_Marksheet_2022_2023.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Flute Examination Marksheet 2018-2019",
      image:
        "./Prayag_Sangeet_Samiti_Flute_Examination_Marksheet_2018_2019.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Flute Examination Marksheet 2019-2020",
      image:
        "./Prayag_Sangeet_Samiti_Flute_Examination_Marksheet_2019_2020.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Prayag Sangeet Samiti Flute Junior Diploma Examination Marksheet",
      image:
        "./Prayag_Sangeet_Samiti_Flute_Junior_Diploma_Examination_Marksheet.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Runner Up at DPS RK Puram Confabulation Event",
      image: "./Runner_Up_at_DPS_RK_Puram_Confabulation_Event.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "School Scholar Badge Class XI",
      image: "./School_Scholar_Badge_Class_XI.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International English Olympiad Certificate of Distinction 2022",
      image:
        "./SOF_International_English_Olympiad_Certificate_of_Distinction_2022.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International English Olympiad Certificate of Distinction 2023",
      image:
        "./SOF_International_English_Olympiad_Certificate_of_Distinction_2023.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International Mathematics Olympiad Certificate of Participation 2022",
      image:
        "./SOF_International_Mathematics_Olympiad_Certificate_of_Participation_2022.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title:
        "SOF International Mathematics Olympiad Partcipation Certificate 2023",
      image:
        "./SOF_International_Mathematics_Olympiad_Participation_Certificate_2023.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad Certificate of Distinction 2022",
      image: "SOF_National_Cyber_Olympiad_Certificate_of_Distinction_2022.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Cyber Olympiad Certificate of Zonal Excellence 2022",
      image:
        "./SOF_National_Cyber_Olympiad_Certificate_of_Zonal_Excellence_2022.jpg",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "SOF National Science Olympiad Certificate of Participation 2022",
      image:
        "./SOF_National_Science_Olympiad_Certificate_of_Participation_2022.png",
      issuer: "",
      date: "",
      category: "",
    },
    {
      title: "Winning the DPS Real Estate Warriors 2024",
      image: "./Winning_the_DPS_Real_Estate_Warriors_2024.jpg",
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
            {certificates.map((cert, idx) => (
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
