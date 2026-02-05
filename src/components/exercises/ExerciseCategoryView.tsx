import { exerciseCategories } from "@/data/exercises";
import { cn } from "@/lib/utils";
import { ArrowLeft, CheckCircle2, Circle, Code2 } from "lucide-react";
import { useState } from "react";

interface ExerciseCategoryViewProps {
  categoryId: string;
  onBack: () => void;
}

export function ExerciseCategoryView({ categoryId, onBack }: ExerciseCategoryViewProps) {
  const category = exerciseCategories.find((c) => c.id === categoryId);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());

  if (!category) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Categoria non trovata</p>
        <button
          onClick={onBack}
          className="mt-4 text-primary hover:underline"
        >
          Torna indietro
        </button>
      </div>
    );
  }

  const toggleExercise = (exerciseId: number) => {
    setCompletedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
  };

  const completedCount = completedExercises.size;
  const progressPercentage = (completedCount / category.exercises.length) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Torna agli esercizi
      </button>

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: `hsl(var(${category.colorVar}) / 0.1)` }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl"
            style={{ backgroundColor: `hsl(var(${category.colorVar}) / 0.05)` }}
          />
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
              style={{
                backgroundColor: `hsl(var(${category.colorVar}) / 0.15)`,
                boxShadow: `0 0 30px hsl(var(${category.colorVar}) / 0.2)`,
              }}
            >
              <span className="text-4xl">{category.emoji}</span>
            </div>
            <div>
              <h1
                className="text-3xl font-bold"
                style={{ color: `hsl(var(${category.colorVar}))` }}
              >
                {category.name}
              </h1>
              <p className="text-muted-foreground">
                {category.exercises.length} esercizi pratici
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progresso</span>
              <span className="text-sm font-medium" style={{ color: `hsl(var(${category.colorVar}))` }}>
                {completedCount}/{category.exercises.length} completati
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: `hsl(var(${category.colorVar}))`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exercise List */}
      <div className="space-y-3">
        {category.exercises.map((exercise, index) => {
          const isCompleted = completedExercises.has(exercise.id);

          return (
            <div
              key={exercise.id}
              onClick={() => toggleExercise(exercise.id)}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/80 p-5 transition-all duration-300 cursor-pointer",
                isCompleted
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/50 hover:border-border hover:bg-card"
              )}
              style={{
                animationDelay: `${index * 30}ms`,
              }}
            >
              {/* Completed Indicator */}
              <div
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                  isCompleted ? "opacity-100" : "opacity-0"
                )}
                style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
              />

              <div className="flex items-start gap-4">
                {/* Number/Check */}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                    isCompleted ? "scale-110" : "group-hover:scale-105"
                  )}
                  style={{
                    backgroundColor: isCompleted
                      ? `hsl(var(${category.colorVar}) / 0.2)`
                      : `hsl(var(${category.colorVar}) / 0.1)`,
                  }}
                >
                  {isCompleted ? (
                    <CheckCircle2
                      className="h-5 w-5"
                      style={{ color: `hsl(var(${category.colorVar}))` }}
                    />
                  ) : (
                    <span
                      className="text-sm font-bold"
                      style={{ color: `hsl(var(${category.colorVar}))` }}
                    >
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      className={cn(
                        "font-semibold transition-colors",
                        isCompleted ? "text-primary" : "text-foreground"
                      )}
                    >
                      {exercise.title}
                    </h3>
                    {isCompleted && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Completato
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "mt-1.5 text-sm leading-relaxed",
                      isCompleted ? "text-muted-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    {exercise.description}
                  </p>
                </div>

                {/* Toggle indicator */}
                <div className="shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Message */}
      {completedCount === category.exercises.length && (
        <div
          className="relative overflow-hidden rounded-xl border p-6 text-center animate-fade-in"
          style={{
            borderColor: `hsl(var(${category.colorVar}) / 0.5)`,
            backgroundColor: `hsl(var(${category.colorVar}) / 0.05)`,
          }}
        >
          <div className="text-4xl mb-3">🎉</div>
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: `hsl(var(${category.colorVar}))` }}
          >
            Categoria Completata!
          </h3>
          <p className="text-muted-foreground">
            Hai completato tutti gli esercizi di {category.name}. Ottimo lavoro!
          </p>
        </div>
      )}
    </div>
  );
}
