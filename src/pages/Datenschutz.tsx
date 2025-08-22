import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, FileText, Users, Lock, Eye, AlertTriangle, Phone, Mail, MapPin } from "lucide-react"

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Datenschutz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparenz und Schutz Ihrer persönlichen Daten sind uns wichtig. Hier erfahren Sie alles über unseren Umgang mit Ihren Informationen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Introduction Card */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Datenschutzerklärung
              </CardTitle>
              <CardDescription>
                Grundlegende Informationen zum Datenschutz
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot"). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
              </p>
            </CardContent>
          </Card>

          {/* Responsible Party Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Verantwortlicher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Die Tastonettis</h4>
                  <p className="text-muted-foreground">c/o Freundeskreis Tastonettis e. V.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        Stolzenfelsstraße 4<br />
                        10318 Berlin
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-sm text-muted-foreground">+49 (0) 178 584 74 72</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <a href="mailto:tastonettis@googlemail.com" className="text-sm text-primary hover:underline">
                        tastonettis@googlemail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Types Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Arten der verarbeiteten Daten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Bestandsdaten (z.B., Namen, Adressen)",
                    "Kontaktdaten (z.B., E-Mail, Telefonnummern)",
                    "Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos)",
                    "Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)",
                    "Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)"
                  ].map((item, index) => (
                    <Badge key={index} variant="secondary" className="block p-3 text-left">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Zweck der Verarbeitung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte",
                    "Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern",
                    "Sicherheitsmaßnahmen",
                    "Reichweitenmessung/Marketing"
                  ].map((item, index) => (
                    <Badge key={index} variant="outline" className="block p-3 text-left">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Affected Persons */}
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Kategorien betroffener Personen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer").
              </p>
            </CardContent>
          </Card>

          {/* Definitions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Verwendete Begrifflichkeiten
              </CardTitle>
              <CardDescription>
                Wichtige Definitionen gemäß DSGVO
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="p-4 border-l-4 border-primary bg-primary/5">
                  <h4 className="font-semibold mb-2">Personenbezogene Daten</h4>
                  <p className="text-sm text-muted-foreground">
                    Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt identifiziert werden kann.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-primary bg-primary/5">
                  <h4 className="font-semibold mb-2">Verarbeitung</h4>
                  <p className="text-sm text-muted-foreground">
                    Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten. Der Begriff umfasst praktisch jeden Umgang mit Daten.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-primary bg-primary/5">
                  <h4 className="font-semibold mb-2">Verantwortlicher</h4>
                  <p className="text-sm text-muted-foreground">
                    Die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-primary bg-primary/5">
                  <h4 className="font-semibold mb-2">Auftragsverarbeiter</h4>
                  <p className="text-sm text-muted-foreground">
                    Eine Person oder Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Maßgebliche Rechtsgrundlagen
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG, gilt, sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, Folgendes:
              </p>
              <div className="grid gap-2 mt-4">
                {[
                  "Art. 6 Abs. 1 lit. a und Art. 7 DSGVO - Einholung von Einwilligungen",
                  "Art. 6 Abs. 1 lit. b DSGVO - Erfüllung von Leistungen und vertraglichen Maßnahmen",
                  "Art. 6 Abs. 1 lit. c DSGVO - Erfüllung rechtlicher Verpflichtungen",
                  "Art. 6 Abs. 1 lit. f DSGVO - Wahrung berechtigter Interessen"
                ].map((item, index) => (
                  <Badge key={index} variant="outline" className="justify-start p-2 text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Measures */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Sicherheitsmaßnahmen
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Ihre Rechte als betroffene Person
              </CardTitle>
              <CardDescription>
                Diese Rechte stehen Ihnen gemäß DSGVO zu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Auskunftsrecht", desc: "Art. 15 DSGVO - Auskunft über verarbeitete Daten", icon: Eye },
                  { title: "Berichtigungsrecht", desc: "Art. 16 DSGVO - Berichtigung unrichtiger Daten", icon: FileText },
                  { title: "Löschungsrecht", desc: "Art. 17 DSGVO - Löschung Ihrer Daten", icon: AlertTriangle },
                  { title: "Datenübertragbarkeit", desc: "Art. 20 DSGVO - Daten in maschinenlesbarem Format", icon: FileText },
                ].map((right, index) => {
                  const IconComponent = right.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">{right.title}</h4>
                        <p className="text-sm text-muted-foreground">{right.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information - Collapsed Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Weitere Informationen
              </CardTitle>
              <CardDescription>
                Detaillierte Informationen zu spezifischen Verarbeitungen
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <Separator className="my-4" />
              
              <h4>Zusammenarbeit mit Auftragsverarbeitern</h4>
              <p>
                Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen offenbaren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis oder mit Ihrer Einwilligung.
              </p>

              <Separator className="my-4" />

              <h4>Kontaktaufnahme</h4>
              <p>
                Bei der Kontaktaufnahme mit uns werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet.
              </p>

              <Separator className="my-4" />

              <h4>Löschung von Daten</h4>
              <p>
                Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind.
              </p>

              <Separator className="my-4" />

              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">
                  Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;