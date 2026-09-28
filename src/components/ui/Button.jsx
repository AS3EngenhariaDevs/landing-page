import { ArrowRight } from "lucide-react";

export default function Button({ children, dark = false, href = "#contato" }) {
  return (
    <a
      className={`pill-button ${dark ? "pill-button--light" : ""}`}
      href={href}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}
