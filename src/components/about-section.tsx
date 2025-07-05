import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, GraduationCap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "BE Computer Science student with Diploma background",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "HTML, CSS, JavaScript fundamentals",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "App development and UI design",
    },
    {
      icon: Palette,
      title: "Problem Solving",
      description: "Strong analytical and technical skills",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Computer Science Student & Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a dedicated Computer Science student currently pursuing BE at Government Engineering College, Patan.
            With a strong foundation from my Diploma and practical industry experience, I&apos;m passionate about creating
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Educational Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in computer science began with a Diploma in Computer Engineering from Shri K.J Polytechnic,
                Bharuch (2021–2024), where I built a solid foundation in programming fundamentals, computer systems, and
                software development principles.
              </p>
              <p>
                Currently, I&apos;m in my second year of Bachelor of Engineering in Computer Science at Government
                Engineering College, Patan, where I&apos;m diving deeper into advanced topics like data structures,
                algorithms, software engineering, and modern development frameworks.
              </p>
              <p>
                My academic journey has been complemented by practical industry experience through internships at Nexis
                Infotech, where I gained hands-on experience in both web and mobile app development. This combination of
                theoretical knowledge and practical skills drives my passion for creating innovative solutions.
              </p>
              <p>
                I&apos;m passionate about creating beautiful and functional user interfaces.
              </p>
              <p>
                It&apos;s not just about code — it&apos;s about the experience.
              </p>
              <p>
                Let&apos;s build something amazing together!
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably exploring new design trends.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
