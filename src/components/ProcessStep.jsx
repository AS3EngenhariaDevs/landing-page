export default function ProcessStep({ n, icon: Icon, title, desc, isLime }) {
  return (
    <div className="bg-white rounded-[20px] p-[26px] relative">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] mb-5 ${isLime ? "bg-lime text-ink" : "bg-ink text-white"}`}>
        {n}
      </div>
      <div className="absolute top-[27px] right-[26px] text-ink-soft">
        <Icon size={18} />
      </div>
      <h3 className="text-[16px] font-bold m-0 mb-2">{title}</h3>
      <p className="text-[13.4px] text-ink-soft leading-[1.6] m-0">{desc}</p>
    </div>
  );
}
