import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../reveal";
import SiteEffects from "../site-effects";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import { APP, CONTACT, docStyles as s } from "../../lib/site";

export const metadata: Metadata = {
  title: "Pricing | Elpis",
  description:
    "Start free on the hosted playground with your own LLM key. Pay a fixed price for a Launch build, with an optional hosted plan. No per-seat pricing, no usage markup.",
};

const plans = [
  {
    label: "Playground",
    price: "Free",
    sub: "Hosted demo, open signup",
    body: "Create an account in 30 seconds. Inject faults, run investigations, approve fixes. Your incidents are private to your account. Bring your own OpenAI-compatible LLM key or use the free built-in model.",
    bullets: [
      "Open signup, no card, no sales call",
      "Bring your own key: 0% markup on AI spend",
      "All 24 fault scenarios, full investigation flow",
      "Per-account data isolation",
    ],
    cta: "Try it free →",
    href: `${APP}/signup`,
    external: true,
  },
  {
    label: "Launch",
    price: "Fixed price",
    sub: "One-time build, quoted after a scoping call",
    body: "We set Elpis up for your startup: deployed on your infrastructure, wired to your LLM key, configured for your services, with your team onboarded. Scope and price are agreed in writing before work starts.",
    bullets: [
      "Deployment to your infrastructure",
      "Your BYOK key, services and runbooks configured",
      "Risk policy and approvals matched to your team",
      "Walkthrough and handover when it is live",
    ],
    cta: "Apply to discuss →",
    href: "/apply",
    external: false,
  },
  {
    label: "Hosted",
    price: "Monthly",
    sub: "Optional, quoted per environment",
    body: "If you would rather we run it, we operate Elpis for you: upgrades, backups, monitoring and support, with priority fixes. Cancel when you want; terms are shown before you pay anything.",
    bullets: [
      "We operate and upgrade the stack",
      "Monitoring and priority support",
      "Quoted per environment, no per-seat fees",
      "Cancel anytime for the next term",
    ],
    cta: "Apply to discuss →",
    href: "/apply",
    external: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      <ScrollReveal />
      <SiteEffects />
      <div className="noise" aria-hidden="true" />
      <SiteHeader />

      <section className="section">
        <div className="shell">
          <div className="kicker">
            <em>Pricing</em> · free playground, quoted builds
          </div>
          <h1 className="h1">Start free. Pay to have it set up for you.</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            Elpis is free to try with your own LLM key. When you want it running for your
            startup, we quote a fixed price for the build. No per-seat pricing and no usage
            markup on your AI spend, ever.
          </p>

          <div className="cards">
            {plans.map((plan) => (
              <div
                key={plan.label}
                data-reveal
                style={{
                  background: "#fff",
                  border: "1px solid var(--line-strong)",
                  borderRadius: 18,
                  padding: 26,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "6px 6px 0 rgba(12, 13, 10, 0.10)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: "var(--muted)",
                    marginBottom: 14,
                  }}
                >
                  {plan.label}
                </div>
                <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em" }}>
                  {plan.price}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {plan.sub}
                </div>
                <p style={{ ...s.p, fontSize: 15, marginTop: 16 }}>{plan.body}</p>
                <ul style={{ ...s.ul, fontSize: 15, marginTop: 6, flex: 1 }}>
                  {plan.bullets.map((item) => (
                    <li key={item} style={s.li}>
                      {item}
                    </li>
                  ))}
                </ul>
                {plan.external ? (
                  <a
                    className="btn btn-accent"
                    href={plan.href}
                    style={{ marginTop: 20, justifyContent: "center" }}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    className="btn btn-accent"
                    href={plan.href}
                    style={{ marginTop: 20, justifyContent: "center" }}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div style={{ ...s.body, marginTop: 40 }} data-reveal>
            <p style={s.p}>
              Custom scope is quoted separately. Refund and cancellation terms are in our{" "}
              <Link href="/legal/refunds" style={s.a}>
                Refund Policy
              </Link>
              , and the playground is governed by our{" "}
              <Link href="/legal/terms" style={s.a}>
                Terms of Service
              </Link>
              . Questions before you apply:{" "}
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
