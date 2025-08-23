import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Shield, ExternalLink } from 'lucide-react';

interface ConsentYouTubeProps {
  videoId: string;
  title: string;
  description: string;
}

export function ConsentYouTube({ videoId, title, description }: ConsentYouTubeProps) {
  const [hasConsent, setHasConsent] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleAcceptConsent = () => {
    setHasConsent(true);
    setShowVideo(true);
    // Store consent in localStorage for this session
    localStorage.setItem('youtube-consent', 'true');
  };

  if (showVideo && hasConsent) {
    return (
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    );
  }

  return (
    <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
      <CardContent className="p-0 relative aspect-video bg-gradient-hero flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-md mx-auto p-6">
          <Shield className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h4 className="text-xl font-semibold mb-3">{title}</h4>
          <p className="text-white/90 mb-4 text-sm leading-relaxed">
            Dieses Video wird von YouTube gehostet. Durch das Laden des Videos werden 
            Daten an YouTube übertragen und Cookies gesetzt.
          </p>
          <div className="flex items-center justify-center text-xs text-white/70 mb-6">
            <ExternalLink className="w-3 h-3 mr-1" />
            Externe Quelle: YouTube
          </div>
          <div className="space-y-3">
            <Button 
              onClick={handleAcceptConsent}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 w-full"
            >
              <Play className="w-5 h-5 mr-2" />
              Video laden und abspielen
            </Button>
            <p className="text-xs text-white/60">
              Mit dem Klick stimmen Sie der Datenübertragung an YouTube zu.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </CardContent>
    </Card>
  );
}