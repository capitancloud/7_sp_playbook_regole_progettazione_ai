import { exerciseCategories } from "@/data/exercises";
import { cn } from "@/lib/utils";
import {
  Palette,
  Cog,
  Atom,
  Server,
  Database,
  Bug,
  Terminal,
  Rocket,
  Sparkles,
  GraduationCap,
  ChevronRight,
  Code2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Cog,
  Atom,
  Server,
  Database,
  Bug,
  Terminal,
  Rocket,
  Sparkles,
};

interface ExercisesViewProps {
  onCategorySelect?: (categoryId: string) => void;
}

export function ExercisesView({ onCategorySelect }: ExercisesViewProps) {
  const totalExercises = exerciseCategories.reduce(
    (sum, cat) => sum + cat.exercises.length,
    0
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-phase-3/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-phase-6/8 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Palestra Pratica</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">ESERCIZI PRATICI</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Una collezione completa di esercizi per mettere in pratica le tue competenze.
            Da HTML/CSS fino ai progetti full-stack, ogni esercizio è un passo verso la maestria.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
              <span className="text-2xl font-bold text-primary">{totalExercises}</span>
              <span className="text-sm text-muted-foreground">Esercizi</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
              <span className="text-2xl font-bold text-phase-3">{exerciseCategories.length}</span>
              <span className="text-sm text-muted-foreground">Categorie</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
              <Code2 className="h-4 w-4 text-phase-6" />
              <span className="text-sm text-muted-foreground">Hands-on Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exerciseCategories.map((category, index) => {
          const Icon = iconMap[category.icon] || Code2;

          return (
            <div
              key={category.id}
              onClick={() => onCategorySelect?.(category.id)}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 transition-all duration-500 cursor-pointer",
                "hover:border-transparent hover:-translate-y-1 hover:shadow-xl",
                "animate-fade-in"
              )}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, hsl(var(${category.colorVar}) / 0.15) 0%, transparent 70%)`,
                }}
              />

              {/* Border Gradient on Hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.3), transparent 50%, hsl(var(${category.colorVar}) / 0.1))`,
                  padding: "1px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                      "group-hover:scale-110 group-hover:shadow-lg"
                    )}
                    style={{
                      backgroundColor: `hsl(var(${category.colorVar}) / 0.15)`,
                    }}
                  >
                    <span className="text-2xl">{category.emoji}</span>
                  </div>
                  <ChevronRight
                    className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h3>

                {/* Exercise Count Badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
                  style={{
                    backgroundColor: `hsl(var(${category.colorVar}) / 0.1)`,
                    borderColor: `hsl(var(${category.colorVar}) / 0.3)`,
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5"
                    style={{ color: `hsl(var(${category.colorVar}))` }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: `hsl(var(${category.colorVar}))` }}
                  >
                    {category.exercises.length} esercizi
                  </span>
                </div>

                {/* Preview of first 3 exercises */}
                <div className="mt-4 space-y-1.5">
                  {category.exercises.slice(0, 3).map((exercise) => (
                    <div
                      key={exercise.id}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
                      />
                      <span className="truncate">{exercise.title}</span>
                    </div>
                  ))}
                  {category.exercises.length > 3 && (
                    <div className="text-xs text-muted-foreground/70 pl-3.5">
                      +{category.exercises.length - 3} altri...
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative Corner */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
              />
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="relative overflow-hidden rounded-xl border border-border/30 bg-muted/30 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Come usare gli esercizi</h4>
            <p className="text-sm text-muted-foreground">
              Ogni categoria è ordinata per difficoltà crescente. Inizia dal primo esercizio 
              e procedi in ordine. Non saltare: ogni esercizio costruisce sulle competenze dei precedenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
