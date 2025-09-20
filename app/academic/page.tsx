import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Calendar, Award, BookOpen, Users, Trophy } from "lucide-react"

export default function AcademicPage() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      duration: "2020 - 2024",
      gpa: "3.8/4.0",
      honors: "Magna Cum Laude",
      description:
        "Specialized in software engineering, algorithms, and machine learning with focus on practical applications.",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
      ],
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "High School Name",
      duration: "2018 - 2020",
      gpa: "95.2%",
      honors: "Top 5% of Class",
      description:
        "Strong foundation in mathematics, physics, and computer science with excellent academic performance.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
    },
  ]

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for 6 consecutive semesters",
      year: "2020-2024",
      icon: Trophy,
    },
    {
      title: "Academic Excellence Award",
      description: "Received university-wide academic excellence award for outstanding performance",
      year: "2023",
      icon: Award,
    },
    {
      title: "Research Publication",
      description: "Published research paper in international conference proceedings",
      year: "2023",
      icon: BookOpen,
    },
    {
      title: "Student Leadership",
      description: "Served as Computer Science Student Association President",
      year: "2022-2023",
      icon: Users,
    },
  ]

  const projects = [
    {
      title: "Final Year Project: AI-Powered Code Review System",
      description:
        "Developed an intelligent system for automated code review using machine learning algorithms. Achieved 89% accuracy in detecting code issues and suggesting improvements.",
      grade: "A+",
      technologies: ["Python", "TensorFlow", "Natural Language Processing", "Git API"],
      supervisor: "Dr. Jane Smith",
    },
    {
      title: "Database Management System Project",
      description:
        "Designed and implemented a complete database management system for a library management application with advanced querying capabilities.",
      grade: "A",
      technologies: ["Java", "MySQL", "JDBC", "Swing GUI"],
      supervisor: "Prof. John Doe",
    },
    {
      title: "Web Development Capstone",
      description:
        "Built a full-stack e-commerce platform with modern web technologies, including user authentication, payment integration, and admin dashboard.",
      grade: "A+",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      supervisor: "Dr. Sarah Wilson",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Academic Background</h1>
            <p className="text-lg text-muted-foreground">
              Educational journey, achievements, and academic contributions
            </p>
          </div>

          {/* Academic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">3.8</div>
              <div className="text-sm text-muted-foreground">Overall GPA</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-1 mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Courses Completed</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-2 mb-1">5</div>
              <div className="text-sm text-muted-foreground">Academic Awards</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-chart-3 mb-1">3</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </Card>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                        <Badge variant="outline">{edu.honors}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 text-pretty">{edu.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Key Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Academic Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-chart-1/10 rounded-lg">
                      <achievement.icon className="h-5 w-5 text-chart-1" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Major Academic Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <h3 className="text-xl font-semibold mb-2 lg:mb-0 text-balance">{project.title}</h3>
                    <Badge className="self-start">Grade: {project.grade}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Project Supervisor:</h4>
                      <p className="text-sm text-muted-foreground">{project.supervisor}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 text-center bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Academic Transcripts</h2>
            <p className="text-muted-foreground mb-6">
              Official transcripts and detailed academic records are available upon request
            </p>
            <Button size="lg">Request Official Transcripts</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
