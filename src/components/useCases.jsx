import { useState } from "react";
import { companies } from "../data/landingPage";
export function UseCasesSection() {

  const [selectedCompany, setSelectedCompany] = useState("shopping");
  const [selectedCase, setSelectedCase] = useState(0);

  const company = companies[selectedCompany];
  const activeCase = company.cases[selectedCase];

  function handleCompanyChange(event) {
    setSelectedCompany(event.target.value);
    setSelectedCase(0);
  }
  console.log("companies:", companies);
  return (
    <section className="py-[88px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
              USE CASES
            </span>

            <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">
              Como podemos te ajudar
            </h2>
          </div>

          <p className="text-ink-soft text-[15.5px] leading-[1.7] m-0">
            Selecione o tipo de operação para descobrir como a Microméros
            pode ajudar sua empresa.
          </p>
        </div>

        {/* Select */}
        <div className="mb-10">
          <label
            htmlFor="company-type"
            className="block text-[13px] font-semibold text-ink-soft mb-2"
          >
            Qual é o tipo da sua operação?
          </label>

          <select
            id="company-type"
            value={selectedCompany}
            onChange={handleCompanyChange}
            className="
              w-full
              max-w-[360px]
              appearance-none
              bg-white
              border
              border-gray-soft
              rounded-[14px]
              px-4
              py-3.5
              text-[14px]
              font-medium
              text-ink
              outline-none
              cursor-pointer
              transition-all
              focus:border-ink
              focus:ring-2
              focus:ring-ink/5
            "
          >
            {Object.entries(companies).map(([key, item]) => (
              <option key={key} value={key}>
                {item.label}
              </option>
            ))}
          </select>

          <p className="text-[13.5px] text-ink-soft mt-3 max-w-[620px]">
            {company.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {company.cases.map((item, index) => {
            const isActive = index === selectedCase;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCase(index)}
                className={`
                  text-left
                  bg-white
                  border
                  rounded-[20px]
                  p-7
                  transition-all
                  duration-200
                  cursor-pointer
                  ${
                    isActive
                      ? "border-ink shadow-hover -translate-y-1"
                      : "border-gray-soft hover:-translate-y-1 hover:shadow-hover hover:border-transparent"
                  }
                `}
              >
                <span
                  className={`
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-[12px]
                    mb-5
                    text-[22px]
                    ${
                      isActive
                        ? "bg-ink text-white"
                        : "bg-gray-soft"
                    }
                  `}
                >
                  <item.icon size={22} strokeWidth={2} />
                </span>

                <h3 className="text-[17.5px] font-bold m-0 mb-2">
                  {item.title}
                </h3>

                <p className="text-[13.6px] text-ink-soft leading-[1.55] m-0">
                  {item.shortDescription}
                </p>

                <div
                  className={`
                    mt-5
                    text-[12px]
                    font-semibold
                    transition-opacity
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 sm:group-hover:opacity-100"
                    }
                  `}
                >
                  Ver como funciona →
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalhamento */}
        <div className="mt-6 overflow-hidden bg-white border border-gray-soft rounded-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">

            {/* Imagem */}
            <div className="min-h-[300px] lg:min-h-[390px] bg-gray-soft overflow-hidden">
              <img
                src={activeCase.image}
                alt={`${activeCase.title} em ${company.label}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[13px] font-semibold uppercase tracking-[0.04em] text-ink-soft">
                {company.label} · {activeCase.title}
              </span>

              <div className="flex items-center gap-3 mt-3 mb-4">
                <span className="text-[28px]">
                  <activeCase.icon size={28} strokeWidth={2} />
                </span>

                <h3 className="text-[25px] font-bold tracking-[-0.02em] m-0">
                  {activeCase.title}
                </h3>
              </div>

              <p className="text-[14.5px] text-ink-soft leading-[1.7] max-w-[520px] m-0">
                {activeCase.description}
              </p>

              <div className="mt-7 space-y-3">
                {activeCase.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-[13.5px] font-medium"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-lime text-[11px] font-bold shrink-0">
                      ✓
                    </span>

                    {benefit}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}