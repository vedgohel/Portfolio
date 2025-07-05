"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Github, Globe } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "/images/projects/portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://your-portfolio.vercel.app",
      githubUrl: "https://github.com/vedgohel/portfolio",
      note: "This project was built using Next.js, and it&apos;s fully responsive.",
    },
    {
      title: "WanderLust - Travel App",
      description: "A travel platform where users can explore destinations, view listings, and make bookings. Integrated with MongoDB and Express.",
      image: "/images/projects/wanderlust.png",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      liveUrl: "https://wanderlust-demo.vercel.app",
      githubUrl: "https://github.com/vedgohel/WonderLust",
      note: "This project was built using Node.js and Express, and it&apos;s mobile-friendly.",
    },
    {
      title: "Stock Dashboard Clone",
      description: "A Zerodha-like stock dashboard with features like buy/sell modals, real-time holdings, and transaction tracking using MongoDB Atlas.",
      image: "/images/projects/stock-dashboard.png",
      technologies: ["React", "Tailwind", "Express", "MongoDB"],
      liveUrl: "https://stock-dash.vercel.app",
      githubUrl: "https://github.com/vedgohel/zerodha-dashboard",
      note: "This project features real-time UI updates and charts powered by MongoDB.",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of the projects I&apos;ve worked on — from personal websites to full-stack applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.note && (
                  <p
                    className="text-sm text-muted-foreground mt-2"
                    dangerouslySetInnerHTML={{ __html: project.note }}
                  />
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
