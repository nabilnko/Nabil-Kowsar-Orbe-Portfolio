import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        <Card className="glass-strong border-l-4 border-l-primary hover:scale-[1.01] transition-transform">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                    <BriefcaseIcon className="size-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Trainee</h3>
                    <p className="text-primary font-medium text-lg">BrainStation 23</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="size-4" />
                <span className="text-sm">October 2025 – Present</span>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base">
                Developing enterprise-level expertise in Java and backend technologies through hands-on projects and
                professional mentorship.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-base text-foreground">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Building and completing backend projects using Spring Boot framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Implementing security features with Spring Security and JWT authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Learning professional documentation and industry best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Collaborating with senior developers on real-world applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Gaining hands-on experience with enterprise-grade Java development</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                <Badge className="bg-primary/10 text-primary border border-primary/20">Java</Badge>
                <Badge className="bg-primary/10 text-primary border border-primary/20">Spring Boot</Badge>
                <Badge className="bg-primary/10 text-primary border border-primary/20">Spring Security</Badge>
                <Badge className="bg-primary/10 text-primary border border-primary/20">REST APIs</Badge>
                <Badge className="bg-primary/10 text-primary border border-primary/20">Professional Development</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
