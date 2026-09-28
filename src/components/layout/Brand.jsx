import as3Logo from "../../assets/logos/as3-official.png";
import micromerosLogo from "../../assets/logos/micromerosLogo.png";

export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#inicio"
      aria-label="AS3 — início"
    >
      <span className="brand__logo-crop">
        <img src={as3Logo} alt="AS3" />
      </span>

      <span className="brand__divider" />

      <span className="brand__logo-micromeros">
        <img src={micromerosLogo} alt="Microméros" />
      </span>
    </a>
  );
}
