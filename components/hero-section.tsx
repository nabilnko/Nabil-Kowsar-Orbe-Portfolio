"use client"

import { Button } from "@/components/ui/button"
import { GithubIcon, MailIcon, MapPinIcon } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium text-sm uppercase tracking-wider">Final-year CSE Student</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                Nabil Kowsar Orbe
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/80 font-light">Backend Developer</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A passionate backend developer specializing in Java, Spring Boot, and Spring Security. Building secure,
              scalable software systems with a focus on REST APIs and modern backend architecture.
            </p>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 group">
                <MapPinIcon className="size-4 text-primary group-hover:scale-110 transition-transform" />
                <span>Mirpur-10, Dhaka</span>
              </div>
              <div className="flex items-center gap-2 group">
                <MailIcon className="size-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:nabilnko11@gmail.com" className="hover:text-primary transition-colors">
                  nabilnko11@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              >
                Contact Me
              </Button>
              <Button size="lg" variant="ghost" asChild className="hover:bg-primary/10 transition-all">
                <a
                  href="https://github.com/nabilnko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative glass-strong p-2 rounded-2xl">
                <img
                  src="/professional-headshot-formal-neutral-background.jpg"
                  alt="Nabil Kowsar Orbe"
                  className="relative rounded-xl shadow-2xl w-full max-w-md aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
