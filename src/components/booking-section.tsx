import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Users, Volume2, MapPin, Zap, Car } from "lucide-react"

export function BookingSection() {
  const requirements = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Stromanschluss",
      description: "230V in Bühnennähe"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Bühnenfläche",
      description: "ca. 9m x 6m"
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Zufahrt & Parkplatz",
      description: "Für Equipment-Transport"
    }
  ]

  const services = [
    "Familienfeier",
    "Stadtteilfest", 
    "Betriebsveranstaltung",
    "Konzerte",
    "Tontechnik-Service"
  ]

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Buchen Sie die <span className="text-primary">Tastonettis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mit unserem bunten Repertoire aus Pop- und Unterhaltungsmusik ist für jeden Anlass das Richtige dabei!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Booking Info */}
          <div className="flex flex-col space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50 flex-1">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Unsere Leistungen</CardTitle>
                <CardDescription>
                  Professionelle Auftritte für jeden Anlass
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">90 Minuten</div>
                    <div className="text-sm text-muted-foreground">2 x 45 Min Blöcke</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">8-40 Musiker</div>
                    <div className="text-sm text-muted-foreground">Flexible Besetzung</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Perfekt für:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <Badge key={service} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Komplette Ausstattung inklusive</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sämtliche Instrumente sowie PA-Anlage mit Mikrofonierung bringen wir mit!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 flex-1">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Kontakt & Buchung</CardTitle>
                <CardDescription>
                  Sprechen Sie uns an - wir freuen uns auf Ihre Veranstaltung!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <a 
                    href="mailto:tastonettis@googlemail.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium">E-Mail</div>
                      <div className="text-sm text-muted-foreground">tastonettis@googlemail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+4917858474472"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-sm text-muted-foreground">0178 / 58 47 47 2</div>
                      <div className="text-xs text-muted-foreground">Herr Kunschmann</div>
                    </div>
                  </a>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    Jetzt Anfrage senden
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Requirements */}
          <div className="flex flex-col space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50 flex-1">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technische Anforderungen</CardTitle>
                <CardDescription>
                  Was wir für einen perfekten Auftritt benötigen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        {req.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{req.title}</h4>
                        <p className="text-sm text-muted-foreground">{req.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-muted/50 to-muted/20 flex-1">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Zusätzliche Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2 text-foreground">Externe Tontechnik</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Falls eine Musikanlage von Ihnen gestellt wird, benötigen wir spezielle Mikrofonierung.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 4-5 Overhead-Mikrofone</li>
                    <li>• Drum-Mikrofonierung</li>
                    <li>• 1 Funkmikrofon</li>
                    <li>• 1 Klinkeneingang für Bass-Akkordeon</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <Volume2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Tontechnik-Service</p>
                  <p className="text-xs text-muted-foreground">
                    Auch reine Tontechnik-Dienstleistungen möglich
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            <strong className="text-primary">Es ist fast alles möglich...</strong><br />
            Sprechen Sie uns an und wir finden die perfekte Lösung für Ihre Veranstaltung!
          </p>
        </div>
      </div>
    </section>
  )
}