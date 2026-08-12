export default function SectorCard({ tag, title, desc }) {
  return (
    <div className="group rounded-[20px] p-[26px] min-h-[170px] flex flex-col justify-between bg-gray-soft transition-all duration-200 hover:bg-ink hover:text-white hover:-translate-y-1.5 cursor-default">
      <div>
        <span className="text-[11.5px] font-semibold text-ink-soft uppercase tracking-[0.04em] group-hover:text-lime transition-colors">{tag}</span>
        <h3 className="text-[16.5px] font-bold mt-2 mb-0">{title}</h3>
      </div>
      <p className="text-[12.8px] text-ink-soft mt-2 mb-0 leading-[1.5] group-hover:text-gray transition-colors">{desc}</p>
    </div>
  );
}
