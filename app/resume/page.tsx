import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Resume</h1>
            <p className="text-lg text-muted-foreground mb-6 animate-slide-up animation-delay-200">
              Download my complete resume or view it online
            </p>
            <Button
              size="lg"
              className="group animate-slide-up animation-delay-400 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download PDF
            </Button>
          </div>

          <Card className="p-6 mb-8 animate-slide-up animation-delay-600 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 cursor-pointer">
                <MapPin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                <span className="text-sm">India</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Phone className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                <span className="text-sm">+91 8130516966</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                <span className="text-sm">3504vivyan@dpsi.ac.in.</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-8 animate-slide-up animation-delay-800 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              An A-Level student at DPS International, Saket, with top scores in
              Maths, Sciences, and Psychology. I’ve earned distinctions in
              global math competitions, excelled in standardized exams like SAT,
              AP, and TOEFL, and led tech and science clubs through hackathons
              and scientific debates. I play the Indian classical flute, teach
              STEM concepts on YouTube, and work with Python and machine
              learning tools. My journey blends academic achievement, research,
              leadership, and creativity.
            </p>
          </Card>

          <Card className="p-6 mb-8 animate-slide-up animation-delay-1000 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Academic Achievments
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-primary/5 hover:rounded-r-lg hover:py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors duration-300">
                    Standardized Testing
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                </div>
                <p className="text-primary font-medium mb-2">
                  SAT | TOEFL | AP Exams | AP Scholar with Distinction
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground transition-colors duration-300">
                    • SAT: 1570 - superscore, 730 English, 800 math
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • IELTS: 8 - 9 Listening, 8.5 Reading, 7.5 Speaking, 7
                    Writing
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • TOEFL: 115 - 29 Reading, 29 Listening, 29 Speaking, 28
                    Writing.
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • AP Exams: Calculus BC: 5 | Chemistry: 5 | Computer Science
                    A: 5 | Physics 1:5 | Physics 2:5 | Physics C- Mechanics: 4
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-chart-1 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-1/5 hover:rounded-r-lg hover:py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold hover:text-chart-1 transition-colors duration-300">
                    Mathematics & Science Competitions
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                </div>
                <p className="text-chart-1 font-medium mb-2">
                  University Of Waterloo Math Contest
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground transition-colors duration-300">
                    • Avogadro: Top 500 globally, 1st in school
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • Certificates of Distinction: Pascal 2023, Cayley, Galois,
                    Fermat, CIMC, CSMC
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • School Champion Medal - CIMC 2023, CSMC 2024, Galois 2024,
                    Cayley 2024, Fermat 2025
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • International Honour Roll for Waterloo Mathematics Exams:
                    CIMC 2023, CSMC 2024, Galois 2024, Fermat 2025
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-primary/5 hover:rounded-r-lg hover:py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors duration-300">
                    Science Olympiad Foundation - SOF
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                </div>
                <p className="text-primary font-medium mb-2"></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground transition-colors duration-300">
                    • IEO: Zonal Excellence - Zonal Rank 17 & Distinction
                    Certificates
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • NCO: Zonal Excellence - Zonal Rank 12 & Destinction
                    Certificates
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • NSO, IMO: Gold Medals of Excellence
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-chart-1 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-1/5 hover:rounded-r-lg hover:py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold hover:text-chart-1 transition-colors duration-300">
                    School Awards
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                </div>
                <p className="text-chart-1 font-medium mb-2"></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground transition-colors duration-300">
                    • Multiple Scholar Badges: 2022, 2023, 2024
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • Academics Proficiency Awards: Aditional Mathematics 2022,
                    Physics 2022-2023, Chemistry 2022-2023, French 2023
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-primary/5 hover:rounded-r-lg hover:py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors duration-300">
                    Other Recognitions
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                </div>
                <p className="text-primary font-medium mb-2"></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="hover:text-foreground transition-colors duration-300">
                    • Green Olympiad: Certificate of Merit
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • DELF A1 Diploma: French Language Certification
                  </li>
                  <li className="hover:text-foreground transition-colors duration-300">
                    • Immerse Essay Competition: 20% Scholarship
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-8 animate-slide-up animation-delay-1200 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-chart-2 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-2/5 hover:rounded-r-lg hover:py-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold hover:text-chart-2 transition-colors duration-300">
                    Delhi Public School International, Saket
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                </div>
                <p className="text-chart-2 font-medium mb-2">
                  Cambridge International Curriculum{" "}
                </p>
                <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  • <b>A levels (2025-present):</b>
                  <br></br> Mathematics, Further Mathematics, Physics,
                  Chemistry, Psychology, English (AS)
                </p>
                <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  • <b>AS Levels (2024-2025): 5A, 1B </b>
                  <br></br> Mathematics (84), Physics (86), Chemistry (83),
                  Economics (73), Psychology (87)
                </p>
                <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  • <b>IGSE (2022-2024): 6A*, 1A</b>
                  <br></br>
                  First Language English (85), Mathematics (95), Additional
                  Mathematics (99), Physics (94), Chemistry (96), Computer
                  Science (93), French (96)
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-8 animate-slide-up animation-delay-1400 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 hover:text-primary transition-colors duration-300">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "English - Fluent",
                    "Hindi - Fluent",
                    "French - Intermediate",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 hover:text-primary transition-colors duration-300">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Microsoft Office",
                    "Visual Studio Code",
                    "Video Editing Software",
                    "Proficient in Python",
                    "Basic Knowledge of Java",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 hover:text-primary transition-colors duration-300">
                  Other Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Speedcubing - Advanced",
                    "Swimming",
                    "Badminton",
                    "Computer Gaming",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-slide-up animation-delay-1600 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Leadership & Engagement
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-chart-3 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-3/5 hover:rounded-r-lg hover:py-2">
                <h3 className="text-lg font-semibold mb-2 hover:text-chart-3 transition-colors duration-300">
                  SYNTAX - DPSI Tech Club
                </h3>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>Vice Head, Hackathon (2024-2025):</b>
                  <br></br>I helped organize the intra-school and inter-school
                  SYNTAX competitions relating to Hackathon, the topic for which
                  was to code a bot to play the board game Othello.
                </p>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>Head, Hackathon (2025-Present):</b>
                  <br></br>I designed, organized, and managed the inter-school
                  SYNTAX day competition for Hackathon, pioneering the school's
                  first ever Game Jam as the topic for the year.
                </p>
              </div>

              <div className="border-l-2 border-chart-4 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-4/5 hover:rounded-r-lg hover:py-2">
                <h3 className="text-lg font-semibold mb-2 hover:text-chart-4 transition-colors duration-300">
                  Domus Scientia - DPSI Science Club
                </h3>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>Core Team Member(2025-Present):</b>
                  <br></br> One od the leading members of Domus Scientia, I
                  collaborated with the rest of the team to organize an
                  intra-school scientific quiz, as well as an intra-school
                  scientific debate competition.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-slide-up animation-delay-1600 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300">
              Extracurricular Activities
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-chart-3 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-3/5 hover:rounded-r-lg hover:py-2">
                <h3 className="text-lg font-semibold mb-2 hover:text-chart-3 transition-colors duration-300">
                  Indian Classical Music (Flute)
                </h3>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • Third Year Diploma with First Division Distinction Across
                  all years, Prayag Sangeet Samiti (2018-2023).
                </p>
              </div>

              <div className="border-l-2 border-chart-4 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-4/5 hover:rounded-r-lg hover:py-2">
                <h3 className="text-lg font-semibold mb-2 hover:text-chart-4 transition-colors duration-300">
                  Public Speaking & Competitions
                </h3>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>2nd Place:</b>
                  <br></br> Think Summit (Confabulation), 2024
                </p>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>Finalist:</b>
                  <br></br> Schoolathon on Sustainability 2023
                </p>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>Participant:</b>
                  <br></br>Chemical Convergence, DPS Dwarka Annual Fest 2023
                </p>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • <b>1st Place:</b>
                  <br></br> Real Estate Warriors Competition, DPSI Commerce
                  Collective 2023
                </p>
              </div>

              <div className="border-l-2 border-chart-4 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-4/5 hover:rounded-r-lg hover:py-2">
                <h3 className="text-lg font-semibold mb-2 hover:text-chart-4 transition-colors duration-300">
                  Volunteering
                </h3>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  •{" "}
                  <b>
                    Covid-19 Vaccination Camp, Sarvodaya Bal Vidyalaya (2021):
                  </b>
                  <br></br> I worked in a COVID vaccination camp for six days on
                  a voluntary basis, educated patients on the COVID safety
                  protocols to be followed, guided patients to the respective
                  rooms, and helped alleviate their stress and anxieties
                  surrounding vaccination.
                </p>
              </div>

              <div className="border-l-2 border-chart-4 pl-4 hover:border-l-4 transition-all duration-300 hover:pl-3 hover:bg-chart-4/5 hover:rounded-r-lg hover:py-2">
                <h3 className="text-lg font-semibold mb-2 hover:text-chart-4 transition-colors duration-300">
                  Internship - Pickl.AI By TransOrg Analytics (Summer 2025)
                  www.pickl.ai
                </h3>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • Completed training in data science, AI, and macjine learning
                </p>
                <p className="text-sm text-muted-foreground mb-2 hover:text-foreground transition-colors duration-300">
                  • Analyzed GPA predictors using ML models
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
