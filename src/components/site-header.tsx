"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP } from "../lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const anchor = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header className="header">
      <div className="shell header-inner">
        {onHome ? (
          <a href="#" className="brand">
            <span className="brand-mark" />
            Elpis
          </a>
        ) : (
          <Link href="/" className="brand">
            <span className="brand-mark" />
            Elpis
          </Link>
        )}
        <nav className="nav">
          <a href={anchor("#why")}>Why Elpis</a>
          <a href={anchor("#platform")}>Platform</a>
          <a href={anchor("#how")}>How it works</a>
          <a href={anchor("#evaluation")}>Evaluation</a>
          <a href={anchor("#start")}>Get started</a>
          <Link href="/apply">For startups</Link>
        </nav>
        <div className="header-cta">
          <a className="btn btn-ghost btn-sm" href={`${APP}/signup`}>
            Try it free
          </a>
          <Link className="btn btn-sm" href="/apply">
            Apply now
          </Link>
        </div>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav-panel">
            <a href={anchor("#why")}>Why Elpis</a>
            <a href={anchor("#platform")}>Platform</a>
            <a href={anchor("#how")}>How it works</a>
            <a href={anchor("#evaluation")}>Evaluation</a>
            <a href={anchor("#start")}>Get started</a>
            <Link href="/apply">For startups</Link>
            <a href={`${APP}/signup`}>Try it free</a>
          </div>
        </details>
      </div>
    </header>
  );
}
