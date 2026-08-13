import { useRef, useEffect } from "react";

import metropolitanoLogo from "../assets/logos/metropolitano.png";
import ambevLogo from "../assets/logos/ambev.png";
import copadorLogo from "../assets/logos/copador.png";
import metrorioLogo from "../assets/logos/metrorio.png";
import fiocruzLogo from "../assets/logos/fiocruz.png";
import labtsLogo from "../assets/logos/labts.png";
import quakerLogo from "../assets/logos/quaker.png";
import autonLogo from "../assets/logos/auton.png";

const clients = [
  { name: "Shopping Metropolitano",   logo: metropolitanoLogo },
  { name: "Ambev",           logo: ambevLogo },
  { name: "Copa D'Or",       logo: copadorLogo },
  { name: "Metrô Rio",       logo: metrorioLogo },
  { name: "Fiocruz",         logo: fiocruzLogo },
  { name: "LabTS",          logo: labtsLogo },
  { name: "Quaker Houghton", logo: quakerLogo },
  { name: "Auton",           logo: autonLogo },
];

export function TrustedClientsSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId;
    let pos = 0;
    const speed = 1.0;

    const step = () => {
      pos -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const items = [...clients, ...clients];

  return (
    <section className="py-[88px]">
      <div className="w-full max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-end mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] uppercase bg-gray-soft px-4 py-[7px] rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime border-[1.5px] border-ink shrink-0" />
              CLIENTES
            </span>
            <h2 className="font-bold tracking-[-0.01em] leading-[1.12] mt-3.5 text-[clamp(28px,3vw,40px)]">
              Empresas que confiam na gente
            </h2>
          </div>
          <p className="text-ink-soft text-[15.5px] leading-[1.7] m-0">
            Marcas que já transformaram seus resultados com a nossa solução.
          </p>
        </div>
      </div>

      {/* Marquee — full width */}
      <div className="overflow-hidden w-full bg-white py-6">
        <div ref={trackRef} className="flex gap-8 w-max will-change-transform">
          {items.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white border border-gray-100 rounded-[20px] px-12 py-6 h-28 min-w-[220px] shrink-0 shadow-soft"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[170px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="hidden text-[13px] font-semibold text-ink-soft">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}