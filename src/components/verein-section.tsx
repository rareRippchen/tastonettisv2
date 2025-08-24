import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Award, HandHeart, Building2, FileText } from "lucide-react";

export const VereinSection = () => {
  return (
    <section id="verein" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Freundeskreis Tastonettis e. V.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seit 2011 unterstützen wir mit Herz und Leidenschaft das Akkordeonorchester Tastonettis. 
            Werden Sie Teil unserer musikalischen Familie!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About the Association */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  Über den Verein
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Gemeinsam mit unseren jungen und junggebliebenen Musikern engagieren sich im Verein 
                  viele Menschen, die uns und unsere Musik mögen und sich in unserer Gemeinschaft wohlfühlen. 
                  Sie betreuen alle Aktivitäten wie Konzerte, Konzertreisen und Veranstaltungen.
                </p>
                <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-sm">Eingetragen im Vereinsregister:</p>
                  <p className="text-sm">Amtsgericht Charlottenburg, Nr. VR 30637 B</p>
                  <p className="text-sm">Anerkannt als gemeinnützig</p>
                  <p className="text-sm text-muted-foreground">St.-Nr.: 27 / 653 / 56313</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Vorstand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="font-medium">1. Vorsitzende:</span>
                    <span className="text-muted-foreground">Sabine Reiche</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="font-medium">2. Vorsitzender:</span>
                    <span className="text-muted-foreground">Manuel Kunschmann</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="font-medium">Protokoll:</span>
                    <span className="text-muted-foreground">Jens Seeger</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="font-medium">Vorstandsmitglied:</span>
                    <span className="text-muted-foreground">Manuela Haucke</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="font-medium">Vorstandsmitglied:</span>
                    <span className="text-muted-foreground">Heike Just-Seeger</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Kassenprüfer:</span>
                    <span className="text-muted-foreground">Christine Ludßuweit</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Membership & Support */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  Mitgliedschaft
                </CardTitle>
                <CardDescription>
                  Unterstützen Sie uns als Vereinsmitglied
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Jahresbeitrag</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Erwachsene:</span>
                        <span className="font-bold text-primary">18,00 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minderjährige:</span>
                        <span className="font-bold text-primary">12,00 €</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ein zur rechten Zeit geklebtes Pflaster, ein Schnappschuss vom Konzert, 
                    die Fütterung hungriger Musiker - auf all das ist bei unseren Mitgliedern immer Verlass.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => window.open('https://tastonettis.de/download/formulare/Beitrittserklaerung.pdf', '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Beitrittserklärung
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open('https://tastonettis.de/download/formulare/Satzung-Tastonettis.pdf', '_blank')}
                  >
                    Satzung
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <HandHeart className="h-6 w-6 text-primary" />
                  Spenden & Unterstützung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Aktueller Projektspendenstand</h4>
                  <p className="text-2xl font-bold text-primary">5.062 €</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Bankverbindung:</p>
                  <p>IBAN: DE 71 8306 5408 0004 0019 58</p>
                  <p>BIC: GENO DEF1 SLR</p>
                  <p>Deutsche Skatbank</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Durch die anerkannte Gemeinnützigkeit sind Spenden steuerlich absetzbar. 
                  Eine Spendenbescheinigung wird Ihnen nach Erhalt der Spende zugesandt.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => window.open('https://www.bildungsspender.de/tastonettis', '_blank')}
                >
                  Online spenden
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights & Honorary Members */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Vereins-Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary/30 pl-4">
                  <p className="font-semibold">2013</p>
                  <p className="text-sm text-muted-foreground">
                    Platz 20 von 50 bei der 105'5 Spreeradio Vereinsmeisterschaft
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <p className="font-semibold">2012</p>
                  <p className="text-sm text-muted-foreground">
                    Anerkennung als "Gemeinnützig" beim Finanzamt
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <p className="font-semibold">2011</p>
                  <p className="text-sm text-muted-foreground">
                    Gründung des Vereins & Eintragung ins Vereinsregister
                  </p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <p className="font-semibold">2011</p>
                  <p className="text-sm text-muted-foreground">
                    Platz 17 bei der 105'5 Spreeradio Vereinsmeisterschaft
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-accent" />
                Ehrenmitglieder
              </CardTitle>
              <CardDescription>
                Besondere Menschen, die uns besonders am Herzen liegen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <h4 className="font-semibold text-accent">Daniel</h4>
                  <p className="text-sm text-muted-foreground">
                    Busfahrer, bringt uns an die entlegendsten Orte und überrascht uns 
                    auch mal morgens um sieben mit leckeren Eierkuchen
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <h4 className="font-semibold text-accent">Lothar</h4>
                  <p className="text-sm text-muted-foreground">
                    Mit Herz und Kopf immer für und bei uns, absoluter Akkordeonliebhaber, 
                    obwohl er selbst nie in die Tasten haut
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <h4 className="font-semibold text-accent">Moni</h4>
                  <p className="text-sm text-muted-foreground">
                    Ehemaliges Orchestermitglied, die mit ihrer Sicht auf die Dinge 
                    mehr bewegt hat, als wir bemerkt hatten
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              An alle Beteiligten und Unterstützer des Freundeskreis Tastonettis e. V.
            </h3>
            <p className="text-xl text-primary font-semibold mb-6">
              Ein herzliches Dankeschön! ❤️
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};