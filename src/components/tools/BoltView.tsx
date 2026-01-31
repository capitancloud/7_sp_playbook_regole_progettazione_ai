import { 
  ArrowLeft, 
  Zap, 
  ExternalLink,
  Chrome,
  Rocket,
  Shield,
  Timer,
  Wrench,
  AlertTriangle,
  CreditCard,
  Target,
  Sparkles,
  RefreshCw,
  Globe,
  Cpu,
  Package,
  Eye,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BoltViewProps {
  onBack: () => void;
}

export function BoltView({ onBack }: BoltViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Torna ai Tools
      </Button>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-3/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-phase-4/15 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-3/15 border border-phase-3/40">
              <Chrome className="h-4 w-4 text-phase-3" />
              <span className="text-sm font-semibold text-phase-3">WebContainers</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Zero Latency</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Bolt.new</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Creato da <span className="text-foreground font-medium">StackBlitz</span>, Bolt.new 
                fa girare <span className="text-phase-3 font-medium">Node.js direttamente nel browser</span> grazie 
                ai WebContainers. Nessun server remoto: il tuo browser diventa il sistema operativo.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Timer className="h-4 w-4 text-phase-3" />
                  <span className="text-sm">Avvio in <span className="font-bold text-phase-3">millisecondi</span></span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">Sandbox <span className="font-bold text-primary">sicura</span></span>
                </div>
              </div>
            </div>

            {/* Logo/Icon Area */}
            <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-phase-3/20 to-phase-4/20 border border-phase-3/30">
              <Zap className="h-12 w-12 text-phase-3" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-phase-3 text-phase-3-foreground font-medium hover:bg-phase-3/90 transition-colors"
            >
              Prova Bolt.new
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* WebContainers Section */}
      <div className="relative overflow-hidden rounded-xl border border-phase-3/30 bg-gradient-to-br from-phase-3/5 to-transparent p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-phase-3/10 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15">
              <Cpu className="h-5 w-5 text-phase-3" />
            </div>
            <h2 className="text-xl font-semibold">La "Secret Sauce": WebContainers</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            A differenza di Replit che accende server remoti, Bolt.new esegue Node.js 
            <span className="text-phase-3 font-medium"> direttamente nel tuo Chrome</span>. 
            Il tuo browser diventa il sistema operativo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Timer,
                title: "Avvio Istantaneo",
                description: "Nessun container da avviare. Pronto in millisecondi, non in 30 secondi."
              },
              {
                icon: Shield,
                title: "Sicurezza Sandbox",
                description: "Il codice gira nella 'sabbiera' del browser. Non può scappare o danneggiare."
              },
              {
                icon: CreditCard,
                title: "Costo Ridotto",
                description: "Usano la TUA CPU, non i loro server. Servizio più reattivo a meno costi."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-phase-3/30 transition-colors"
              >
                <item.icon className="h-5 w-5 text-phase-3 mb-2" />
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Funzionalità Killer */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Funzionalità Killer</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Full-Stack nel Browser */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-3/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-3/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-3/15">
                <Package className="h-6 w-6 text-phase-3" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Full-Stack nel Browser
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-3/20 text-phase-3">React/Next/Remix</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bolt eccelle con framework moderni: <span className="text-foreground">Remix, Next.js, SvelteKit, Astro</span>. 
                  Scrivi "Voglio un sito e-commerce con carrello", lui genera il codice, installa npm in secondi e 
                  l'anteprima appare subito. <span className="text-phase-3 font-medium">Nessun setup locale</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Auto-Fix */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Auto-Fix (Debug Loop)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Self-Healing</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quando appare un errore, Bolt non si limita a mostrartelo. C'è un pulsante 
                  <span className="text-foreground font-medium"> "Fix"</span> o puoi dire "C'è un errore". 
                  Lui legge il terminale (nel browser), <span className="text-primary font-medium">capisce il contesto e corregge</span>. 
                  Molto bravo a uscire dai guai da solo.
                </p>
              </div>
            </div>
          </div>

          {/* Deploy */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-4/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-4/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-4/15">
                <Globe className="h-6 w-6 text-phase-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Deploy su Netlify/Vercel
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-4/20 text-phase-4">One-Click</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bolt ha un pulsante <span className="text-foreground font-medium">"Deploy"</span> che pubblica 
                  gratuitamente su Netlify. Da <span className="text-phase-4 font-medium">"Prompt" a "Sito Online HTTPS"</span> il 
                  passaggio è fluidissimo. Perfetto per il web moderno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando Usarlo */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15">
            <Target className="h-5 w-5 text-phase-3" />
          </div>
          <h2 className="text-xl font-semibold">Quando è Indispensabile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Dev Frontend/Fullstack",
              description: "Vuoi provare Framer Motion con React? Bolt è il posto più veloce al mondo per farlo.",
              icon: Rocket
            },
            {
              title: "MVP Usa e Getta",
              description: "Calcolatore di mutui o tool interno? Bolt gestisce benissimo lo 'stato' dell'app.",
              icon: Zap
            },
            {
              title: "Ideazione Visiva",
              description: "Il focus è avere sempre l'anteprima visibile e funzionante accanto al codice.",
              icon: Eye
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-phase-3/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-5 w-5 text-phase-3" />
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Punti di Debolezza */}
      <div className="relative overflow-hidden rounded-xl border border-destructive/30 bg-destructive/5 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/15">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-xl font-semibold">Punti di Debolezza e Rischi</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Limiti del Browser",
              description: "I WebContainers sono magici ma non sono un vero Linux. Database complessi o librerie C/C++ native potrebbero non funzionare. Più limitato di Replit o Cursor."
            },
            {
              title: "Token Limits",
              description: "Se il progetto cresce, ogni modifica richiede 'rileggere' tutto. Si finisce spesso nel limite giornaliero anche col piano a pagamento."
            },
            {
              title: "Gestione Database",
              description: "A differenza di Lovable (Supabase) o Replit (DB integrato), Bolt si affida a DB locali temporanei o chiavi API esterne. Meno 'tutto incluso' sui dati."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15">
            <CreditCard className="h-5 w-5 text-phase-3" />
          </div>
          <h2 className="text-2xl font-semibold">Prezzi e Piani</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Free */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
            <h3 className="text-lg font-semibold mb-3">Free</h3>
            <ul className="space-y-2">
              {[
                "Crea progetti e vedi la magia",
                "Limite giornaliero token AI molto basso",
                "Dopo poche interazioni serie, ti blocca"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="relative overflow-hidden rounded-xl border border-phase-3/50 bg-gradient-to-br from-phase-3/10 to-transparent p-6">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-phase-3/20 text-phase-3">
                Popolare
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Pro</h3>
            <p className="text-2xl font-bold text-phase-3 mb-3">~$20<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <ul className="space-y-2">
              {[
                "~10 Milioni di Token inclusi",
                "Progetti privati",
                "Accesso prioritario"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-3 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-phase-3/10 border border-phase-3/30">
              <p className="text-xs text-phase-3">
                <strong>Attenzione:</strong> Su progetti grandi, anche il piano Pro può esaurirsi velocemente 
                perché il contesto (tutto il codice inviato all'AI) consuma molto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-3/30 bg-gradient-to-br from-phase-3/10 via-card to-card p-8">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-3/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-3/20">
              <Zap className="h-6 w-6 text-phase-3" />
            </div>
            <h2 className="text-2xl font-bold">Verdetto Finale</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bolt.new è lo strumento <span className="text-phase-3 font-semibold">più veloce e fluido</span> per 
              lo sviluppo Web React/Next.js.
            </p>

            <div className="p-4 rounded-xl bg-phase-3/10 border border-phase-3/30">
              <p className="text-foreground">
                <span className="font-semibold">Se il tuo obiettivo è costruire</span> interfacce web, landing page dinamiche 
                o app SaaS basate su JavaScript/TypeScript, è <span className="text-phase-3 font-semibold">fenomenale</span>.
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <Wrench className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Nota tecnica:</span> È meno potente di Replit per backend 
                pesante (Python, Java, C++), ma per il web moderno è spesso superiore per velocità e pulizia dell'ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
