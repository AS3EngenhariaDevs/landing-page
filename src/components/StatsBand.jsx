import { stats } from "../data/landingPage";

export default function StatsBand() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-8 pb-5">
      <div className="bg-ink rounded-[28px] px-11 py-[52px] text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(([value, label]) => (
            <div key={label}>
              <b className="block text-[clamp(28px,3vw,42px)] font-extrabold text-lime">{value}</b>
              <span className="block text-[12.5px] text-gray mt-1.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
