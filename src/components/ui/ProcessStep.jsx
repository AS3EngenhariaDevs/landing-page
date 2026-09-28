export default function ProcessStep({ dark = false, children }) {
  return <article className={dark ? "process-card process-card--dark" : "process-card"}>{children}</article>;
}
