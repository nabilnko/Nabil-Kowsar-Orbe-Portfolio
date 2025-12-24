"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function PortfolioPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(115, 200, 255, 0.05), transparent 80%)`,
        }}
      />

      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
               linear-gradient(to right, rgb(var(--color-primary) / 0.05) 1px, transparent 1px),
               linear-gradient(to bottom, rgb(var(--color-primary) / 0.05) 1px, transparent 1px)
             `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="flex flex-col">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Nabil Kowsar Orbe. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
