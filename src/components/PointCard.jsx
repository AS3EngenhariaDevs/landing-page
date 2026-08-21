export default function PointCard({ icon: Icon, title, object, desc, unit }) {
  return (
    <div className="group h-full flex flex-col bg-white border border-gray-soft rounded-[20px] p-8 min-h-[280px] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-hover hover:border-transparent cursor-pointer">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-[54px] h-[54px] shrink-0 rounded-2xl bg-gray-soft flex items-center justify-center transition-colors duration-200 group-hover:bg-lime">
          <Icon size={24} />
        </div>

        <div className="min-w-0 pt-1.5">
          <h3 className="text-[17.5px] font-bold m-0 mb-1 leading-tight">
            {object}
          </h3>
          <p className="text-[13px] font-medium text-ink-soft m-0">
            {title}
          </p>
        </div>
      </div>

      <p className="text-[13.6px] text-ink-soft leading-[1.55] m-0 flex-1">
        {desc}
      </p>

      <span className="inline-block self-start mt-6 text-[11.5px] font-semibold bg-gray-soft px-3 py-[5px] rounded-full text-ink-soft transition-colors duration-200 group-hover:bg-lime group-hover:text-ink">
        Onde se aplica
      </span>
    </div>
  );
}