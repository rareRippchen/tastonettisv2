import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie uns buchen? Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  Kontaktmöglichkeiten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-muted-foreground text-sm">tastonettis@googlemail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-accent/5 rounded-lg">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground text-sm">+49 (0) 178 584 74 72</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-secondary/50 rounded-lg">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground text-sm">Stolzenfelsstraße 4<br />10318 Berlin</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Auftritte & Buchungen</h3>
                <p className="text-muted-foreground mb-4">
                  Gerne spielen wir bei Ihren Veranstaltungen:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hochzeiten & Feiern</li>
                  <li>• Konzerte & Festivals</li>
                  <li>• Firmenveranstaltungen</li>
                  <li>• Kulturelle Events</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Ihr Name"
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Betreff
                  </label>
                  <Input
                    id="subject"
                    placeholder="Betreff Ihrer Nachricht"
                    className="border-input focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ihre Nachricht an uns..."
                    rows={6}
                    className="border-input focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full shadow-elegant hover:shadow-glow"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}