"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-featured e-commerce backend with secure authentication, product management, and order processing capabilities.",
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "REST APIs"],
      features: [
        "User authentication and authorization with JWT",
        "Product catalog and inventory management",
        "Shopping cart and order management",
        "Role-based access control for admin/user",
      ],
      githubUrl: "https://github.com/nabilnko",
      type: "Backend",
    },
    {
      title: "Employee Management System",
      description:
        "CRUD-based system for managing employee records with role-based access control and comprehensive data validation.",
      tech: ["Spring Boot", "JPA/Hibernate", "MySQL", "REST APIs"],
      features: [
        "Complete CRUD operations for employee data",
        "Role-based access control",
        "Department and position management",
        "Data validation and error handling",
      ],
      githubUrl: "https://github.com/nabilnko",
      type: "Backend",
    },
    {
      title: "Event Management System",
      description:
        "Ongoing project building secure REST APIs for comprehensive event and user management with modern backend architecture.",
      tech: ["Spring Boot", "Spring Security", "MySQL", "JWT"],
      features: [
        "Event creation and management",
        "User registration and authentication",
        "Event booking and ticketing system",
        "Admin dashboard for event monitoring",
      ],
      githubUrl: "https://github.com/nabilnko",
      type: "Backend",
      status: "Ongoing",
    },
    {
      title: "KhaddoBondhu (PlatePal)",
      description:
        "Food redistribution platform connecting food donors with those in need, reducing waste and helping the community.",
      tech: ["Spring Boot", "MySQL", "REST APIs", "Geolocation"],
      features: [
        "Donor and recipient matching system",
        "Real-time food availability tracking",
        "Location-based food distribution",
        "Community impact tracking",
      ],
      githubUrl: "https://github.com/nabilnko",
      type: "Full-Stack",
    },
    {
      title: "ATM Banking System",
      description:
        "Academic simulation project implementing core banking operations with proper transaction handling and security.",
      tech: ["Java", "OOP", "File I/O"],
      features: [
        "Account management (create, view, delete)",
        "Deposit and withdrawal operations",
        "Balance inquiry and transaction history",
        "PIN-based authentication",
      ],
      githubUrl: "https://github.com/nabilnko",
      type: "Academic",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            Backend-focused projects showcasing expertise in Java, Spring Boot, and secure API development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                glass hover:glass-strong transition-all duration-300 hover:scale-[1.02]
                ${hoveredIndex === index ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border"}
              `}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        {project.type}
                      </Badge>
                      {project.status && (
                        <Badge className="text-xs bg-primary/20 text-primary border-0">{project.status}</Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardDescription className="leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="size-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
