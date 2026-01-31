import { 
  ArrowLeft, 
  Github, 
  ExternalLink,
  Bot,
  Sparkles,
  Shield,
  AlertTriangle,
  CreditCard,
  Target,
  CheckCircle2,
  Wrench,
  Crown,
  GitPullRequest,
  Lightbulb,
  Layers,
  Building2,
  Zap,
  Users,
  Brain,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GitHubCopilotViewProps {
  onBack: () => void;
}

export function GitHubCopilotView({ onBack }: GitHubCopilotViewProps) {
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
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-cycle/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-phase-7/15 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-cycle/15 border border-phase-cycle/40">
              <Crown className="h-4 w-4 text-phase-cycle" />
              <span className="text-sm font-semibold text-phase-cycle">Il Padrino</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Enterprise Ready</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">GitHub Copilot</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Il <span className="text-phase-cycle font-medium">"padrino"</span> degli assistenti AI, nato da 
                Microsoft e OpenAI. Non è più solo autocomplete: oggi include 
                <span className="text-foreground font-medium"> Copilot Workspace, Chat e Agenti Autonomi</span>. 
                Funziona dove lavori già (VS Code, JetBrains, Xcode).
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Layers className="h-4 w-4 text-phase-cycle" />
                  <span className="text-sm"><span className="font-bold text-phase-cycle">Multi-IDE</span> support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm"><span className="font-bold text-primary">IP Indemnity</span></span>
                </div>
              </div>
            </div>

            {/* Logo/Icon Area */}
            <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-phase-cycle/20 to-phase-7/20 border border-phase-cycle/30">
              <Github className="h-12 w-12 text-phase-cycle" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a 
              href="https://github.com/features/copilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-phase-cycle text-phase-cycle-foreground font-medium hover:bg-phase-cycle/90 transition-colors"
            >
              Prova GitHub Copilot
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Funzionalità Killer 2025/2026 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Le Nuove Funzionalità Killer (2025/2026)</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Copilot Workspace */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-cycle/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-cycle/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-cycle/15">
                <Lightbulb className="h-6 w-6 text-phase-cycle" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Copilot Workspace (Il Tavolo di Lavoro)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-cycle/20 text-phase-cycle">Nuovo</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Risposta diretta a Replit e Cursor. Non inizi scrivendo codice, ma 
                  <span className="text-foreground font-medium"> descrivendo un problema in linguaggio naturale</span>.
                </p>
                <div className="p-3 rounded-lg bg-phase-cycle/10 border border-phase-cycle/30">
                  <p className="text-sm text-foreground">
                    Tu scrivi: <span className="italic">"Aggiungi notifiche email quando un utente si registra"</span> 
                    → Lui analizza, propone un <span className="text-phase-cycle font-medium">Piano</span> ("Modificherò questi 3 file"), 
                    e se approvi, scrive il codice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coding Agent */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Coding Agent (Novità Pro+)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Autonomo</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Non è più solo un assistente passivo. Puoi <span className="text-foreground font-medium">assegnare 
                  una Issue di GitHub direttamente a Copilot</span>.
                </p>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <div className="flex items-start gap-2">
                    <GitPullRequest className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      Assegni il bug #123 a Copilot → Lui legge, trova il codice rotto, corregge, 
                      esegue i test e <span className="text-primary font-medium">apre una Pull Request</span> pronta per la review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modelli Multipli */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-7/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-7/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-7/15">
                <Brain className="h-6 w-6 text-phase-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Modelli Multipli
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-7/20 text-phase-7">Flessibile</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Non più solo GPT. Ora accesso a <span className="text-foreground font-medium">Claude 3.5 Sonnet</span> e 
                  <span className="text-foreground font-medium"> Gemini</span>. Scegli il "cervello" migliore per il compito 
                  (es. Claude è spesso meglio per <span className="text-phase-7 font-medium">refactoring complesso</span>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando Usarlo */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-cycle/15">
            <Target className="h-5 w-5 text-phase-cycle" />
          </div>
          <h2 className="text-xl font-semibold">Quando è Indispensabile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Enterprise & Sicurezza",
              description: "Banche e multinazionali: spesso l'unico tool approvato. Imbattibile su compliance legale (IP Indemnity).",
              icon: Building2
            },
            {
              title: "Se Ami il Tuo IDE",
              description: "Usi JetBrains o Visual Studio classico e non vuoi passare a un fork di VS Code? Scelta obbligata.",
              icon: Code2
            },
            {
              title: "Workflow GitHub-Based",
              description: "Il tuo team vive di Pull Request e Issues? L'integrazione nativa è imbattibile.",
              icon: GitPullRequest
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-phase-cycle/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-5 w-5 text-phase-cycle" />
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
              title: "Integrazione 'Esterna'",
              description: "Essendo un'estensione e non controllando l'editor, a volte ha meno contesto. Non 'vede' sempre l'errore nel terminale con la stessa profondità di Cursor/Windsurf."
            },
            {
              title: "Meno 'Snappy' nel Refactoring",
              description: "Se devi riscrivere 200 righe al volo, la chat laterale risulta più macchinosa rispetto al 'Composer' di Cursor (Ctrl+I) che scrive direttamente nel file."
            },
            {
              title: "Costi per le Feature Vere",
              description: "Le funzioni magiche come gli Agenti autonomi sono spesso bloccate dietro i piani più costosi (Pro+ a $39/mese)."
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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-cycle/15">
            <CreditCard className="h-5 w-5 text-phase-cycle" />
          </div>
          <h2 className="text-2xl font-semibold">Prezzi e Piani (2026)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Free */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Free</h3>
            <p className="text-xl font-bold text-muted-foreground mb-3">Gratis</p>
            <ul className="space-y-2">
              {[
                "2.000 completamenti/mese",
                "50 messaggi Chat/mese",
                "Ottimo per iniziare"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Pro</h3>
            <p className="text-xl font-bold text-phase-cycle mb-1">$10<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <ul className="space-y-2 mt-3">
              {[
                "Completamenti illimitati",
                "Chat illimitata",
                "Modelli standard"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-cycle shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro+ */}
          <div className="relative overflow-hidden rounded-xl border border-primary/50 bg-gradient-to-br from-primary/10 to-transparent p-5">
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                Power Users
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Pro+</h3>
            <p className="text-xl font-bold text-primary mb-1">$39<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <ul className="space-y-2 mt-3">
              {[
                "Agenti Autonomi inclusi",
                "Modelli premium (o-series, Opus)",
                "Competitore diretto di Cursor Pro"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Business</h3>
            <p className="text-xl font-bold text-phase-cycle mb-1">$19<span className="text-sm font-normal text-muted-foreground">/utente/mese</span></p>
            <ul className="space-y-2 mt-3">
              {[
                "Gestione centralizzata",
                "Policy di sicurezza",
                "Per team"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-cycle shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="relative overflow-hidden rounded-xl border border-phase-cycle/50 bg-gradient-to-br from-phase-cycle/10 to-transparent p-5 md:col-span-2 lg:col-span-2">
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-phase-cycle/20 text-phase-cycle">
                Enterprise
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Enterprise</h3>
            <p className="text-xl font-bold text-phase-cycle mb-1">$39<span className="text-sm font-normal text-muted-foreground">/utente/mese</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <ul className="space-y-2">
                {[
                  "Per grandi aziende",
                  "Knowledge Bases aziendali"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-phase-cycle shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-lg bg-phase-cycle/10 border border-phase-cycle/30">
                <p className="text-xs text-muted-foreground">
                  Può rispondere a: <span className="text-foreground italic">"Come gestiamo l'autenticazione in questa azienda?"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-cycle/30 bg-gradient-to-br from-phase-cycle/10 via-card to-card p-8">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-cycle/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-cycle/20">
              <Github className="h-6 w-6 text-phase-cycle" />
            </div>
            <h2 className="text-2xl font-bold">Verdetto Finale</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-phase-cycle/10 border border-phase-cycle/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-phase-cycle" />
                  <h4 className="font-medium text-phase-cycle">Rimani su Copilot se...</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• La tua azienda lo paga</li>
                  <li>• Usi IDE diversi da VS Code (JetBrains)</li>
                  <li>• Vuoi massima sicurezza legale</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h4 className="font-medium text-foreground">Passa a Cursor/Windsurf se...</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vuoi esperienza AI più fluida e integrata</li>
                  <li>• Sei disposto a cambiare editor</li>
                  <li>• Vuoi massimo controllo sul contesto</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <Wrench className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">In sintesi:</span> GitHub Copilot è il 
                <span className="text-phase-cycle font-medium"> "safe bet"</span> per le aziende e chi non vuole cambiare ambiente. 
                Ma per l'esperienza AI più cutting-edge, i competitor stanno guadagnando terreno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
