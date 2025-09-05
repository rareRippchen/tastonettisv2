import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Home, Volume2 } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Musical 404 with accordion theme */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Music className="w-16 h-16 text-primary animate-pulse" />
              <div className="text-8xl font-bold text-primary">404</div>
              <Volume2 className="w-16 h-16 text-primary animate-pulse" />
            </div>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-6"></div>
          </div>

          {/* Creative accordion-themed message */}
          <div className="bg-card rounded-lg p-8 shadow-elegant border mb-8">
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              Diese Melodie kennen wir nicht! 🎵
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Es scheint, als wären Sie auf eine Seite gestoßen, die nicht in unserem Repertoire steht. 
              Aber keine Sorge – im Tastonettis-Orchester spielen wir immer weiter!
            </p>
            
            {/* Musical note decoration */}
            <div className="flex justify-center gap-4 mb-6 text-primary/30">
              <span className="text-4xl">♪</span>
              <span className="text-5xl">♫</span>
              <span className="text-4xl">♪</span>
              <span className="text-3xl">♬</span>
              <span className="text-4xl">♪</span>
            </div>

            <p className="text-muted-foreground mb-8">
              Lassen Sie uns gemeinsam zur Startseite zurückkehren und die richtige Melodie finden.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-5 h-5 mr-2" />
              Zurück zur Startseite
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.history.back()}
            >
              <Music className="w-5 h-5 mr-2" />
              Vorherige Melodie
            </Button>
          </div>

          {/* Fun accordion facts */}
          <div className="mt-12 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Wussten Sie schon? 🪗
            </h3>
            <p className="text-muted-foreground text-sm">
              Ein Akkordeon kann über 120 verschiedene Töne erzeugen – 
              aber diese Seite gehört leider nicht dazu!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
