import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, ServerIcon, ShieldCheckIcon } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: CodeIcon,
      title: "Backend Engineering",
      description: "Specialized in Java and Spring Boot ecosystem for robust server-side applications",
    },
    {
      icon: ShieldCheckIcon,
      title: "Security Focus",
      description: "Implementing authentication and authorization using Spring Security and JWT",
    },
    {
      icon: ServerIcon,
      title: "REST APIs",
      description: "Designing and building scalable RESTful web services with best practices",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year Computer Science & Engineering student at Green University of Bangladesh, graduating in
              2025. My academic journey has been focused on backend development, with strong expertise in Java, Spring
              Boot, and database technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as a Trainee at BrainStation 23, where I'm developing expertise in enterprise-level Java
              applications and learning professional software development practices. I'm passionate about building
              secure, scalable systems and constantly exploring new technologies in the backend ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines strong problem-solving skills with a commitment to writing clean, maintainable code.
              I believe in continuous learning and staying updated with industry best practices in software architecture
              and system design.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <highlight.icon className="size-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
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
