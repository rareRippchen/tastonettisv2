import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Award } from "lucide-react"
import norwayCover from "@/assets/norway-cover.jpg"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir sind ein leidenschaftliches Akkordeon-Orchester, das Musik lebt und liebt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-primary" />
                Unsere Philosophie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "Lebe das Leben" - Das ist unser Motto. Trotz aller Herausforderungen lassen wir uns nicht unterkriegen 
                und machen das, was uns Freude bereitet: gemeinsam musizieren, lachen und das Leben so nehmen, wie es kommt.
              </p>
            </div>

            <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Star className="w-6 h-6 mr-3 text-accent" />
                Was uns verbindet
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Die Musik ist das Band, das uns zusammenhält. Egal ob bei Proben, Auftritten oder gemeinsamen Projekten - 
                wir teilen die Leidenschaft für das Akkordeon und die Freude am gemeinsamen Musizieren.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-elegant">
              <img 
                src={norwayCover} 
                alt="Tastonettis Orchester-Mitglieder in der Natur - gemeinsam musizieren und das Leben genießen" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white font-medium">
                  Unser Orchester in der Natur - "Lebe das Leben" ist mehr als nur ein Motto
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="text-lg font-semibold mb-2">Erfahrung</h4>
                <p className="text-muted-foreground text-sm">
                  Jahre der Erfahrung in der Akkordeon-Musik
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="text-lg font-semibold mb-2">Leidenschaft</h4>
                <p className="text-muted-foreground text-sm">
                  Musik aus Leidenschaft und mit dem Herzen
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 md:col-span-2">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="text-lg font-semibold mb-2">Gemeinschaft</h4>
                <p className="text-muted-foreground text-sm">
                  Ein starkes Team, das zusammenhält und gemeinsam wächst
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}