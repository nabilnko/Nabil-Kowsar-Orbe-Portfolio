"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-strong shadow-lg shadow-primary/5 border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            NKO
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm transition-all",
                  activeSection === item.id
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "hover:bg-primary/10 hover:text-primary",
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
