"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLinkIcon, FileTextIcon } from "lucide-react"

type Certification = {
  title: string
  issuer?: string
  year?: string
  description: string
  pdfPath: string
  thumbnailPath?: string
  highlights?: string[]
}

export function CertificationsSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  const withBasePath = (path: string) => {
    if (!path) return path
    if (path.startsWith("http://") || path.startsWith("https://")) return path
    if (path.startsWith("/")) return `${basePath}${path}`
    return `${basePath}/${path}`
  }

  const certifications: Certification[] = useMemo(
    () => [
      {
        title: "Job Ready: Employability Skills",
        issuer: "Wadhwani Foundation",
        year: "2025 (December 02)",
        description:
          "Comprehensive training on employability skills, covering workplace communication, problem-solving, and professional etiquette.",
        pdfPath: "/certificates/Wadhwani Foundation Certificate - 692eb77e9c72cbcb57a2ab10.pdf",
        thumbnailPath: "/Wadhwani.JPG",
        highlights: ["Employability Skills", "Professional Development", "Workplace Readiness"],
      },
      {
        title: "Cyber Security and Physical Protection",
        issuer: "Brain Station 23",
        year: "2025 (November 12)",
        description: "A certification for completing a course that covers both cybersecurity measures and the physical protection of assets.",
        pdfPath: "/certificates/Certificate.pdf",
        thumbnailPath: "/Certificate.JPG",
        highlights: ["Cybersecurity", "Physical Security", "Asset Management"]
      },
      {
        title: "Digital Assets Security and Privacy",
        issuer: "Brain Station 23",
        year: "2025 (November 12)",
        description: "A certificate of completion awarded to Nabil Kowsar Orbe for successfully finishing a course focused on the security and privacy of digital assets.",
        pdfPath: "/certificates/Certificate (1).pdf",
        thumbnailPath: "/Capture (1).JPG",
        highlights: ["Digital Security", "Data Privacy", "Information Protection"]
      },
      {
        title: "Anti-Corruption and Anti-Bribery Policy",
        issuer: "Brain Station 23",
        year: "2025 (November 12)",
        description: "A compliance certificate acknowledging that the recipient has completed training regarding the company's policies on anti-corruption and anti-bribery.",
        pdfPath: "/certificates/Certificate (2).pdf",
        thumbnailPath: "/Capture (2).JPG",
        highlights: ["Corporate Ethics", "Regulatory Compliance", "Anti-Bribery Policy"]
      },
      {
        title: "QMS: Fixed Price Project",
        issuer: "Brain Station 23",
        year: "2025 (November 12)",
        description: "A certificate of completion for a course on Quality Management Systems (QMS) specifically tailored for Fixed Price Projects.",
        pdfPath: "/certificates/Certificate (3).pdf",
        thumbnailPath: "/Capture (3).JPG",
        highlights: ["Quality Management Systems (QMS)", "Project Management", "Process Optimization"]
      },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Certification | null>(null)

  const openCertificate = (cert: Certification) => {
    setActive(cert)
    setOpen(true)
  }

  const activePdfUrl = active ? encodeURI(withBasePath(active.pdfPath)) : ""

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Credentials and courses I have completed to enhance my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass hover:glass-strong transition-all duration-300 hover:scale-[1.02] border-border overflow-hidden"
            >
              <div className="relative">
                {cert.thumbnailPath ? (
                  <img
                    src={encodeURI(withBasePath(cert.thumbnailPath))}
                    alt={cert.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[16/9] bg-primary/10 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-primary">
                      <FileTextIcon className="size-5" />
                      <span className="text-sm font-medium">PDF Certificate</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                  {([cert.issuer, cert.year].filter(Boolean).join(" • ") || "") && (
                    <p className="text-sm text-muted-foreground">{[cert.issuer, cert.year].filter(Boolean).join(" • ")}</p>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                {cert.highlights?.length ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cert.highlights.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                <div className="pt-2">
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => openCertificate(cert)}
                  >
                    <FileTextIcon className="size-4 mr-2" />
                    View Certificate
                    <ExternalLinkIcon className="size-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-5xl h-[85vh] p-0 overflow-hidden">
            <DialogHeader className="px-6 pt-6">
              <DialogTitle className="text-xl">
                {active
                  ? [active.title, active.issuer].filter(Boolean).join(" — ")
                  : "Certificate"}
              </DialogTitle>
            </DialogHeader>

            <div className="px-6 pb-6 flex-1 min-h-0">
              {active ? (
                <iframe
                  src={activePdfUrl}
                  title={`${active.title} PDF`}
                  className="w-full h-full rounded-md border border-border"
                />
              ) : null}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
