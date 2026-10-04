import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Elpis",
  description:
    "What Elpis collects (accounts, incidents, encrypted BYOK keys), how it is used, who processes it, how long it is kept, and your rights.",
};

export default function PrivacyPage() {
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
          <h1 className="h1">Privacy Policy</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            This policy explains what Elpis collects, why, and who processes it. The short
            version: we collect what the product needs to work, we do not sell data, and we do
            not run tracking or advertising cookies.
          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. What we collect</h2>
            <ul style={s.ul}>
              <li style={s.li}>
                <strong style={s.strong}>Account data:</strong> username or email, a password
                hash (we never store your plain password), and your role.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Incident data:</strong> incidents you create or inject,
                their evidence, timelines, approvals and remediation records.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Settings and keys:</strong> LLM endpoints and API keys
                you choose to save, and an optional GitHub token. Keys are encrypted at rest and
                never returned by the API after you save them.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Usage records:</strong> actions taken in the app, token
                usage and per-incident cost accounting, kept for budgets and audit trails.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Communications:</strong> anything you send us, including
                apply-form submissions (name, email, company, team size, stack, goal) and support
                email.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Technical logs:</strong> standard server logs used for
                security and debugging.
              </li>
            </ul>

            <h2 style={s.h2}>2. How we use it</h2>
            <ul style={s.ul}>
              <li style={s.li}>To provide the service: authenticate you, isolate your data, run investigations, and show results to your account only.</li>
              <li style={s.li}>To run AI analysis: with your own key, requests go to the provider you configured; without one, they go to our built-in model, then to a rules-based fallback.</li>
              <li style={s.li}>To keep the service safe: prevent abuse, debug failures, and enforce budgets and limits.</li>
              <li style={s.li}>To respond to you: support, apply-form conversations, and billing discussions for paid work.</li>
            </ul>
            <p style={s.p}>
              Legal grounds: performing our contract with you (running the service) and our
              legitimate interest in keeping it secure and improving it.
            </p>

            <h2 style={s.h2}>3. Your keys are different</h2>
            <p style={s.p}>
              We treat saved keys as secrets: AES-256-GCM encrypted at rest with a server-side
              key, write-only through the API, masked in the interface. Keys are used only to
              call the provider endpoints you configure. When you connect a provider, incident
              content is transmitted to that provider under <em>your</em> relationship and{" "}
              <em>your</em> agreement with them, so their privacy terms apply to that transfer.
            </p>

            <h2 style={s.h2}>4. Who processes your data</h2>
            <p style={s.p}>
              We do not sell or rent personal data. We use subprocessors to run the service, and
              the current list with purposes is on our{" "}
              <Link href="/legal/subprocessors" style={s.a}>
                Subprocessors page
              </Link>
              . We may also disclose data if required by law.
            </p>

            <h2 style={s.h2}>5. Retention and deletion</h2>
            <p style={s.p}>
              We keep account and incident data while your account is active. You can request
              deletion at any time by email, and we will remove your account data from active
              systems; encrypted backups age out on their normal rotation. Support and apply
              emails are deleted once no longer needed. Audit and cost records tied to shared
              demo data may be retained to keep the demo consistent.
            </p>

            <h2 style={s.h2}>6. Security</h2>
            <p style={s.p}>
              We encrypt data in transit (HTTPS), encrypt keys at rest, hash passwords with
              pbkdf2-sha256 and per-user salts, isolate data per account, and gate remediation
              behind explicit human approval. Full detail is on our{" "}
              <Link href="/legal/security" style={s.a}>
                Security page
              </Link>
              . No system is perfectly secure, so please use strong unique passwords and revoke
              keys you believe are exposed.
            </p>

            <h2 style={s.h2}>7. International transfers</h2>
            <p style={s.p}>
              Our providers may process data in countries other than yours. Where a transfer
              requires a legal safeguard, we rely on standard contractual clauses or an
              equivalent mechanism.
            </p>

            <h2 style={s.h2}>8. Your rights</h2>
            <p style={s.p}>
              Depending on where you live, you may have rights to access, correct, export, delete
              or object to the processing of your personal data. Email us and we will act on
              verified requests. You may also complain to your local data protection authority.
            </p>

            <h2 style={s.h2}>9. Children</h2>
            <p style={s.p}>
              Elpis is a product for businesses and is not directed at children under 18, and we
              do not knowingly collect data from them.
            </p>

            <h2 style={s.h2}>10. Cookies</h2>
            <p style={s.p}>
              We do not use tracking or advertising cookies. Sign-in state is stored in your
              browser&apos;s local storage, which is strictly necessary for the app to work.
              Details are in our{" "}
              <Link href="/legal/cookies" style={s.a}>
                Cookie Policy
              </Link>
              .
            </p>

            <h2 style={s.h2}>11. Contact</h2>
            <p style={s.p}>
              Privacy questions and data requests:{" "}
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
