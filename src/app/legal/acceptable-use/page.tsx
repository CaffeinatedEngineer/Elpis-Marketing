import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Elpis",
  description:
    "What you may and may not do with Elpis: authority over your systems, no abuse of the service, no bypassing safety rails, and fair use of the shared demo.",
};

export default function AcceptableUsePage() {
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
          <h1 className="h1">Acceptable Use Policy</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            This policy protects you, other users and the service. It forms part of the{" "}
            <Link href="/legal/terms" style={{ textDecoration: "underline" }}>
              Terms of Service
            </Link>
            .
          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. Authority over your systems</h2>
            <p style={s.p}>
              Elpis analyses incidents and proposes remediation for systems you are responsible
              for. Only point Elpis at infrastructure you own or are authorised to operate, and
              only use it with data you are allowed to process.
            </p>

            <h2 style={s.h2}>2. Do not misuse the service</h2>
            <ul style={s.ul}>
              <li style={s.li}>No unlawful, fraudulent, harassing or infringing content.</li>
              <li style={s.li}>No malware, and no using remediation proposals to damage systems.</li>
              <li style={s.li}>
                No attacking the service: no probing, scanning, exploiting or disrupting Elpis,
                and no bypassing authentication, rate limits, budgets or approval controls.
              </li>
              <li style={s.li}>
                No overloading it: do not spam the investigation endpoints or run automated
                workloads against the hosted playground.
              </li>
              <li style={s.li}>
                No impersonation, no scraping beyond normal use, and no resale or white-labelling
                of Elpis without a written agreement.
              </li>
              <li style={s.li}>
                Do not use the shared demo accounts to flood shared demo data with junk
                incidents.
              </li>
            </ul>

            <h2 style={s.h2}>3. Keep the human in the loop</h2>
            <p style={s.p}>
              Elpis requires a person to approve remediation before it executes. Do not attempt
              to disable, automate around or script that approval gate, and do not deploy Elpis
              output onto critical systems without qualified human review. AI output can be
              wrong; you are responsible for what you approve.
            </p>

            <h2 style={s.h2}>4. Your AI provider rules apply</h2>
            <p style={s.p}>
              When you bring your own LLM key, your use of that provider is governed by your
              agreement with them. Make sure the prompts and data you send through Elpis are
              allowed by that provider and by law.
            </p>

            <h2 style={s.h2}>5. Enforcement</h2>
            <p style={s.p}>
              We may investigate suspected violations and suspend or terminate accounts that
              break this policy, including in urgent cases. We may report unlawful activity to
              authorities. We will not penalise good-faith security research reported to us
              privately.
            </p>

            <h2 style={s.h2}>6. Report abuse</h2>
            <p style={s.p}>
              To report misuse of Elpis or a violation of this policy:{" "}
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
