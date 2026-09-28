export default function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false,
  light = false,
}) {
  return (
    <div
      className={`section-intro ${centered ? "section-intro--center" : ""} ${light ? "section-intro--light" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
