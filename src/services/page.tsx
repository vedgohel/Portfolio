import { Navbar } from "@/components/navbar"

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="space-y-8">
          {[
            { title: "Web Development", description: "Custom web applications built with modern technologies" },
            { title: "Mobile Development", description: "Native and cross-platform mobile applications" },
            { title: "UI/UX Design", description: "Beautiful and intuitive user interface designs" },
            { title: "Consulting", description: "Technical consulting and architecture planning" },
          ].map((service, index) => (
            <div key={index} className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
