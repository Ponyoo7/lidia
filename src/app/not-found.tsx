import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404 · NO ENCONTRADO</p><h1>Esta página<br /><em>no existe.</em></h1><Link className="text-link" href="/">Volver al inicio ↗</Link></main>;
}