import { clientLogos } from "../../data/landingPage";

export default function TrustedClientsSection() {
  return (
    <>
        <section className="logo-band" aria-label="Empresas atendidas pela AS3">
          <div className="logo-track">
            {[0, 1].map((group) => (
              <div
                className="logo-set"
                key={group}
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {clientLogos.map(({ src, alt }) => (
                  <img
                    key={`${group}-${alt}`}
                    src={src}
                    alt={group === 0 ? alt : ""}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>
    </>
  );
}
