import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Refund Policy | Elpis",
  description:
    "How refunds and cancellations work for the free playground, fixed-price Launch builds and optional hosted plans, including how to request one.",
};

export default function RefundsPage() {
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
          <h1 className="h1">Refund Policy</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            The playground is free. Paid work (Launch builds and hosted plans) follows the rules
            below, together with your written quote.
          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. The free playground</h2>
            <p style={s.p}>
              Nothing to refund: you are never charged, and no card is required to sign up. We
              may change or retire playground features over time. Your own LLM usage is billed by
              your provider under your agreement with them.
            </p>

            <h2 style={s.h2}>2. Launch builds</h2>
            <ul style={s.ul}>
              <li style={s.li}>
                Scope, price, payment schedule and revision rounds are agreed in writing before
                any payment or work starts. If you cancel before work begins, you get a full
                refund of anything already paid.
              </li>
              <li style={s.li}>
                If you cancel mid-build, work already delivered is billable, and any prepaid
                amount covering work not yet started is refunded within 14 business days.
              </li>
              <li style={s.li}>
                If we cannot deliver the agreed scope, the portion of the fee covering
                undelivered work is refunded.
              </li>
              <li style={s.li}>
                Work outside the agreed scope is quoted separately before it starts, so you
                always approve the price first.
              </li>
            </ul>

            <h2 style={s.h2}>3. Hosted plans</h2>
            <p style={s.p}>
              Hosted plans are optional and quoted per environment. When billing for them goes
              live, the exact terms (price, billing cycle, whether it auto-renews, how to cancel,
              what happens when a term ends, and how to get invoices and receipts) will be shown
              to you before you pay, and you can cancel at any time for the end of the current
              term. Refund questions for hosted plans follow the same rule as above: unused,
              prepaid service you never received is refunded.
            </p>

            <h2 style={s.h2}>4. How to request a refund</h2>
            <p style={s.p}>
              Email{" "}
              <a href={`mailto:${CONTACT}`} style={s.a}>
                {CONTACT}
              </a>{" "}
              with your name, company, project or invoice reference and what you would like
              refunded. We acknowledge requests within 3 business days and pay approved refunds to
              the original payment method within 14 business days. Please contact us before
              raising a chargeback so we can fix the issue first.
            </p>

            <h2 style={s.h2}>5. Questions</h2>
            <p style={s.p}>
              Anything unclear is covered by your quote first and our{" "}
              <Link href="/legal/terms" style={s.a}>
                Terms of Service
              </Link>{" "}
              second. Ask us before you pay if you want a term explained.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
