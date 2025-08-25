import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConsentYouTube } from "@/components/consent-youtube";
import { Footer } from "@/components/footer";
import { Download, Mail, Phone, Users, Clock, Music, Award, MapPin, ArrowLeft } from "lucide-react";

const EPK = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </div>
           <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Electronic Press Kit
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Tastonettis - Akkordeon-Orchester Berlin
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Gegründet 2010
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                15+ Musiker
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Berlin
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Facts */}
        <Card className="mb-16 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Auf einen Blick</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Besetzung</h3>
                <p className="text-muted-foreground">15+ Akkordeonisten</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Programmdauer</h3>
                <p className="text-muted-foreground">45-90 Minuten</p>
              </div>
              <div className="text-center">
                <Music className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Repertoire</h3>
                <p className="text-muted-foreground">Klassik bis Modern</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Erfahrung</h3>
                <p className="text-muted-foreground">14+ Jahre</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Über die Tastonettis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Die Tastonettis sind ein Berliner Akkordeon-Orchester, das seit 2010 mit 
                Leidenschaft und Professionalität auftritt. Unter der Leitung erfahrener 
                Dirigenten bringen über 15 Musiker verschiedene Musikrichtungen zum Leben.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Von klassischen Stücken über Filmmusik bis hin zu modernen Arrangements - 
                die Tastonettis begeistern ihr Publikum mit vielfältigen Programmen und 
                einer einzigartigen Atmosphäre.
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-primary">Philosophie</h4>
                <p className="text-sm italic">"Lebe das Leben" - Musik verbindet Menschen und schafft unvergessliche Momente.</p>
              </div>
            </CardContent>
          </Card>

          {/* Video */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Promotion Video</CardTitle>
              <CardDescription>
                Erleben Sie die Tastonettis in Aktion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full aspect-video">
                <ConsentYouTube 
                  videoId="k85C1iOEr6M"
                  title="Tastonettis - Live Performance"
                  description="Erleben Sie die Tastonettis in Aktion"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Requirements */}
        <Card className="mb-16 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl">Technische Anforderungen</CardTitle>
            <CardDescription>
              Optimale Bedingungen für einen erfolgreichen Auftritt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-lg">Bühne & Raum</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mindestbühnengröße: 8m x 6m</li>
                  <li>• Ebene, stabile Fläche</li>
                  <li>• Überdachung bei Outdoor-Events</li>
                  <li>• Stromanschluss 230V</li>
                  <li>• Ausreichende Beleuchtung</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg">Bestuhlung & Ausstattung</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 15+ Stühle ohne Armlehnen</li>
                  <li>• 15+ Notenständer</li>
                  <li>• Klavier/E-Piano (optional)</li>
                  <li>• Mikrofon für Moderation</li>
                  <li>• Parkplätze in Bühnennähe</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Repertoire */}
        <Card className="mb-16 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl">Repertoire</CardTitle>
            <CardDescription>
              Vielfältige Programme für jeden Anlass
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-primary">Klassik & Folklore</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Klassische Akkordeonliteratur</li>
                  <li>• Volksmusik aus aller Welt</li>
                  <li>• Traditionelle deutsche Lieder</li>
                  <li>• Polka und Walzer</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-primary">Modern & Pop</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bekannte Pop-Songs</li>
                  <li>• Musicalmelodien</li>
                  <li>• Deutsche Schlager</li>
                  <li>• Internationale Hits</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-primary">Film & Unterhaltung</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Filmmusik-Highlights</li>
                  <li>• TV-Themen</li>
                  <li>• Tango & lateinamerikanische Musik</li>
                  <li>• Saisonale Programme</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Information */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Buchung & Konditionen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Veranstaltungsarten</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="outline" className="justify-center py-2">Konzerte</Badge>
                  <Badge variant="outline" className="justify-center py-2">Festivals</Badge>
                  <Badge variant="outline" className="justify-center py-2">Hochzeiten</Badge>
                  <Badge variant="outline" className="justify-center py-2">Firmenfeiern</Badge>
                  <Badge variant="outline" className="justify-center py-2">Stadtfeste</Badge>
                  <Badge variant="outline" className="justify-center py-2">Geburtstage</Badge>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Verfügbarkeit</h4>
                <p className="text-sm text-muted-foreground">
                  Ganzjährig buchbar • Wochenenden und Feiertage bevorzugt • 
                  Mindestvorlauf: 4 Wochen
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Leistungen</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professionelle Darbietung</li>
                  <li>• Flexible Programmdauer</li>
                  <li>• Eigene Notenständer</li>
                  <li>• Moderation (optional)</li>
                  <li>• Anreise im Berliner Raum</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Kontakt für Buchungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Booking-Anfragen</p>
                    <a 
                      href="mailto:tastonettis@googlemail.com" 
                      className="text-primary hover:underline"
                    >
                      tastonettis@googlemail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-accent/5 rounded-lg">
                  <Phone className="w-6 h-6 mr-4 text-accent" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a 
                      href="tel:+4917858474772" 
                      className="text-accent hover:underline"
                    >
                      +49 (0) 178 584 74 72
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-muted/30 rounded-lg">
                  <MapPin className="w-6 h-6 mr-4 text-foreground" />
                  <div>
                    <p className="font-medium">Standort</p>
                    <p className="text-muted-foreground">Berlin, Deutschland</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center">
                <p className="font-semibold mb-3">Freundeskreis Tastonettis e. V.</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Eingetragener Verein • Gemeinnützig anerkannt<br />
                  VR 30637 B • Amtsgericht Charlottenburg
                </p>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:tastonettis@googlemail.com?subject=Booking-Anfrage EPK'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Booking-Anfrage senden
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <Card className="mt-16 bg-gradient-to-r from-muted/50 to-muted/30 shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Pressematerial Download</CardTitle>
            <CardDescription>
              Hochauflösende Fotos und weitere Materialien für die Presse
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Download className="w-6 h-6" />
                <span>Pressefotos</span>
                <span className="text-xs text-muted-foreground">High-Res JPG</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Download className="w-6 h-6" />
                <span>Biografie</span>
                <span className="text-xs text-muted-foreground">PDF</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Download className="w-6 h-6" />
                <span>Technical Rider</span>
                <span className="text-xs text-muted-foreground">PDF</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Für weitere Materialien oder spezielle Anfragen kontaktieren Sie uns bitte direkt.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default EPK;