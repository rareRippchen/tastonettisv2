import { Heart, Music, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Music className="w-6 h-6 mr-2 text-primary" />
              <span className="text-2xl font-bold text-primary">Tastonettis</span>
            </div>
            <p className="text-muted-foreground">
              Akkordeon-Orchester mit Leidenschaft für Musik und Leben.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="/#music" className="text-muted-foreground hover:text-primary transition-colors">Musik</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
              <li><a href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>tastonettis@googlemail.com</p>
              <p>+49 (0) 178 584 74 72</p>
              <p>Stolzenfelsstraße 4, 10318 Berlin</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="font-semibold mb-4">Hört uns auf</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://open.spotify.com/search/tastonettis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Spotify
              </a>
              <a 
                href="https://music.apple.com/search?term=tastonettis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Apple Music
              </a>
              <a 
                href="https://music.youtube.com/search?q=tastonettis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                YouTube Music
              </a>
              <a 
                href="https://music.amazon.de/search/tastonettis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Amazon Music
              </a>
            </div>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary" /> by Tastonettis
            </p>
            <p className="mt-2 text-sm">&copy; 2024 Tastonettis. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}