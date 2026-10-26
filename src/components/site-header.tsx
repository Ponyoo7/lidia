"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/#inicio" aria-label="Lidia Gandia, inicio">
        LIDIA GANDIA<span className="wordmark-dot">.</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        id="primary-navigation"
        className={`main-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Navegación principal"
      >
        {navigation.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}