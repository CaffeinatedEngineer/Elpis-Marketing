import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Elpis",
  description:
    "The terms that govern your use of Elpis: accounts, AI output, your BYOK keys, acceptable use, paid engagements, disclaimers and liability.",
};

export default function TermsPage() {
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
          <h1 className="h1">Terms of Service</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            These terms govern your use of Elpis, the hosted playground and any paid engagement
            you book with us. By creating an account or using the service you agree to them.

          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. Who can use Elpis</h2>
            <p style={s.p}>
              You must be at least 18 years old and able to enter a binding contract. If you use
              Elpis for a company, you confirm you are allowed to bind it to these terms. Do not
              use Elpis if you cannot agree to these terms.
            </p>

            <h2 style={s.h2}>2. Your account</h2>
            <p style={s.p}>
              Sign up with a username and password and keep those credentials safe. You are
              responsible for activity under your account. Tell us promptly if you believe your
              account is compromised.
            </p>
            <p style={s.p}>
              The demo accounts (viewer, engineer, sre, admin) are shared public accounts: data
              created under them is visible to everyone who logs in. Anything you create under
              your own account is private to you.
            </p>

            <h2 style={s.h2}>3. What the service does</h2>
            <p style={s.p}>
              Elpis investigates incidents: it collects evidence from logs, metrics, traces,
              deployments and Git history, proposes an evidence-backed root cause and a
              risk-classified fix, and proposes execution only after a human on your account
              approves it. It also ships simulated fault scenarios you can inject for testing.
            </p>

            <h2 style={s.h2}>4. AI output</h2>
            <p style={s.p}>
              Elpis uses artificial intelligence. Output can be wrong, incomplete or out of date.
              Every recommendation must be reviewed by a qualified human before you act on it.
              Elpis requires human approval before any remediation step, and you must not work
              around that gate. Elpis is a decision-support tool, not a guarantee of uptime or of
              any particular outcome, and it is not a substitute for your own engineering review.
            </p>

            <h2 style={s.h2}>5. Your keys and integrations</h2>
            <p style={s.p}>
              Elpis works on a bring-your-own-key basis: you supply your own OpenAI-compatible
              LLM key (and optionally a GitHub token). Keys you save are encrypted at rest and
              used only to call the endpoints you configure, as described in our{" "}
              <Link href="/legal/privacy" style={s.a}>
                Privacy Policy
              </Link>
              . You are responsible for your provider&apos;s terms, your provider&apos;s usage
              costs, and keeping your keys secret. If a key is exposed, revoke it immediately.
            </p>

            <h2 style={s.h2}>6. Acceptable use</h2>
            <p style={s.p}>
              You must follow our{" "}
              <Link href="/legal/acceptable-use" style={s.a}>
                Acceptable Use Policy
              </Link>
              , which forms part of these terms.
            </p>

            <h2 style={s.h2}>7. Free and paid use</h2>
            <p style={s.p}>
              The playground is free. Launch builds and hosted plans are sold under a written
              quote; where that quote conflicts with these terms, the quote wins for that
              engagement. See our{" "}
              <Link href="/legal/refunds" style={s.a}>
                Refund Policy
              </Link>{" "}
              for cancellation and refund rules.
            </p>

            <h2 style={s.h2}>8. Availability and changes</h2>
            <p style={s.p}>
              The service is provided as is. We may change, suspend or discontinue features at
              any time, including for maintenance, abuse protection or legal reasons. We may also
              update these terms; the date above shows when they last changed, and continued use
              after a change means you accept it. For paid engagements, material changes are
              communicated before they apply.
            </p>

            <h2 style={s.h2}>9. Your data and our intellectual property</h2>
            <p style={s.p}>
              You keep ownership of the content you submit (incident data, configurations,
              runbooks). You give us the licence needed to process that content strictly to run
              the service for you. Elpis itself, including its code, branding and documentation,
              remains ours. If you send us feedback, we may use it without obligation.
            </p>

            <h2 style={s.h2}>10. Termination</h2>
            <p style={s.p}>
              You can stop using Elpis at any time and request account deletion by email. We may
              suspend or end accounts that break these terms or the Acceptable Use Policy, for
              example by overloading the investigation endpoints or attacking the service. When an
              account closes, sections that by nature should survive (such as liability and
              licence grants for past use) do survive.
            </p>

            <h2 style={s.h2}>11. Disclaimers</h2>
            <p style={s.p}>
              To the fullest extent the law allows, Elpis is provided without warranties of any
              kind, express or implied, including fitness for a particular purpose, accuracy and
              uninterrupted availability.
            </p>

            <h2 style={s.h2}>12. Limitation of liability</h2>
            <p style={s.p}>
              To the fullest extent the law allows, we are not liable for indirect, incidental or
              consequential damages, or for lost profits, lost data or loss of service. Our total
              liability for claims about the service is limited to the amounts you paid us in the
              12 months before the claim arose, or USD 100 if you have paid nothing. Nothing in
              these terms limits liability that cannot be limited by law.
            </p>

            <h2 style={s.h2}>13. Indemnity</h2>
            <p style={s.p}>
              You agree to cover losses and claims arising from your unlawful use of Elpis, your
              breach of these terms or the Acceptable Use Policy, or your infringement of
              someone else&apos;s rights through content you submit.
            </p>

            <h2 style={s.h2}>14. Contact</h2>
            <p style={s.p}>
              Questions about these terms:{" "}
              <a href={`mailto:${CONTACT}`} style={s.a}>
                {CONTACT}
              </a>
              .
            </p>

            <p style={s.note}>
              See also:{" "}
              <Link href="/legal/privacy" style={s.a}>
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/legal/security" style={s.a}>
                Security
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
