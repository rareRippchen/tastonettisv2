import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    saveConsent(necessaryOnly);
    setShowBanner(false);
  };

  const saveSettings = () => {
    saveConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <Card className="mx-auto max-w-4xl bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border shadow-elegant">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Cookie className="h-6 w-6 text-tastonetti-red mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  Notwendige Cookies ermöglichen grundlegende Funktionen und sind für das ordnungsgemäße 
                  Funktionieren der Website erforderlich. Sie können wählen, ob Sie zusätzliche Cookies 
                  für Analyse und Marketing zulassen möchten.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={acceptAll} className="bg-tastonetti-red hover:bg-tastonetti-red-dark">
                    Alle akzeptieren
                  </Button>
                  <Button onClick={acceptNecessary} variant="outline">
                    Nur notwendige
                  </Button>
                  <Dialog open={showSettings} onOpenChange={setShowSettings}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Einstellungen
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Cookie-Einstellungen</DialogTitle>
                        <DialogDescription>
                          Wählen Sie, welche Cookies Sie zulassen möchten.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label className="text-base font-medium">Notwendige Cookies</Label>
                            <p className="text-sm text-muted-foreground">
                              Diese Cookies sind für das Funktionieren der Website erforderlich.
                            </p>
                          </div>
                          <Switch checked={true} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label className="text-base font-medium">Analyse-Cookies</Label>
                            <p className="text-sm text-muted-foreground">
                              Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.analytics}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, analytics: checked }))
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label className="text-base font-medium">Marketing-Cookies</Label>
                            <p className="text-sm text-muted-foreground">
                              Werden verwendet, um relevante Werbung anzuzeigen.
                            </p>
                          </div>
                          <Switch 
                            checked={preferences.marketing}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ ...prev, marketing: checked }))
                            }
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline" onClick={() => setShowSettings(false)}>
                          Abbrechen
                        </Button>
                        <Button onClick={saveSettings} className="bg-tastonetti-red hover:bg-tastonetti-red-dark">
                          Einstellungen speichern
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBanner(false)}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}