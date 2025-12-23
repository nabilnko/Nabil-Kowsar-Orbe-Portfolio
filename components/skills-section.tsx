"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Strong" },
        { name: "Python", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "PHP", level: "Basic" },
        { name: "JavaScript", level: "Basic" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Spring Boot", level: "Strong" },
        { name: "Spring Security", level: "Strong" },
        { name: "JPA/Hibernate", level: "Intermediate" },
        { name: "REST APIs", level: "Strong" },
        { name: "JWT", level: "Intermediate" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "React.js", level: "Basic" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: "Strong" },
        { name: "RDBMS Concepts", level: "Strong" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: "Intermediate" },
        { name: "Maven", level: "Intermediate" },
        { name: "Postman", level: "Intermediate" },
        { name: "Swagger", level: "Basic" },
        { name: "VMware", level: "Basic" },
        { name: "Hyper-V", level: "Basic" },
        { name: "Windows 10/11", level: "Strong" },
        { name: "Linux", level: "Basic" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Strong":
        return "bg-primary/20 text-primary border border-primary/30"
      case "Intermediate":
        return "bg-chart-2/20 text-chart-2 border border-chart-2/30"
      case "Basic":
        return "bg-muted text-muted-foreground border border-border"
      default:
        return "bg-muted text-muted-foreground border border-border"
    }
  }

  return (
    <section id="skills" className="py-24 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Skills & Technologies</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`
                glass hover:glass-strong transition-all duration-300 hover:scale-[1.02]
                ${hoveredCategory === index ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border"}
              `}
            >
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className={getLevelColor(skill.level)}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-primary ring-1 ring-primary/40" />
            <span>Strong</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-chart-2 ring-1 ring-chart-2/40" />
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-muted ring-1 ring-border" />
            <span>Basic</span>
          </div>
        </div>
      </div>
    </section>
  )
}
