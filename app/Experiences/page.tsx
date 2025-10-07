"use client";

import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  Users,
  Lightbulb,
  TrendingUp,
  Eye,
  Download,
} from "lucide-react";

export default function ExperiencesPage() {
  const internships = [
    {
      company: "Pickl.AI by TransOrg Analytics",
      location: "",
      duration: "Summer 2025",
      type: "Full-time Internship",
      description:
        "Mastered the principles of data science and machine learning, culminating in a project analyzing GPA predictors.",
      responsibilities: [
        "Completed training in data science, AI, and machine learning",
        "Analyzed GPA predictors using ML models",
      ],
      certificateUrl: "/internship_c1.jpg",
    },
  ];

  const leadership = [
    {
      organization: "DPS Tech Club - SYNTAX",
      role: "Vice Head",
      location: "Hackathon",
      duration: "2024-2025",
      type: "Leadership Position",
      responsibilities: [
        "I helped organize the intra-school and inter-school SYNTAX competitions relating to Hackathon, the topic for which was to code a bot to play the board game Othello",
      ],
      certificateUrl: "",
    },
    {
      organization: "DPS Tech Club - SYNTAX",
      role: "Head",
      location: "Hackathon",
      duration: "2025-Present",
      type: "Leadership Position",
      responsibilities: [
        "I designed, organized, and managed the inter-school SYNTAX day competition for Hackathon, pioneering the school's first ever Game Jam as the topic for the year, with submissions from 10 different schools and a total of 38 students.",
      ],
      certificateUrl: "",
    },
    {
      organization: "DPS Science Club - Domus Scientia",
      role: "Core Team Member",
      location: "Domus Scientia",
      duration: "2025 - Present",
      type: "Leadership Position",
      responsibilities: [
        "One of the leading members of Domus Scientia, I collaborated with the rest of the team to organize an intra-school scientific quiz for all science students from grades 6 to 11, as well as an intra-school scientific debate competition including all 6 houses with the entire school as an audience.",
      ],
      certificateUrl: "",
    },
  ];

  const volunteering = [
    {
      organization: "Indian Classical Music",
      role: "Flute",
      location: "Prayag Sangeet Samiti",
      duration: "2018-2023",
      responsibilities: [
        "Third Year Diploma with First Division Distinction across all years, Prayag Sangeet Samiti (2018–2023) ",
      ],
      certificateUrl: "/Flute_Certificates.pdf",
    },
    {
      organization: "Think Summit- Confabulation",
      role: "Public Speaking & Competitions",
      location: "2nd Place",
      duration: "2024",
      responsibilities: [
        "Placed 2nd among 16 schools in Think Summit: a group discussion/debate competition, showcasing knowledge of current affairs and strong research ability",
      ],
      certificateUrl: "",
    },
    {
      organization: "Schoolathon on Sustainability",
      role: "Public Speaking & Competitions",
      location: "Finalist",
      duration: "2023",
      responsibilities: [
        "Made it to the final round (one of 12 schools from 150 participating) in the Schoolathon on Sustainability; a pitch competition about developing business solutions focusing on the 17 SDGs of the United Nations",
      ],
      certificateUrl: "",
    },
    {
      organization: "Chemical Convergence, DPS Dwarka Annual Fest",
      role: "Quiz-Style Event",
      location: "Participant",
      duration: "2023",
      responsibilities: [
        "Participant in Chemical Convergence, a chemistry quiz-style event. ",
      ],
      certificateUrl: "",
    },
    {
      organization:
        "Real Estate Warriors Competition, DPSI Commerce Collective",
      role: "Intra School Competition",
      location: "1st Place",
      duration: "2023",
      responsibilities: [
        " 1st place in the intra-school Real Estate Warriors Competition hosted by Commerce Collective, an economics based investment competition. ",
      ],
      certificateUrl: "",
    },
    {
      organization: "COVID-19 Vaccination Camp, Sarvodaya Bal Vidyalaya",
      role: "Volunteering",
      location: "Volunteer",
      duration: "2023",
      responsibilities: [
        " I worked in a COVID vaccination camp for six days on a voluntary basis, educating a total of 120 patients on the COVID safety protocols to be followed, guiding patients to the respective rooms, and helping alleviate their stress and anxieties surrounding vaccination.",
      ],
      certificateUrl: "",
    },
    {
      organization: "Social Venture",
      role: "Youtube Creator",
      location: "Youtube",
      duration: "",
      responsibilities: [
        "I started a YouTube channel about teaching mathematics (and later other subjects) in a fun and interesting way, using examples from video games that many children will find relatable.",
        "Currently, 34 subscribers, 1 video and 596 views.",
      ],
      certificateUrl: "https://www.youtube.com/@FunwithMathsAndStudying",
    },
  ];

  const handleViewCertificate = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDownloadCertificate = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Experiences</h1>
            <p className="text-lg text-muted-foreground">
              Professional journey through internships, leadership roles, and
              community contributions
            </p>
          </div>

          {/* Internships Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Internships</h2>
            </div>
            <div className="space-y-6">
              {internships.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.location && (
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </Badge>
                        )}
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 text-pretty">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.certificateUrl && (
                        <div className="flex gap-2 mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleViewCertificate(exp.certificateUrl)
                            }
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Certificate
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleDownloadCertificate(exp.certificateUrl)
                            }
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-chart-1 mr-3" />
              <h2 className="text-3xl font-bold">
                Leadership & Student Organizations
              </h2>
            </div>
            <div className="space-y-6">
              {leadership.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-chart-1/10 rounded-lg">
                      <Users className="h-6 w-6 text-chart-1" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <p className="text-chart-1 font-medium mb-2">
                        {exp.organization}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </Badge>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-chart-1 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.certificateUrl && (
                        <div className="flex gap-2 mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleViewCertificate(exp.certificateUrl)
                            }
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Certificate
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleDownloadCertificate(exp.certificateUrl)
                            }
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteering & Community Service Section */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <TrendingUp className="h-8 w-8 text-chart-2 mr-3" />
              <h2 className="text-3xl font-bold">Extracurricular Activities</h2>
            </div>
            <div className="space-y-6">
              {volunteering.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-chart-2/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-chart-2" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <p className="text-chart-2 font-medium mb-2">
                        {exp.organization}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-chart-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.certificateUrl && (
                        <div className="flex gap-2 mt-4">
                          {exp.organization === "Social Venture" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleViewCertificate(exp.certificateUrl)
                              }
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View YouTube Channel
                            </Button>
                          ) : (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  handleViewCertificate(exp.certificateUrl)
                                }
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Certificate
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  handleDownloadCertificate(exp.certificateUrl)
                                }
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or learning more about my experiences?
              Feel free to reach out!
            </p>
            <Button size="lg" asChild>
              <a href="mailto:vivyankumar2008@gmail.com">Get in Touch</a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
