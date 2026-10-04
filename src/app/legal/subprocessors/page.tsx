import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Subprocessors | Elpis",
  description:
    "Third parties that process data for the Elpis service: managed Postgres, edge delivery, form relay, email, self-hosted inference, and your own LLM provider.",
};

const th: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 11.5,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--ink)",
  textAlign: "left",
  padding: "10px 8px",
  borderBottom: "1px solid var(--line-strong)",
  verticalAlign: "bottom",
};

const td: React.CSSProperties = {
  padding: "10px 8px",
  borderBottom: "1px solid var(--line)",
  fontSize: 14.5,
  lineHeight: 1.6,
  color: "var(--muted)",
  verticalAlign: "top",
};

const tdName: React.CSSProperties = {
  ...td,
  color: "var(--ink)",
  fontWeight: 600,
  whiteSpace: "nowrap",
};

const rows = [
  [
    "Neon",
    "Hosted Postgres database (accounts, incidents, settings)",
    "Account and incident data at rest",
  ],
  [
    "Cloudflare",
    "Edge delivery and tunnel for the web app (HTTPS, routing, abuse protection)",
    "Traffic in transit",
  ],
  [
    "FormSubmit",
    "Relays apply-form submissions to our inbox",
    "Name, email, company, team size, stack, goal",
  ],
  [
    "Google (Gmail)",
    "Our support and application email mailbox",
    "Emails you send us",
  ],
  [
    "Elpis-managed Ollama",
    "Self-hosted open-source LLM used as a fallback when you have not set your own key",
    "Prompt content for those investigations",
  ],
  [
    "Your LLM provider (BYOK)",
    "The OpenAI-compatible endpoint you configure with your own key. Your direct relationship, not our subprocessor",
    "Incident content sent when you set a key",
  ],
];

export default function SubprocessorsPage() {
  return (
    <main>
      <ScrollReveal />
      <SiteEffects />
      <div className="noise" aria-hidden="true" />
      <SiteHeader />

      <section className="section">
        <div className="shell">
          <div className="kicker">
            <em>Legal</em> · last updated 4 October 2026
          </div>
          <h1 className="h1">Subprocessors</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            The third parties that process data so Elpis can run, and what each of them does.
            This list is part of our{" "}
            <Link href="/legal/dpa" style={{ textDecoration: "underline" }}>
              DPA
            </Link>{" "}
            and Privacy Policy.
          </p>

          <div style={{ ...s.body, maxWidth: "84ch" }} data-reveal>
            <div style={{ overflowX: "auto", marginTop: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                <thead>
                  <tr>
                    <th style={th}>Subprocessor</th>
                    <th style={th}>Purpose</th>
                    <th style={th}>Data processed</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([name, purpose, data]) => (
                    <tr key={name}>
                      <td style={tdName}>{name}</td>
                      <td style={td}>{purpose}</td>
                      <td style={td}>{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ ...s.p, marginTop: 26 }}>
              We may replace a subprocessor or add one when it improves the service. The date on
              this page shows when it last changed, and the current list always lives here. Your
              own LLM provider is listed for clarity: when you use your own key you engage that
              provider directly.
            </p>

            <p style={s.p}>
              Questions about a subprocessor:{" "}
              <a href={`mailto:${CONTACT}`} style={s.a}>
                {CONTACT}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
