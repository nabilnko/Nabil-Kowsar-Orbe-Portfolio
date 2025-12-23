import { Card, CardContent } from "@/components/ui/card"
import { GraduationCapIcon, CalendarIcon } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "B.Sc in Computer Science & Engineering",
      institution: "Green University of Bangladesh",
      period: "Expected Graduation: 2025",
      description:
        "Specialized in backend development, software engineering, and database systems. Strong focus on Java programming and modern web technologies.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Bangladesh Navy College",
      period: "2017 – 2018",
      description: "Completed higher secondary education with focus on science and mathematics.",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Mirpur Bangla School",
      period: "2015 – 2016",
      description: "Completed secondary education with strong academic performance in science subjects.",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCapIcon className="size-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CalendarIcon className="size-4" />
                      <span>{edu.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
