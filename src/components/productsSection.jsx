export function ProductsSection() {
  const products = [
    { badge: "Novo",       name: "Produto Alpha", description: "Descrição do produto, principais funcionalidades e para quem é indicado." },
    { badge: "Popular",    name: "Produto Beta",  description: "Descrição do produto, principais funcionalidades e para quem é indicado." },
    { badge: "Enterprise", name: "Produto Gamma", description: "Descrição do produto, principais funcionalidades e para quem é indicado." },
  ];

  return (
    <section className="py-[88px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-end mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
              PRODUTOS
            </span>
            <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">Nossos produtos</h2>
          </div>
          <p className="text-ink-soft text-[15.5px] leading-[1.7] m-0">Tudo que você precisa em um só lugar.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.name} className="bg-white border border-gray-soft rounded-[28px] p-5">
              <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-lime/20 text-ink font-semibold mb-2.5">{product.badge}</span>
              <h3 className="text-[15px] font-bold m-0 mb-1">{product.name}</h3>
              <p className="text-[12px] text-ink-soft leading-[1.5] mb-3">{product.description}</p>
              <a href="#" className="text-[12px] font-semibold text-ink hover:text-ink-soft transition-colors no-underline">Saiba mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
