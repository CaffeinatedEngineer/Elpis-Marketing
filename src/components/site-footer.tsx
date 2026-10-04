import Link from "next/link";
import { APP, CONTACT } from "../lib/site";

const footerLinks: Record<string, string[][]> = {
  Product: [
    ["Features", "/#platform"],
    ["Pricing", "/pricing"],
    ["Live demo", `${APP}/login`],
    ["Sign up", `${APP}/signup`],
  ],
  Resources: [
    ["Quickstart", "/#start"],
    ["How it works", "/#how"],
    ["Evaluation", "/#evaluation"],
    ["Security", "/legal/security"],
  ],
  Company: [
    ["About", "/#why"],
    ["Work with us", "/apply"],
    ["Contact", `mailto:${CONTACT}`],
  ],
  Legal: [
    ["Terms of Service", "/legal/terms"],
    ["Privacy Policy", "/legal/privacy"],
    ["Cookie Policy", "/legal/cookies"],
    ["Acceptable Use", "/legal/acceptable-use"],
    ["Refund Policy", "/legal/refunds"],
    ["DPA", "/legal/dpa"],
    ["Subprocessors", "/legal/subprocessors"],
  ],
};

const fineLinks: string[][] = [
  ["Terms", "/legal/terms"],
  ["Privacy", "/legal/privacy"],
  ["Cookies", "/legal/cookies"],
  ["Acceptable Use", "/legal/acceptable-use"],
  ["Refunds", "/legal/refunds"],
  ["Security", "/legal/security"],
  ["DPA", "/legal/dpa"],
  ["Subprocessors", "/legal/subprocessors"],
  ["Contact", `mailto:${CONTACT}`],
];

function FooterLink({ label, href }: { label: string; href: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return <a href={href}>{label}</a>;
  }
  return <Link href={href}>{label}</Link>;
}

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-hero">
          <div>
            <Link href="/" className="brand footer-brand">
              <span className="brand-mark" />
              Elpis
            </Link>
            <p>
              An AI SRE for evidence-backed root cause analysis, risk-classified remediation,
              and human-approved recovery.
            </p>
          </div>
          <div className="footer-status">
            <span className="pulse" />
            Hosted demo · open signup
          </div>
        </div>

        <div className="footer-cols">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div className="footer-col" key={group}>
              <h4>{group}</h4>
              {links.map(([label, href]) => (
                <FooterLink key={label} label={label} href={href} />
              ))}
            </div>
          ))}
        </div>

        <div className="footer-fine">
          <span>© 2026 Elpis. AI incident investigation and remediation.</span>
          <span style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {fineLinks.map(([label, href]) => (
              <FooterLink key={label} label={label} href={href} />
            ))}
          </span>
        </div>
      </div>
      <div className="footer-band">
        <div className="shell footer-band-inner">
          <div className="footer-word">Elpis</div>
          <div className="footer-tagline">
            Evidence-backed root causes. Human-approved fixes. Verified recovery.
          </div>
        </div>
      </div>
    </footer>
  );
}
