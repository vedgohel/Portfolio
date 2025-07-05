import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, GraduationCap } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "App Development Intern",
      company: "Nexis Infotech",
      location: "Bharuch, Gujarat",
      period: "2023 (1.5 months)",
      description:
        "Focused on mobile application development, learning app development fundamentals and UI/UX design principles. Gained hands-on experience with splash screens, form handling, and mobile app architecture.",
      achievements: [
        "Developed splash screen implementations",
        "Created interactive forms and user interfaces",
        "Learned mobile app development lifecycle",
        "Worked on user experience optimization",
      ],
    },
    {
      title: "Full Stack Development Intern",
      company: "Nexis Infotech",
      location: "Bharuch, Gujarat",
      period: "2022 (15-20 days)",
      description:
        "Intensive learning program covering fundamental web development technologies. Built a strong foundation in frontend technologies and web development best practices.",
      achievements: [
        "Mastered HTML5 semantic markup",
        "Learned CSS3 styling and responsive design",
        "Gained proficiency in JavaScript fundamentals",
        "Built interactive web components",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering (BE) in Computer Science",
      school: "Government Engineering College, Patan",
      location: "Patan, Gujarat",
      period: "2024 - Present (2nd Year)",
      description:
        "Currently pursuing Bachelor of Engineering in Computer Science. Focusing on advanced programming concepts, data structures, algorithms, software engineering, and modern development frameworks.",
      status: "Current",
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "Shri K.J Polytechnic",
      location: "Bharuch, Gujarat",
      period: "2021 - 2024",
      description:
        "Completed Diploma in Computer Engineering with comprehensive study of programming fundamentals, computer systems, networking, and software development. Built strong foundation in technical skills.",
      status: "Completed",
    },
  ]

  const academicHighlights = [
    {
      title: "Current Academic Focus",
      items: [
        "Advanced Data Structures & Algorithms",
        "Software Engineering Principles",
        "Database Management Systems",
        "Computer Networks & Security",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Diploma Achievements",
      items: [
        "Strong foundation in programming",
        "Computer systems and architecture",
        "Web development fundamentals",
        "Technical project development",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Experience & Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Academic & Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining academic excellence with practical industry experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Internship Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Learning & Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className={edu.status === "Current" ? "border-primary/50 bg-primary/5" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{edu.school}</CardDescription>
                      </div>
                      {edu.status === "Current" && (
                        <Badge variant="default" className="ml-2">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Academic Highlights */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-8">Academic Highlights</h3>
              <div className="space-y-4">
                {academicHighlights.map((highlight, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {highlight.title}
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {highlight.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
