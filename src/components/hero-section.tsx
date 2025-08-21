import { Button } from "@/components/ui/button"
import { Play, Users, Music } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tastonettis
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Akkordeon-Orchester
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80 leading-relaxed">
            "Lebe das Leben" - Gemeinsam musizieren, lachen und das Leben nehmen, wie es kommt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
              <Play className="w-5 h-5 mr-2" />
              Unser Video ansehen
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="w-5 h-5 mr-2" />
              Mehr erfahren
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Music className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Leidenschaftlich</h3>
              <p className="text-white/80">Musik ist unsere Leidenschaft</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Gemeinschaft</h3>
              <p className="text-white/80">Zusammen sind wir stark</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Play className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Lebensfreude</h3>
              <p className="text-white/80">Das Leben in vollen Zügen genießen</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}