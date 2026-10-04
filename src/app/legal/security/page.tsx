import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Security | Elpis",
  description:
    "How Elpis is secured: per-account isolation, pbkdf2 password hashing, short-lived JWT sessions, AES-256-GCM encryption for BYOK keys, human approval gates and audit trails.",
};

export default function SecurityPage() {
  return (
    <main>
      <ScrollReveal />
      <SiteEffects />
      <div className="noise" aria-hidden="true" />
      <SiteHeader />

      <section className="section">
        <div className="shell">
          <div className="kicker">
            <em>Trust</em> · how Elpis protects your data and your systems
          </div>
          <h1 className="h1">Security</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            Elpis handles credentials, incident data and AI-driven remediation proposals. Here is
            exactly how that is protected, without marketing gloss.
          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. Accounts and sessions</h2>
            <ul style={s.ul}>
              <li style={s.li}>
                Passwords are hashed with pbkdf2-sha256 (100,000 iterations) with a per-user salt
                and constant-time comparison. Plain passwords are never stored.
              </li>
              <li style={s.li}>
                Sessions use short-lived access tokens (30 minutes) with rotating refresh tokens
                (7 days). Logging out clears the tokens from your browser.
              </li>
              <li style={s.li}>
                Four roles gate every action: viewer, engineer, sre and admin. Read and write
                permissions are enforced on the server, not just hidden in the interface.
              </li>
            </ul>

            <h2 style={s.h2}>2. Data isolation</h2>
            <p style={s.p}>
              Every incident row carries its owner. Reads are scoped so an account only sees its
              own incidents plus intentionally shared demo data, and writes require
              authentication plus an ownership check. The shared demo accounts (viewer, engineer,
              sre, admin) are public by design, so keep private work in your own account.
              Isolation is covered by automated tests in our suite.
            </p>

            <h2 style={s.h2}>3. Your BYOK keys</h2>
            <ul style={s.ul}>
              <li style={s.li}>
                LLM keys and GitHub tokens are encrypted at rest with AES-256-GCM using a
                server-side key that never ships in the repository.
              </li>
              <li style={s.li}>
                The API is write-only for secrets: once saved, keys are never returned or
                echoed. The interface only shows whether a key exists.
              </li>
              <li style={s.li}>
                Keys are used only to call the provider endpoints you configured. Revoke a key at
                your provider any time and Elpis loses the ability to use it.
              </li>
            </ul>

            <h2 style={s.h2}>4. AI safety rails</h2>
            <ul style={s.ul}>
              <li style={s.li}>
                Remediation never executes automatically. A human with the right role must
                approve every proposal, and critical-severity actions are blocked outright.
              </li>
              <li style={s.li}>
                Investigations run under hard limits: tool-call caps, per-incident budget caps,
                timeouts and retry limits, so a bad run cannot run away.
              </li>
              <li style={s.li}>
                Every proposal carries its evidence and risk classification, and every action is
                recorded in an audit trail you can review.
              </li>
            </ul>

            <h2 style={s.h2}>5. Transport and infrastructure</h2>
            <ul style={s.ul}>
              <li style={s.li}>All traffic is served over HTTPS through our edge provider.</li>
              <li style={s.li}>
                Database connections are encrypted end to end; data at rest is encrypted by our
                managed Postgres provider.
              </li>
              <li style={s.li}>
                Production access is limited to the operator running the service. Current
                subprocessors are listed on the{" "}
                <Link href="/legal/subprocessors" style={s.a}>
                  Subprocessors page
                </Link>
                .
              </li>
            </ul>

            <h2 style={s.h2}>6. Responsible disclosure</h2>
            <p style={s.p}>
              If you find a vulnerability, email{" "}
              <a href={`mailto:${CONTACT}`} style={s.a}>
                {CONTACT}
              </a>{" "}
              with the steps to reproduce and the impact. We will acknowledge it, work on a fix
              and keep you updated. We do not run a paid bounty programme yet, and we will not
              take legal action against good-faith reports that avoid privacy violations, data
              destruction and service disruption.
            </p>

            <p style={s.note}>
              See also:{" "}
              <Link href="/legal/privacy" style={s.a}>
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/legal/dpa" style={s.a}>
                DPA
              </Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
