import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Film, Camera } from "lucide-react"

export function VideoSection() {
  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Unser Musikvideo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entstanden trotz widriger Umstände - ein Video voller Lebensfreude und Musik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Film className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-xl font-semibold">Die Geschichte</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Als eines unserer Ziele als Orchester hatten wir uns vorgenommen, ein Musikvideo zu drehen. 
                  Wie das Leben aber so spielt, ist unser Drehtag beinahe ins Wasser gefallen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wir haben uns trotz des Wetters nicht unterkriegen lassen und einfach das gemacht, 
                  was uns Freude bereitet - gemeinsam zu musizieren und zu lachen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Camera className="w-6 h-6 mr-3 text-accent" />
                  <h3 className="text-xl font-semibold">Das Ergebnis</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ganz nach dem Motto "Lebe das Leben" ist dieses Video entstanden und wir sind 
                  sehr stolz auf das Endergebnis.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Es zeigt unsere Leidenschaft für die Musik und unseren Zusammenhalt als Orchester.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0 relative aspect-video bg-gradient-hero flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h4 className="text-xl font-semibold mb-2">Musikvideo ansehen</h4>
                  <p className="text-white/80 mb-6">Erleben Sie unsere Musik</p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Video abspielen
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black/20" />
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Wenn es euch gefällt, dann lasst es uns wissen.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Feedback geben
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}