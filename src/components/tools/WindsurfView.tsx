import { 
  ArrowLeft,
  Wind, 
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
  Gauge,
  Workflow,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WindsurfViewProps {
  onBack: () => void;
}

export function WindsurfView({ onBack }: WindsurfViewProps) {
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
      <div className="relative overflow-hidden rounded-2xl border border-phase-6/30 bg-gradient-to-br from-card via-card/95 to-phase-6/5 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-phase-6/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-phase-4/10 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative">
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-6/15 border border-phase-6/40 shadow-lg shadow-phase-6/10">
              <Wind className="h-4 w-4 text-phase-6" />
              <span className="text-sm font-bold text-phase-6">Agentic IDE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-4/15 border border-phase-4/30">
              <Terminal className="h-3.5 w-3.5 text-phase-4" />
              <span className="text-xs font-semibold text-phase-4">Deep Terminal</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-7/15 border border-phase-7/30">
              <GitBranch className="h-3.5 w-3.5 text-phase-7" />
              <span className="text-xs font-semibold text-phase-7">Fork di VS Code</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-3/15 border border-phase-3/30">
              <Zap className="h-3.5 w-3.5 text-phase-3" />
              <span className="text-xs font-semibold text-phase-3">by Codeium</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="text-gradient-phase-6">Windsurf</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-phase-6/20 border border-phase-6/30 shadow-lg shadow-phase-6/20">
              <Wind className="h-8 w-8 text-phase-6" />
            </div>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Il primo <span className="text-phase-6 font-semibold">"Agentic IDE"</span> che non si limita a suggerire codice, 
            ma agisce come un <span className="text-foreground font-medium">agente autonomo</span> che collabora con te.
          </p>

          {/* CTA Button */}
          <a 
            href="https://codeium.com/windsurf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-phase-6 text-white font-semibold hover:bg-phase-6/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-phase-6/25"
          >
            <ExternalLink className="h-5 w-5" />
            Visita windsurf.com
          </a>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <DollarSign className="h-5 w-5 text-phase-4" />
              <div>
                <p className="text-xs text-muted-foreground">Piano Pro</p>
                <p className="text-lg font-bold text-foreground">$10-15/mese</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Gauge className="h-5 w-5 text-phase-3" />
              <div>
                <p className="text-xs text-muted-foreground">Autocomplete</p>
                <p className="text-lg font-bold text-foreground">Super Fast</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Star className="h-5 w-5 text-phase-4" />
              <div>
                <p className="text-xs text-muted-foreground">Free Tier</p>
                <p className="text-lg font-bold text-foreground">Generoso</p>
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
              <Brain className="h-6 w-6 text-phase-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cos'è Veramente</h2>
              <p className="text-sm text-phase-7 font-medium">Sotto il cofano</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Anche Windsurf è un <span className="text-foreground font-semibold">fork di VS Code</span>. Come per Cursor, scarichi un editor intero, non un plugin. 
              È creato da <span className="text-phase-6 font-semibold">Codeium</span>, un'azienda che fino a poco tempo fa produceva solo un'estensione (plugin) di autocompletamento 
              molto popolare perché gratuita e velocissima.
            </p>

            <div className="p-5 rounded-xl bg-phase-6/5 border border-phase-6/20">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-6/20">
                  <Bot className="h-4 w-4 text-phase-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">L'Idea di Base</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hanno preso la loro tecnologia proprietaria e l'hanno fusa con l'interfaccia di VS Code per creare quello che chiamano 
                    il <span className="text-phase-6 font-semibold">"Primo Agentic IDE"</span> (IDE Agentico). L'AI non deve solo suggerire codice, 
                    ma deve agire come un agente autonomo che collabora con te.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cascade: Il Cuore Pulsante */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-6/30 bg-gradient-to-br from-phase-6/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-phase-6/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-6/20 border border-phase-6/30 shadow-lg shadow-phase-6/10">
              <Workflow className="h-6 w-6 text-phase-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Il Cuore Pulsante</h2>
              <p className="text-sm text-phase-6 font-medium">Cascade</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Mentre Cursor brilla per la modifica dei file (Composer), Windsurf punta tutto su una tecnologia chiamata 
            <span className="text-phase-6 font-semibold"> Cascade</span>. È il "cervello" che unisce tre cose in un flusso unico:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-colors text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/15 mb-3">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">L'Editor</h3>
              <p className="text-xs text-muted-foreground">Il codice che scrivi</p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-colors text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-phase-4/15 mb-3">
                <Terminal className="h-6 w-6 text-phase-4" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Il Terminale</h3>
              <p className="text-xs text-muted-foreground">I comandi che esegui</p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-colors text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-phase-7/15 mb-3">
                <Layers className="h-6 w-6 text-phase-7" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Il Contesto</h3>
              <p className="text-xs text-muted-foreground">La struttura del progetto</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-phase-4/5 border border-phase-4/20">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-4/20">
                <Eye className="h-4 w-4 text-phase-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">La Differenza Chiave</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In molti editor AI, il terminale è "cieco". In Windsurf, Cascade <span className="text-phase-4 font-semibold">"legge" costantemente il terminale</span>. 
                  Se esegui un comando e ottieni un errore, Cascade lo vede <span className="text-foreground font-medium">prima che tu glielo copi-incolli</span> e sa già come risolverlo.
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
          {/* Deep Terminal Integration */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-r from-phase-4/5 via-card to-card p-6 hover:border-phase-4/50 transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-phase-4/10 rounded-full blur-2xl" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/40 shadow-lg shadow-phase-4/10 group-hover:scale-110 transition-transform">
                <Terminal className="h-7 w-7 text-phase-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Deep Terminal Integration</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-1/15 text-xs font-semibold text-phase-1 flex items-center gap-1">
                    <Star className="h-3 w-3" /> Top Feature
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questo è il vero punto di forza. Immagina di lanciare il server e vedere un errore lunghissimo in rosso. 
                  In Windsurf, puoi cliccare un tasto (o spesso lo suggerisce lui) e l'AI analizza l'output del terminale, trova il file colpevole, e propone la correzione.
                </p>

                <div className="p-4 rounded-lg bg-muted/50 border border-border/50 mb-4">
                  <div className="flex items-start gap-3">
                    <Bug className="h-5 w-5 text-phase-1 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Esempio pratico:</p>
                      <p className="text-sm text-muted-foreground italic">"Hey, manca il modulo 'axios'"</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Windsurf ti chiederà: <span className="text-phase-4 font-medium">"Vuoi che esegua npm install axios per te?"</span> e lo farà.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cascade Flow */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-6/30 bg-gradient-to-r from-phase-6/5 via-card to-card p-6 hover:border-phase-6/50 transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-phase-6/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-6/15 border border-phase-6/30 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-7 w-7 text-phase-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Cascade Flow</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-6/15 text-xs font-semibold text-phase-6">Chat + Tools</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  È un'interfaccia di chat che non si limita a rispondere. Ha accesso agli <span className="text-phase-6 font-semibold">strumenti (Tools)</span>. 
                  Se chiedi: "Dove è definita la variabile utente?", lui non tira a indovinare. 
                  Esegue una <span className="text-foreground font-medium">ricerca grep reale</span> nel progetto e ti mostra i risultati. 
                  Agisce come un sviluppatore umano che usa gli strumenti di ricerca.
                </p>
              </div>
            </div>
          </div>

          {/* Super-Fast Autocomplete */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card to-card/80 p-6 hover:border-phase-3/40 transition-all duration-300">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-phase-3/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-3/15 border border-phase-3/30 group-hover:scale-110 transition-transform">
                <Gauge className="h-7 w-7 text-phase-3" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Codeium Super-Fast Autocomplete</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-3/15 text-xs font-semibold text-phase-3">Low Latency</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Poiché Codeium nasce come azienda di autocompletamento (rivale di Copilot), il loro completamento del codice "mentre scrivi" (ghost text) 
                  è <span className="text-phase-3 font-semibold">estremamente veloce e a bassa latenza</span>, spesso percepito come più scattante di quello di GitHub Copilot standard.
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
                <Bug className="h-5 w-5 text-phase-4" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Debug da Terminale</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Se il tuo lavoro comporta molti script, log di server, o errori di compilazione oscuri, 
                Windsurf ti salva la vita perché <span className="text-phase-4 font-medium">legge i log per te</span>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-6/15 mb-4">
                <Workflow className="h-5 w-5 text-phase-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Sviluppo "Flow"</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Se preferisci un assistente che ti <span className="text-phase-6 font-medium">segue passo-passo</span> e ti propone i comandi 
                da lanciare nel terminale invece di doverli digitare tu.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-3/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15 mb-4">
                <DollarSign className="h-5 w-5 text-phase-3" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Alternative ai Costi</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Spesso il piano gratuito o i tier di ingresso di Codeium sono percepiti come 
                <span className="text-phase-3 font-medium"> più generosi o flessibili</span> rispetto ai concorrenti.
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
                <h4 className="font-semibold text-foreground mb-1">Meno "Aggressivo" sui Multi-file</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mentre il "Composer" di Cursor è incredibile nel riscrivere 10 file contemporaneamente per creare una feature da zero, 
                  Windsurf è leggermente più conservativo. È più bravo a seguire il flusso che a stravolgere l'architettura in un colpo solo 
                  (anche se stanno migliorando velocemente).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">UI/UX</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  È una questione di gusti, ma alcuni trovano l'interfaccia di Cascade un po' più invasiva 
                  rispetto alla pulizia di Cursor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Ecosistema</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  È arrivato dopo Cursor. La community è più piccola, quindi trovi meno tutorial su YouTube 
                  o "trucchi" specifici rispetto a Cursor.
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
            <p className="text-sm text-phase-4 font-medium">Codeium è aggressiva per rubare utenti</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Free */}
          <div className="relative overflow-hidden rounded-xl border border-phase-3/30 bg-gradient-to-br from-phase-3/5 to-card p-6">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-phase-3/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-phase-3" />
                <h3 className="text-xl font-bold text-foreground">Free (Individuale)</h3>
              </div>
              <p className="text-3xl font-bold text-phase-3 mb-4">$0<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Accesso <span className="text-foreground font-medium">illimitato</span> ai modelli "Base"</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Uso limitato dei modelli avanzati (GPT-4o, Claude)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Per molti hobbisti, basta e avanza</span>
                </li>
              </ul>
              <div className="mt-4 px-3 py-2 rounded-lg bg-phase-3/10 border border-phase-3/20">
                <p className="text-xs text-phase-3 font-medium">💡 Più generoso del free tier di Cursor</p>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="relative overflow-hidden rounded-xl border border-phase-6/40 bg-gradient-to-br from-phase-6/10 to-card p-6 shadow-lg shadow-phase-6/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-phase-6/15 rounded-full blur-2xl" />
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-phase-6/20 border border-phase-6/30">
              <span className="text-xs font-bold text-phase-6">CONSIGLIATO</span>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-phase-6" />
                <h3 className="text-xl font-bold text-foreground">Pro</h3>
              </div>
              <p className="text-3xl font-bold text-phase-6 mb-1">$10-15<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <p className="text-xs text-muted-foreground mb-4">Spesso sotto i $20 standard di mercato</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span><span className="text-foreground font-medium">Uso illimitato</span> dei modelli premium</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>GPT-4o, Claude 3.5 Sonnet inclusi</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Zero-data-retention (privacy) per il codice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Verdetto: Cursor vs Windsurf */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-phase-6/5 p-8">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-phase-6/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-phase-6/20 border border-primary/30">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Verdetto Finale</h2>
              <p className="text-sm text-primary font-medium">Cursor vs Windsurf?</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6 font-medium">È la grande battaglia del momento.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scegli Windsurf */}
            <div className="p-6 rounded-xl bg-phase-6/10 border border-phase-6/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-6/20">
                  <Wind className="h-5 w-5 text-phase-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Scegli Windsurf se:</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-6 shrink-0 mt-0.5" />
                  <span>Ti piace che l'AI gestisca il terminale e corregga i bug al volo</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-6 shrink-0 mt-0.5" />
                  <span>Preferisci un'esperienza più guidata e "fluida" (Flow)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-6 shrink-0 mt-0.5" />
                  <span>Vuoi risparmiare o sfruttare un piano gratuito migliore</span>
                </li>
              </ul>
            </div>

            {/* Rimani su Cursor */}
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Rimani su Cursor se:</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Vuoi la potenza bruta di "Composer" per generare intere feature</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Lavori su molti file contemporaneamente</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Ti piace il controllo totale del codice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
