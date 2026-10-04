import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Data Processing Agreement | Elpis",
  description:
    "The data processing terms for Elpis customers: roles, subject matter, security obligations, subprocessors, transfers, and deletion.",
};

export default function DpaPage() {
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
          <h1 className="h1">Data Processing Agreement</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            This Data Processing Agreement (DPA) applies when you use Elpis to process personal
            data of your own customers or employees, for example incidents that contain personal
            data. It supplements our{" "}
            <Link href="/legal/terms" style={{ textDecoration: "underline" }}>
              Terms of Service
            </Link>
            .
          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. Roles</h2>
            <p style={s.p}>
              You are the controller of personal data you submit to Elpis. Elpis is the processor
              handling that data on your instructions, namely to provide the service. Where Elpis
              determines its own purposes (billing, security logs, our own marketing), Elpis acts
              as a controller for that data.
            </p>

            <h2 style={s.h2}>2. Subject matter, duration and nature</h2>
            <p style={s.p}>
              Subject matter: personal data contained in incidents, evidence, configurations and
              runbooks you put into Elpis. Duration: for as long as your account is active, plus
              deletion of backups on their normal rotation. Nature: storage, retrieval, AI
              analysis and display, strictly to deliver the service as described in the Privacy
              Policy.
            </p>

            <h2 style={s.h2}>3. Your instructions</h2>
            <p style={s.p}>
              We process personal data only on your documented instructions, which include your
              configuration of Elpis (for example which services it watches and which LLM
              provider it uses). If we ever believe an instruction violates applicable law, we
              will notify you unless legally prohibited.
            </p>

            <h2 style={s.h2}>4. BYOK note</h2>
            <p style={s.p}>
              When you connect your own LLM provider key, Elpis transmits incident content to
              that provider to fulfil your instruction. In that case that provider processes the
              data under your relationship with them, and their terms also apply to that
              transfer.
            </p>

            <h2 style={s.h2}>5. Our security obligations</h2>
            <p style={s.p}>
              We implement the technical and organisational measures described on our{" "}
              <Link href="/legal/security" style={s.a}>
                Security page
              </Link>
              , which we may improve over time, and we will not materially reduce them in a way
              that weakens protection for your data. Anyone allowed to process data under this
              DPA is bound to confidentiality.
            </p>

            <h2 style={s.h2}>6. Subprocessors</h2>
            <p style={s.p}>
              You authorize Elpis to use subprocessors as listed on our{" "}
              <Link href="/legal/subprocessors" style={s.a}>
                Subprocessors page
              </Link>
              . We remain responsible for their handling of your data as if it were our own, and
              we update that page when the list changes.
            </p>

            <h2 style={s.h2}>7. International transfers</h2>
            <p style={s.p}>
              Where personal data is transferred across borders, we rely on standard contractual
              clauses (or another recognized transfer mechanism) with the receiving party where
              required by law.
            </p>

            <h2 style={s.h2}>8. Assistance and data subject requests</h2>
            <p style={s.p}>
              Taking into account the nature of the processing, we will help you fulfil your
              obligations to respond to data subject requests, by enabling you to access, correct
              or delete personal data through the service or by deleting it on your documented
              instruction.
            </p>

            <h2 style={s.h2}>9. Breach notification</h2>
            <p style={s.p}>
              If we become aware of a breach of personal data under your control processed
              through Elpis, we will notify you without undue delay and provide the information
              reasonably needed for you to meet your own notification duties.
            </p>

            <h2 style={s.h2}>10. Deletion and return</h2>
            <p style={s.p}>
              When the agreement ends, we will delete or return personal data, at your choice,
              unless retention is required by law. Just email us your instruction after account
              deletion.
            </p>

            <h2 style={s.h2}>11. Audit</h2>
            <p style={s.p}>
              You may request reasonable information about our compliance with this DPA. If an
              audit right is required by your regulator, we will agree a sensible process (for
              example a questionnaire or an inspection with reasonable notice) that does not
              disrupt other customers.
            </p>

            <h2 style={s.h2}>12. Acceptance</h2>
            <p style={s.p}>
              By entering a paid engagement you accept this DPA on behalf of your organisation.
              Need a signed copy or changes? Email{" "}
              <a href={`mailto:${CONTACT}`} style={s.a}>
                {CONTACT}
              </a>{" "}
              and we will countersign.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
