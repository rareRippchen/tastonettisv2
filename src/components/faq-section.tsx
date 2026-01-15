import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Was sind die Tastonettis?",
    answer: "Die Tastonettis sind ein Akkordeonorchester aus Berlin, gegründet 1989. Wir spielen ein breites Repertoire von klassischer Musik über Tango bis hin zu modernen Arrangements und treten bei verschiedenen Veranstaltungen in Berlin und darüber hinaus auf."
  },
  {
    question: "Kann man die Tastonettis für private Veranstaltungen buchen?",
    answer: "Ja, wir spielen gerne bei privaten Feiern wie Hochzeiten, Geburtstagen und Jubiläen sowie bei Firmenveranstaltungen und kulturellen Events. Kontaktieren Sie uns einfach über das Kontaktformular oder per E-Mail für eine unverbindliche Anfrage."
  },
  {
    question: "Wie kann ich Mitglied bei den Tastonettis werden?",
    answer: "Wir freuen uns immer über neue Mitglieder! Voraussetzung sind grundlegende Akkordeonkenntnisse und die Bereitschaft, regelmäßig an den Proben teilzunehmen. Kontaktieren Sie uns für ein unverbindliches Kennenlernen und eine Schnupperprobe."
  },
  {
    question: "Wann und wo finden die Proben statt?",
    answer: "Unsere Proben finden regelmäßig in Berlin statt. Die genauen Zeiten und den Probenort teilen wir Ihnen gerne auf Anfrage mit. Interessierte sind herzlich eingeladen, bei einer Probe vorbeizuschauen."
  },
  {
    question: "Welche Musik spielen die Tastonettis?",
    answer: "Unser Repertoire ist vielfältig und umfasst klassische Stücke, Tangos, Walzer, Filmmusik, Volksmusik aus verschiedenen Ländern sowie moderne Arrangements. Wir passen unser Programm gerne an die jeweilige Veranstaltung an."
  },
  {
    question: "Was ist der Freundeskreis Tastonettis e.V.?",
    answer: "Der Freundeskreis Tastonettis e.V. ist ein gemeinnütziger Verein, der das Orchester ideell und finanziell unterstützt. Mitglieder des Freundeskreises erhalten Einladungen zu Konzerten und Veranstaltungen und tragen zur Förderung der Akkordeonmusik bei."
  },
  {
    question: "Wie kann ich die Tastonettis unterstützen?",
    answer: "Sie können uns durch eine Mitgliedschaft im Freundeskreis, durch Spenden oder einfach durch Ihren Besuch bei unseren Konzerten unterstützen. Jede Unterstützung hilft uns, die Akkordeonmusik in Berlin lebendig zu halten."
  },
  {
    question: "Wo kann ich die Tastonettis live erleben?",
    answer: "Wir treten regelmäßig bei öffentlichen Konzerten und Veranstaltungen in Berlin und Umgebung auf. Aktuelle Termine finden Sie auf unserer Website oder folgen Sie uns, um über kommende Auftritte informiert zu werden."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Häufig gestellte Fragen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen rund um die Tastonettis.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border shadow-sm px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}
