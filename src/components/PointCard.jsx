export default function PointCard({ icon: Icon, title, desc, unit }) {
  return (
    <div className="group bg-white border border-gray-soft rounded-[20px] p-7 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-hover hover:border-transparent">
      <div className="w-[54px] h-[54px] rounded-2xl bg-gray-soft flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-lime">
        <Icon size={24} />
      </div>
      <h3 className="text-[17.5px] font-bold m-0 mb-2">{title}</h3>
      <p className="text-[13.6px] text-ink-soft leading-[1.55] m-0">{desc}</p>
      <span className="inline-block mt-4 text-[11.5px] font-semibold bg-gray-soft px-3 py-[5px] rounded-full text-ink-soft transition-colors duration-200 group-hover:bg-lime group-hover:text-ink">Onde se aplica</span>
    </div>
  );
}