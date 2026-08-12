export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-end mb-12">
      <div>
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
          <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
          {eyebrow}
        </span>
        <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">{title}</h2>
      </div>
      <p className="text-ink-soft text-[15.5px] leading-[1.7] m-0">{children}</p>
    </div>
  );
}
