"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
              IA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Consultor IA</span>
              <span className="text-xs text-muted-foreground">Data & Analytics</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-primary transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
              Casos (Proximamente)
            </span>
            <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
              Sobre Mi (Proximamente)
            </span>
            <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
              Contacto (Proximamente)
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
