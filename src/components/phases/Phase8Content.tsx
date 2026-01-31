import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Terminal,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  FileInput,
  Clock,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Save,
  Shield,
  FolderCheck,
  MapPin,
  GitCommit,
  BookOpen,
} from "lucide-react";

interface PromptUnit {
  id: string;
  number: string;
  title: string;
  whenToUse: string;
  inputRequired: string;
  prompt: string;
  expectedOutput: string[];
  commonErrors: string[];
  didacticNote: string;
}

const promptUnits: PromptUnit[] = [
  {
    id: "8.1",
    number: "8.1",
    title: "Riepilogo della feature o della sessione",
    whenToUse: "Alla fine di una feature o di una sessione di lavoro significativa.",
    inputRequired: "Nome feature ([nome_feature]) oppure contesto della sessione.",
    prompt: `Abbiamo completato la feature [nome_feature] / la sessione di lavoro di oggi.

Fai un riepilogo chiaro e ordinato che includa:
- cosa è stato aggiunto o modificato
- quali file principali sono stati toccati
- come testare manualmente ciò che abbiamo fatto
- limiti o cose da migliorare in futuro`,
    expectedOutput: [
      "Riepilogo comprensibile e completo",
      "Lista dei file toccati",
      "Indicazioni di test manuale",
      "Limiti esplicitati",
    ],
    commonErrors: [
      "Riepiloghi vaghi o incompleti",
      "File importanti dimenticati",
      "Nessuna indicazione su come testare",
      "Accettare il riepilogo senza verificarlo",
    ],
    didacticNote: "Questo prompt allinea te e Cursor su ciò che è davvero successo.",
  },
  {
    id: "8.2",
    number: "8.2",
    title: "Aggiornamento della mappa del progetto",
    whenToUse: "Dopo aver chiuso una feature o una milestone.",
    inputRequired: "Stato attuale del progetto.",
    prompt: `Aggiorna il file MAPPA_PROGETTO.md includendo:
- le feature completate
- le feature in corso
- le feature pianificate
- eventuali dipendenze tra feature

Usa un linguaggio semplice e leggibile.`,
    expectedOutput: [
      "MAPPA_PROGETTO.md aggiornata",
      "Visione dall'alto del progetto",
      "Stato chiaro delle feature",
    ],
    commonErrors: [
      "Dimenticare feature completate",
      "Non indicare dipendenze",
      "Usare linguaggio troppo tecnico",
      "Lasciare la mappa obsoleta",
    ],
    didacticNote: "Se una feature non è nella mappa, per il progetto non esiste.",
  },
  {
    id: "8.3",
    number: "8.3",
    title: "Aggiornamento del todo.md",
    whenToUse: "Subito dopo aver aggiornato la mappa del progetto.",
    inputRequired: "todo.md attuale.",
    prompt: `Aggiorna il file todo.md:
- rimuovi i task completati
- aggiungi i prossimi task concreti
- segnala eventuali blocchi o dipendenze

Mantieni la lista corta e realistica.`,
    expectedOutput: [
      "todo.md aggiornato",
      "Task realistici e concreti",
      "Evidenza di eventuali blocchi",
    ],
    commonErrors: [
      "Todo troppo lungo",
      "Task vaghi o non azionabili",
      "Mancata rimozione dei task completati",
      "Todo non allineato allo stato reale",
    ],
    didacticNote: "Il todo è lavoro operativo, non una lista dei desideri.",
  },
  {
    id: "8.4",
    number: "8.4",
    title: "Verifica di stabilità",
    whenToUse: "Prima di considerare chiusa la sessione o la feature.",
    inputRequired: "Stato attuale del progetto.",
    prompt: `Valuta lo stato attuale del progetto.

Dimmi:
- se ci sono errori noti
- se qualche parte è fragile o improvvisata
- se il codice è coerente con app_vision.md e requirements.md
- se questa versione può essere considerata stabile

Non applicare modifiche automaticamente.`,
    expectedOutput: [
      "Valutazione onesta della stabilità",
      "Elenco di fragilità note",
      "Conferma o meno della stabilità",
    ],
    commonErrors: [
      "Dichiarare stabile qualcosa che non lo è",
      "Nascondere problemi \"tanto poi\"",
      "Ignorare incoerenze con vision o requisiti",
      "Andare avanti senza verifica",
    ],
    didacticNote: "Un limite dichiarato è meglio di un problema nascosto.",
  },
  {
    id: "8.5",
    number: "8.5",
    title: "Preparazione al salvataggio",
    whenToUse: "Subito prima di fare commit.",
    inputRequired: "Stato del progetto pronto al salvataggio.",
    prompt: `Prima di procedere al salvataggio, verifica mentalmente:
- l'app parte senza errori?
- la feature funziona come previsto?
- non ci sono TODO nascosti nel codice?

Se qualcosa non è chiaro o stabile, segnalalo.`,
    expectedOutput: [
      "Conferma di prontezza al salvataggio",
      "Eventuali blocchi individuati prima del commit",
    ],
    commonErrors: [
      "Commit \"più o meno funzionante\"",
      "TODO lasciati nel codice",
      "Salvare per fretta",
      "Pensare che Git sistemi tutto",
    ],
    didacticNote: "Git non salva dal caos. Salva solo stati sensati.",
  },
  {
    id: "8.6",
    number: "8.6",
    title: "Salvataggio con Git (per principianti)",
    whenToUse: "Quando il progetto è stabile e verificato.",
    inputRequired: "Repository Git inizializzato.",
    prompt: `Il codice attuale è stabile e funzionante.

Scrivi i comandi Git necessari per:
1) verificare lo stato del repository
2) aggiungere i file corretti
3) creare un commit con un messaggio chiaro in italiano che descriva le modifiche
4) (opzionale) creare un branch o fare push

Spiega ogni comando in una riga semplice.`,
    expectedOutput: [
      "Comandi Git corretti",
      "Messaggio di commit chiaro",
      "Comprensione di cosa fa ogni comando",
    ],
    commonErrors: [
      "Commit troppo generici (\"update\")",
      "Commit con troppe cose insieme",
      "Salvare stati instabili",
      "Non capire cosa si sta committando",
    ],
    didacticNote: "Un commit = una cosa sensata finita. Non tante cose mezze.",
  },
];

function PromptCard({ unit }: { unit: PromptUnit }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(unit.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-8/15 text-sm font-bold text-phase-8">
            {unit.number}
          </span>
          <div>
            <h3 className="font-semibold text-lg">{unit.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                <Terminal className="h-3 w-3" />
                Chat CMD+L
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              copied
                ? "bg-green-500/20 text-green-400"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copiato!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copia prompt
              </>
            )}
          </button>
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Expanded Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="border-t border-border p-5 space-y-5">
          {/* When to use */}
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Quando usarlo</p>
              <p className="text-sm mt-1">{unit.whenToUse}</p>
            </div>
          </div>

          {/* Input required */}
          <div className="flex items-start gap-3">
            <FileInput className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Input richiesto</p>
              <p className="text-sm mt-1">{unit.inputRequired}</p>
            </div>
          </div>

          {/* Prompt Box */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-primary flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Prompt pronto da copiare
              </p>
              <button
                onClick={handleCopy}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all",
                  copied
                    ? "bg-green-500/20 text-green-400"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copiato!" : "Copia"}
              </button>
            </div>
            <div className="relative rounded-lg bg-background border border-border overflow-hidden">
              <pre className="p-4 text-sm font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
                {unit.prompt}
              </pre>
            </div>
          </div>

          {/* Output & Errors Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Expected Output */}
            <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <p className="text-sm font-medium text-green-400">Output atteso</p>
              </div>
              <ul className="space-y-2">
                {unit.expectedOutput.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Errors */}
            <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <p className="text-sm font-medium text-destructive">Errori tipici</p>
              </div>
              <ul className="space-y-2">
                {unit.commonErrors.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Didactic Note */}
          <div className="flex items-start gap-3 rounded-lg bg-primary/5 border border-primary/20 p-4">
            <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-primary">Nota didattica</p>
              <p className="text-sm mt-1 text-muted-foreground">{unit.didacticNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase8Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-8/15">
            <span className="text-2xl font-bold text-phase-8">8</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">Chiusura e Documentazione</h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-phase-8/10 px-3 py-1 text-xs font-medium text-phase-8 border border-phase-8/20">
                <FileCheck className="h-3.5 w-3.5" />
                LOOP
              </span>
            </div>
            <p className="mt-1 text-lg text-muted-foreground">
              Riepilogo lavoro, stato progetto, preparazione alla ripresa futura.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction for Beginners */}
      <div className="rounded-xl border border-phase-8/30 bg-gradient-to-br from-phase-8/5 to-phase-8/10 p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-phase-8/15">
              <BookOpen className="h-5 w-5 text-phase-8" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Perché questa fase è fondamentale</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Un progetto non è "finito" se non è <span className="text-foreground font-medium">riprendibile senza stress</span>.
                Questa fase serve a <span className="text-foreground font-medium">scaricare la memoria del progetto su file</span>: 
                riepiloghi, mappe, todo aggiornati, verifiche di stabilità. Non è burocrazia: è sicurezza operativa.
              </p>
            </div>
          </div>
          
          <div className="grid gap-3 md:grid-cols-3 mt-4">
            <div className="rounded-lg bg-background/50 border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="h-4 w-4 text-phase-8" />
                <span className="text-sm font-medium">Riepilogo</span>
              </div>
              <p className="text-xs text-muted-foreground">Cosa hai fatto, quali file, come testare.</p>
            </div>
            <div className="rounded-lg bg-background/50 border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-phase-8" />
                <span className="text-sm font-medium">Mappa</span>
              </div>
              <p className="text-xs text-muted-foreground">Stato delle feature: completate, in corso, future.</p>
            </div>
            <div className="rounded-lg bg-background/50 border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <GitCommit className="h-4 w-4 text-phase-8" />
                <span className="text-sm font-medium">Commit</span>
              </div>
              <p className="text-xs text-muted-foreground">Un commit = una cosa sensata finita.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message Banner */}
      <div className="rounded-xl border border-phase-8/30 bg-phase-8/5 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-phase-8/15">
            <Save className="h-6 w-6 text-phase-8" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-phase-8">Scarica la memoria del progetto su file</h3>
            <p className="mt-2 text-muted-foreground">
              Non è burocrazia: è <span className="text-foreground font-medium">sicurezza operativa</span>.
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-lg bg-phase-8/10 border border-phase-8/20 px-4 py-3">
              <Shield className="h-5 w-5 text-phase-8 shrink-0" />
              <p className="text-sm font-medium">
                Un progetto non è "finito" se non è <span className="text-phase-8">riprendibile senza stress</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All Chat Note */}
      <div className="flex items-center gap-3 rounded-lg bg-blue-500/10 border border-blue-500/20 px-4 py-3">
        <Terminal className="h-5 w-5 text-blue-400" />
        <p className="text-sm">
          <span className="font-medium text-blue-400">Nota:</span>{" "}
          <span className="text-muted-foreground">Tutti i prompt di questa fase si usano in</span>{" "}
          <span className="font-medium text-foreground">Cursor Chat (CMD+L)</span>
        </p>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 8</h2>
            <p className="text-sm text-muted-foreground mt-1">
              6 prompt per chiudere il lavoro in modo sicuro e riprendibile.
            </p>
          </div>
        </div>

        {/* Prompt Cards */}
        <div className="space-y-4">
          {promptUnits.map((unit) => (
            <PromptCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>

      {/* Closure Flow Summary */}
      <div className="rounded-xl border border-border bg-card/50 p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <FolderCheck className="h-5 w-5 text-phase-8" />
          Flusso di Chiusura
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {["Riepilogo", "Mappa", "Todo", "Stabilità", "Pre-commit", "Git"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg bg-phase-8/10 border border-phase-8/20 px-3 py-1.5 font-medium text-phase-8">
                {step}
              </span>
              {i < 5 && <span className="text-muted-foreground">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15">
            <CheckCircle2 className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-green-400">Ciclo completato</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Dopo la Fase 8, torna alla <span className="font-medium text-foreground">Fase 5</span> per la prossima feature.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Fasi 5 → 6 → 7 → 8 si ripetono per ogni feature dell'MVP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
