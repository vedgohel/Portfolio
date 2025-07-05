"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ved Gohel
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about creating beautiful, functional, and user-centered digital experiences. I specialize in
              modern web technologies and love bringing ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/images/ved-profile.jpg"
                    alt="Ved Gohel"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToAbout}>
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
