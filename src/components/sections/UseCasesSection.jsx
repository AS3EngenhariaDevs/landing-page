import { ArrowRight } from "lucide-react";
import { segments } from "../../data/landingPage";
import SectionHeader from "../ui/SectionHeader";

export default function UseCasesSection() {
  return (
    <>
        <section className="segments-section" id="aplicacoes">
          <div className="section-grid">
            <SectionHeader
              eyebrow="Aplicações por segmento"
              title={
                <>
                  Como o Microméros se aplica
                  <br />à sua operação.
                </>
              }
            />
            <div className="segment-grid">
              {segments.map(({ icon: Icon, ...s }) => (
                <article className="segment-card" key={s.label}>
                  <div className="segment-image">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>
                      <Icon /> {s.label}
                    </span>
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a href="#contato">
                      Conhecer a aplicação <ArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
