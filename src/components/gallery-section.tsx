import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Music, Users, Camera } from "lucide-react"
import norwayGroupPhoto from "@/assets/gallery/norway-group-photo.png"
import orchestraPerformance from "@/assets/gallery/orchestra-performance.jpg"
import accordionCloseup from "@/assets/gallery/accordion-closeup.jpg"
import rehearsalScene from "@/assets/gallery/rehearsal-scene.jpg"

export const GallerySection = () => {
  const galleryImages = [
    {
      src: norwayGroupPhoto,
      alt: "Tastonettis Orchester Gruppenfoto in der Natur",
      title: "Unser Orchester",
      description: "Das Tastonettis-Akkordeon-Orchester in der norwegischen Natur",
      icon: Users,
      badge: "Gruppenfoto"
    },
    {
      src: orchestraPerformance,
      alt: "Akkordeon-Orchester Konzertaufführung",
      title: "Konzertaufführung",
      description: "Atmosphäre eines Konzerts mit warmer Beleuchtung",
      icon: Music,
      badge: "Live"
    },
    {
      src: accordionCloseup,
      alt: "Nahaufnahme eines Akkordeons",
      title: "Unser Instrument",
      description: "Die Schönheit und Handwerkskunst des Akkordeons",
      icon: Camera,
      badge: "Details"
    },
    {
      src: rehearsalScene,
      alt: "Akkordeon-Orchester bei der Probe",
      title: "Probenarbeit",
      description: "Gemeinsame Proben schaffen die Basis für unsere Auftritte",
      icon: ImageIcon,
      badge: "Backstage"
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <ImageIcon className="w-4 h-4 mr-2" />
            Impressionen
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Einblicke in unser Orchester
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die Welt der Tastonettis durch unsere Bildergalerie – 
            von Konzertmomenten bis hin zu den Details unserer geliebten Akkordeons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {image.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center mb-2">
                    <image.icon className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-2 text-muted-foreground">
            <Music className="w-5 h-5" />
            <span className="text-lg">Mehr Eindrücke bei unseren Auftritten und Konzerten</span>
            <Music className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}