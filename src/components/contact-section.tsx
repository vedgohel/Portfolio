"use client"

import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_rzbqg4q",       // ✅ Your Service ID
        "template_5tbymq7",      // ✅ Your Template ID
        formRef.current,
        "FzFuuGkhotFnq-tqT"      // ✅ Your Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error)
        alert("❌ Failed to send message. Please try again later.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vedgohel1512@gmail.com",
      href: "mailto:vedgohel1512@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Patan, Gujarat, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and learning experiences.
            Let's discuss how we can work together on exciting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <Textarea name="message" placeholder="Your Message" className="min-h-[120px]" value={formData.message} onChange={handleChange} required />
                <input type="hidden" name="subject" value={formData.subject} />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.href !== "#" ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Currently Studying</h4>
                <p className="text-muted-foreground mb-4">
                  2nd Year BE Computer Science student at Government Engineering College, Patan.
                  Always eager to learn new technologies and work on innovative projects.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/vedgohel" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
