"use client";

import { useState } from "react";
import { Menu, Ticket } from "lucide-react";
import { raffleModels } from "@/data/content";
import { Reveal } from "./reveal";

const availableNumbers = Array.from({ length: 50 }, (_, index) => index + 1);

function RaffleCard({
  model,
}: {
  model: (typeof raffleModels)[number];
}) {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  function toggleNumber(number: number) {
    setSelectedNumbers((current) =>
      current.includes(number)
        ? current.filter((selected) => selected !== number)
        : [...current, number].sort((a, b) => a - b),
    );
  }

  function addRandomNumbers(amount: number) {
    const remaining = availableNumbers.filter(
      (number) => !selectedNumbers.includes(number),
    );
    const added: number[] = [];

    while (added.length < amount && remaining.length > 0) {
      const index = Math.floor(Math.random() * remaining.length);
      added.push(remaining.splice(index, 1)[0]);
    }

    setSelectedNumbers((current) =>
      [...current, ...added].sort((a, b) => a - b),
    );
  }

  function clearSelection() {
    setSelectedNumbers([]);
  }

  return (
    <article className="group flex h-full flex-col items-center gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-navy/10 sm:p-6 xl:flex-row">
      <div className="w-full max-w-xs shrink-0 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:max-w-[18rem]">
        <div className="flex items-center justify-between px-1 pb-3">
          <span className="font-display text-xs font-extrabold tracking-wide text-brand-navy">
            <span className="rounded bg-brand-teal px-1 text-white">RIFA</span>{" "}
            PONTUAL
          </span>
          <Menu aria-hidden="true" className="size-4 text-slate-500" />
        </div>

        <div className="flex h-20 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white">
          <Ticket aria-hidden="true" className="size-12 -rotate-12 drop-shadow-md" />
        </div>

        <div className="px-1 pt-3">
          <p className="font-display text-sm font-bold text-brand-navy">
            Sua campanha aqui
          </p>
          <p className="mt-1 text-xs text-brand-teal">Rifa personalizada</p>
        </div>

        <div className="mt-3 rounded-xl bg-brand-mist p-3">
          {model.selection === "manual" ? (
            <>
              <p className="mb-2 text-xs font-semibold text-slate-600">
                Escolha seus números
              </p>
              <div className="grid grid-cols-5 gap-1.5">
                {availableNumbers.slice(0, 20).map((number) => {
                  const isSelected = selectedNumbers.includes(number);
                  return (
                    <button
                      key={number}
                      type="button"
                      aria-pressed={isSelected}
                      aria-label={`${isSelected ? "Desmarcar" : "Selecionar"} número ${number}`}
                      onClick={() => toggleNumber(number)}
                      className={`flex h-8 items-center justify-center rounded-md border text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
                        isSelected
                          ? "border-brand-teal bg-brand-teal/10 text-brand-teal"
                          : "border-slate-200 bg-white text-slate-600 hover:border-brand-teal/50"
                      }`}
                    >
                      {String(number).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="mb-2 text-xs font-semibold text-slate-600">
                Adicione cotas aleatórias
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {[1, 5, 10].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    disabled={selectedNumbers.length === availableNumbers.length}
                    onClick={() => addRandomNumbers(amount)}
                    className="flex h-9 items-center justify-center rounded-lg border border-brand-teal/15 bg-white text-xs font-bold text-brand-teal transition-colors hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label={`Adicionar ${amount} ${amount === 1 ? "número" : "números"} aleatórios`}
                  >
                    +{amount}
                  </button>
                ))}
              </div>
              <div className="mt-2 min-h-9 rounded-md bg-white px-2 py-2 text-xs text-slate-600">
                {selectedNumbers.length > 0 ? (
                  <span className="flex flex-wrap gap-1">
                    {selectedNumbers.slice(0, 10).map((number) => (
                      <span
                        key={number}
                        className="rounded bg-brand-teal/10 px-1.5 py-0.5 font-semibold text-brand-teal"
                      >
                        {String(number).padStart(2, "0")}
                      </span>
                    ))}
                    {selectedNumbers.length > 10 && (
                      <span>+{selectedNumbers.length - 10}</span>
                    )}
                  </span>
                ) : (
                  "Seus números aparecerão aqui"
                )}
              </div>
            </>
          )}

          <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-2 text-xs">
            <span aria-live="polite" className="text-slate-600">
              {selectedNumbers.length}{" "}
              {selectedNumbers.length === 1
                ? "número selecionado"
                : "números selecionados"}
            </span>
            <button
              type="button"
              onClick={clearSelection}
              disabled={selectedNumbers.length === 0}
              className="font-semibold text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:no-underline"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center text-center xl:items-start xl:text-left">
        <h3 className="font-display text-xl font-bold text-brand-blue">
          {model.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {model.description}
        </p>
      </div>
    </article>
  );
}

export function RaffleModels() {
  return (
    <div className="mt-10 grid gap-6 sm:mt-12 md:auto-rows-fr md:grid-cols-2">
      {raffleModels.map((model, index) => (
        <Reveal key={model.id} delay={index * 0.1} className="h-full">
          <RaffleCard model={model} />
        </Reveal>
      ))}
    </div>
  );
}
