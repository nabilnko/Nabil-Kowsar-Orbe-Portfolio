import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MailIcon, GithubIcon, MapPinIcon } from "lucide-react"

export function ContactSection() {
  const email = "nabilnko11@gmail.com"
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

  const contactInfo = [
    {
      icon: MailIcon,
      label: "Email",
      value: email,
      link: gmailComposeUrl,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/nabilnko",
      link: "https://github.com/nabilnko",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Mirpur-10, Dhaka, Bangladesh",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently seeking opportunities for backend development roles and internships. Let's connect and discuss
            how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <info.icon className="size-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-semibold">Ready to collaborate?</h3>
              <p className="text-muted-foreground">
                Feel free to reach out for opportunities, collaborations, or just to say hello!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
                    <MailIcon className="size-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/nabilnko" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
