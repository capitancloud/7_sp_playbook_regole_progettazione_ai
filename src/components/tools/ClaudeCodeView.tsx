import { 
  ArrowLeft,
  Bot, 
  Brain,
  Zap,
  Terminal,
  Layers,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Trophy,
  Target,
  RefreshCw,
  FileCode,
  Database,
  Lock,
  Users,
  Clock,
  Star,
  Cpu,
  Eye,
  Search,
  GitBranch,
  ExternalLink,
  Play,
  Bug,
  Server,
  Shield,
  RotateCcw,
  Repeat,
  Map,
  Command,
  CircleDot
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ClaudeCodeViewProps {
  onBack: () => void;
}

export function ClaudeCodeView({ onBack }: ClaudeCodeViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium">Torna ai Tools</span>
      </button>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-7/30 bg-gradient-to-br from-card via-card/95 to-phase-7/5 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-phase-7/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-phase-4/10 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative">
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-7/15 border border-phase-7/40 shadow-lg shadow-phase-7/10">
              <Terminal className="h-4 w-4 text-phase-7" />
              <span className="text-sm font-bold text-phase-7">CLI Agent</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-4/15 border border-phase-4/30">
              <Star className="h-3.5 w-3.5 text-phase-4" />
              <span className="text-xs font-semibold text-phase-4">by Anthropic</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30">
              <Repeat className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Agentic Loop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-3/15 border border-phase-3/30">
              <Shield className="h-3.5 w-3.5 text-phase-3" />
              <span className="text-xs font-semibold text-phase-3">Enterprise-Ready</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="text-gradient-phase-7">Claude Code</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-phase-7/20 border border-phase-7/30 shadow-lg shadow-phase-7/20">
              <Bot className="h-8 w-8 text-phase-7" />
            </div>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Un <span className="text-phase-7 font-semibold">agente autonomo</span> che vive nel tuo terminale. 
            Tu non "entri" in Claude Code; è Claude Code che <span className="text-foreground font-medium">"entra" nel tuo computer</span>.
          </p>

          {/* CTA Button */}
          <a 
            href="https://www.anthropic.com/claude-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-phase-7 text-white font-semibold hover:bg-phase-7/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-phase-7/25"
          >
            <ExternalLink className="h-5 w-5" />
            Visita anthropic.com/claude-code
          </a>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <DollarSign className="h-5 w-5 text-phase-4" />
              <div>
                <p className="text-xs text-muted-foreground">Pricing</p>
                <p className="text-lg font-bold text-foreground">Pay-per-use</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Brain className="h-5 w-5 text-phase-7" />
              <div>
                <p className="text-xs text-muted-foreground">Modello</p>
                <p className="text-lg font-bold text-foreground">Claude 4.5</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Command className="h-5 w-5 text-phase-3" />
              <div>
                <p className="text-xs text-muted-foreground">Interfaccia</p>
                <p className="text-lg font-bold text-foreground">CLI + VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cos'è Veramente Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-phase-7/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-7/20 border border-phase-7/30">
              <Terminal className="h-6 w-6 text-phase-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cos'è Veramente</h2>
              <p className="text-sm text-phase-7 font-medium">Sotto il cofano</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Claude Code è uno <span className="text-foreground font-semibold">strumento da riga di comando (CLI)</span> sviluppato 
              direttamente da <span className="text-phase-7 font-semibold">Anthropic</span>. A differenza di Cursor o Windsurf, 
              che sono editor grafici dove tu scrivi e l'AI ti aiuta, Claude Code è un agente autonomo che vive nel tuo terminale.
            </p>

            <div className="p-5 rounded-xl bg-phase-7/5 border border-phase-7/20">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-7/20">
                  <Lock className="h-4 w-4 text-phase-7" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Come funziona</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gli dai il permesso di <span className="text-phase-7 font-medium">leggere i tuoi file</span>, 
                    <span className="text-phase-7 font-medium"> eseguire comandi di terminale</span> e 
                    <span className="text-phase-7 font-medium"> gestire Git</span>. 
                    Recentemente si è evoluto includendo anche un'estensione per VS Code e una funzione "Cowork" per desktop, 
                    ma la sua anima resta quella di un operatore da terminale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agentic Loop Section */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30 shadow-lg shadow-primary/10">
              <Repeat className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Il Concetto</h2>
              <p className="text-sm text-primary font-medium">"Agentic Loop"</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Mentre in Copilot tu chiedi e lui suggerisce, Claude Code opera in un 
            <span className="text-primary font-semibold"> loop continuo</span> di Pensiero → Azione → Osservazione:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-phase-4/20 text-phase-4 font-bold text-sm">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Tu chiedi</p>
                <p className="text-sm text-muted-foreground italic">
                  "Esegui i test, trova perché falliscono e correggi il codice."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-phase-7/20 text-phase-7 font-bold text-sm">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Lui pensa</p>
                <p className="text-sm text-muted-foreground">Analizza la richiesta</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-phase-3/20 text-phase-3 font-bold text-sm">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Lui agisce</p>
                <p className="text-sm text-muted-foreground">
                  Esegue il comando <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">npm test</code>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-phase-6/20 text-phase-6 font-bold text-sm">
                4
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Lui osserva</p>
                <p className="text-sm text-muted-foreground">Legge l'errore nel terminale</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-phase-1/20 text-phase-1 font-bold text-sm">
                5
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Lui corregge</p>
                <p className="text-sm text-muted-foreground">Modifica il file colpevole</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-sm">
                6
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Lui verifica</p>
                <p className="text-sm text-muted-foreground">
                  Rilancia i test per confermare che ora passino. 
                  <span className="text-primary font-medium"> Tutto automaticamente!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funzionalità Killer */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-3/20 border border-phase-3/30">
            <Zap className="h-6 w-6 text-phase-3" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Funzionalità Killer</h2>
            <p className="text-sm text-phase-3 font-medium">Le feature che fanno la differenza</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Reasoning Puro */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-7/30 bg-gradient-to-r from-phase-7/5 via-card to-card p-6 hover:border-phase-7/50 transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-phase-7/10 rounded-full blur-2xl" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-7/20 border border-phase-7/40 shadow-lg shadow-phase-7/10 group-hover:scale-110 transition-transform">
                <Brain className="h-7 w-7 text-phase-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Reasoning Puro</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-7/15 text-xs font-semibold text-phase-7">Claude 4.5 Sonnet</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Poiché è costruito da Anthropic, usa sempre l'ultima versione dei loro modelli (spesso in anteprima). 
                  I modelli Claude sono famosi per avere un <span className="text-phase-7 font-semibold">"context window" enorme</span> e una 
                  capacità di ragionamento logico superiore nel seguire istruzioni complesse rispetto a GPT-4o su task di programmazione lunghi.
                </p>
              </div>
            </div>
          </div>

          {/* Comprensione dell'Architettura */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-r from-phase-4/5 via-card to-card p-6 hover:border-phase-4/50 transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-phase-4/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-4/15 border border-phase-4/30 group-hover:scale-110 transition-transform">
                <Map className="h-7 w-7 text-phase-4" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Comprensione dell'Architettura</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-1/15 text-xs font-semibold text-phase-1 flex items-center gap-1">
                    <Star className="h-3 w-3" /> Top Feature
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Puoi dirgli: <span className="text-phase-4 font-medium italic">"Fammi una mappa di come funziona l'autenticazione in questo progetto"</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lui leggerà <span className="text-foreground font-semibold">50 file</span>, si costruirà una mappa mentale e ti spiegherà tutto, 
                  citando i file precisi. È fenomenale per l'<span className="text-phase-4 font-semibold">onboarding in nuovi progetti</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Sicurezza e Privacy */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card to-card/80 p-6 hover:border-phase-3/40 transition-all duration-300">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-phase-3/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-3/15 border border-phase-3/30 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7 text-phase-3" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Sicurezza e Privacy</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-3/15 text-xs font-semibold text-phase-3">Enterprise-First</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ha controlli molto granulari. Ti chiede sempre <span className="text-phase-3 font-semibold">conferma prima di eseguire comandi "pericolosi"</span> 
                  (come cancellare file o fare push su git) a meno che tu non gli dia il permesso di procedere in autonomia 
                  (modalità <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">-y</code>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando è Indispensabile */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-4/30 bg-gradient-to-br from-phase-4/5 via-card to-card p-8">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-phase-4/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/30">
              <Target className="h-6 w-6 text-phase-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Quando è Indispensabile</h2>
              <p className="text-sm text-phase-4 font-medium">I casi d'uso ideali</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15 mb-4">
                <RefreshCw className="h-5 w-5 text-phase-4" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Refactoring su Larga Scala</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Rinomina questa variabile in tutto il progetto, aggiorna i test e verifica che non si sia rotto nulla."
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-6/15 mb-4">
                <GitBranch className="h-5 w-5 text-phase-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Gestione Git</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Analizza le mie modifiche non committate, scrivi un messaggio di commit dettagliato e fai il commit."
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-7/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-7/15 mb-4">
                <Server className="h-5 w-5 text-phase-7" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Server Remoti</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Poiché è una CLI, puoi installarlo su un server remoto via <span className="text-phase-7 font-medium">SSH</span> dove non hai UI 
                e debuggare direttamente sul server di produzione.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Punti di Debolezza */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-1/30 bg-gradient-to-br from-phase-1/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-phase-1/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-1/20 border border-phase-1/30">
              <AlertTriangle className="h-6 w-6 text-phase-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Punti di Debolezza</h2>
              <p className="text-sm text-phase-1 font-medium">Cosa tenere a mente</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Mancanza di UI (Interfaccia Grafica)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Se sei abituato a vedere le differenze (diff) colorate in rosso e verde prima di accettarle, 
                  il terminale può risultare ostico. Devi fidarti molto o leggere attentamente il testo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Costo dei Token</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A differenza di Cursor che ha un piano flat (fisso), Claude Code spesso consuma token API in base a quanto "legge". 
                  Se gli fai analizzare un progetto enorme ogni volta, il costo può salire rapidamente 
                  <span className="text-phase-1 font-medium"> ($5-$10 in un pomeriggio intenso)</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">"Cecità" Visiva</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Non può "vedere" il browser o l'app in esecuzione (a meno di usare screenshot, ma è macchinoso). 
                  Lavora solo sul codice testuale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prezzi */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/30">
            <DollarSign className="h-6 w-6 text-phase-4" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Prezzi e Piani</h2>
            <p className="text-sm text-phase-4 font-medium">Modello diverso dagli editor classici</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Claude Pro */}
          <div className="relative overflow-hidden rounded-xl border border-phase-7/30 bg-gradient-to-br from-phase-7/5 to-card p-6">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-phase-7/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-5 w-5 text-phase-7" />
                <h3 className="text-xl font-bold text-foreground">Piano Claude Pro</h3>
              </div>
              <p className="text-3xl font-bold text-phase-7 mb-4">$20<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Accesso incluso a Claude Code</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Anche per Team</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Limiti generosi di utilizzo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pay-per-use */}
          <div className="relative overflow-hidden rounded-xl border border-phase-4/40 bg-gradient-to-br from-phase-4/10 to-card p-6 shadow-lg shadow-phase-4/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-phase-4/15 rounded-full blur-2xl" />
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-phase-4/20 border border-phase-4/30">
              <span className="text-xs font-bold text-phase-4">FLESSIBILE</span>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-phase-4" />
                <h3 className="text-xl font-bold text-foreground">Pay-per-use (API)</h3>
              </div>
              <p className="text-3xl font-bold text-phase-4 mb-1">$0.01+<span className="text-sm font-normal text-muted-foreground">/1K token</span></p>
              <p className="text-xs text-muted-foreground mb-4">Paghi esattamente per quanto lo usi</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span><span className="text-foreground font-medium">Pro:</span> Se usi poco, paghi centesimi</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-phase-1 shrink-0" />
                  <span><span className="text-foreground font-medium">Contro:</span> Debug intenso = $5-10/pomeriggio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-7/30 bg-gradient-to-br from-phase-7/5 via-card to-card p-8">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-phase-7/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-7/20 border border-phase-7/30">
              <Trophy className="h-6 w-6 text-phase-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Verdetto Finale</h2>
              <p className="text-sm text-phase-7 font-medium">Per chi è pensato?</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-phase-7/10 border border-phase-7/30 mb-6">
            <p className="text-lg font-semibold text-foreground text-center">
              È lo strumento per <span className="text-phase-7">"Power User"</span> e <span className="text-phase-7">DevOps</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scegli Claude Code */}
            <div className="p-6 rounded-xl bg-phase-7/10 border border-phase-7/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-7/20">
                  <CheckCircle2 className="h-5 w-5 text-phase-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Perfetto se:</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-7 shrink-0 mt-0.5" />
                  <span>Vivi nel <span className="text-phase-7 font-medium">terminale</span></span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-7 shrink-0 mt-0.5" />
                  <span>Ami l'idea di un assistente che fa il lavoro sporco mentre guardi</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-7 shrink-0 mt-0.5" />
                  <span>Lavori su server remoti via SSH</span>
                </li>
              </ul>
            </div>

            {/* Evita se */}
            <div className="p-6 rounded-xl bg-phase-1/10 border border-phase-1/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-1/20">
                  <XCircle className="h-5 w-5 text-phase-1" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Evita se:</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-phase-1 shrink-0 mt-0.5" />
                  <span>Sei un <span className="text-phase-1 font-medium">designer</span> o frontend developer</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-phase-1 shrink-0 mt-0.5" />
                  <span>Hai bisogno di vedere visivamente cosa succede</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-phase-1 shrink-0 mt-0.5" />
                  <span>Preferisci <span className="text-primary font-medium">Cursor</span> o <span className="text-phase-6 font-medium">Windsurf</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
