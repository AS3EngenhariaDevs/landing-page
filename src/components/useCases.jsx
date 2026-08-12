export function UseCasesSection() {
  const cases = [
    { icon: "⚡", title: "Caso de uso 1", description: "Descrição breve do problema que resolve e o benefício principal." },
    { icon: "🔍", title: "Caso de uso 2", description: "Descrição breve do problema que resolve e o benefício principal." },
    { icon: "🛡️", title: "Caso de uso 3", description: "Descrição breve do problema que resolve e o benefício principal." },
  ];

  return (
    <section className="py-[88px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-end mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
              USE CASES
            </span>
            <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">Como podemos te ajudar</h2>
          </div>
          <p className="text-ink-soft text-[15.5px] leading-[1.7] m-0">Soluções para diferentes contextos e necessidades.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cases.map((item) => (
            <div key={item.title} className="group bg-white border border-gray-soft rounded-[20px] p-7 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-hover hover:border-transparent">
              <span className="text-3xl mb-5 block">{item.icon}</span>
              <h3 className="text-[17.5px] font-bold m-0 mb-2">{item.title}</h3>
              <p className="text-[13.6px] text-ink-soft leading-[1.55] m-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
