import { cn } from "@/lib/utils";

type RaffleCardProps = {
  className?: string;
};

export function RaffleCard({ className }: RaffleCardProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex aspect-[4/5] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-brand-navy/15",
        className,
      )}
    >
      <div className="bg-gradient-to-b from-[#E8434A] to-[#C8101E] px-2 py-3 text-center sm:py-4">
        <span className="font-display text-xl font-extrabold leading-none tracking-[0.28em] text-white sm:text-2xl">
          RIFA
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
        <span className="font-display text-[0.55rem] font-bold uppercase tracking-wider text-brand-navy/60 sm:text-xs">
          Número da sorte
        </span>
        <span className="mt-2 rounded-lg border-2 border-dashed border-brand-blue/40 px-3 py-1 font-display text-2xl font-extrabold leading-none text-brand-blue sm:px-4 sm:py-2 sm:text-4xl">
          042
        </span>
        <span className="mt-3 font-display text-[0.55rem] font-semibold text-brand-navy/70 sm:text-xs">
          Sorteio especial
        </span>
      </div>
      <div className="border-t border-dashed border-slate-300 px-2 py-2 text-center">
        <span className="font-display text-[0.5rem] font-bold uppercase tracking-widest text-brand-blue sm:text-[0.65rem]">
          Boa sorte!
        </span>
      </div>
    </div>
  );
}
