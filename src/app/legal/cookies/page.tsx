import type { Metadata } from "next";
import ScrollReveal from "../../reveal";
import SiteEffects from "../../site-effects";
import SiteHeader from "../../../components/site-header";
import SiteFooter from "../../../components/site-footer";
import { CONTACT, docStyles as s } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | Elpis",
  description:
    "Elpis sets no tracking, advertising or analytics cookies. Sign-in state lives in local storage, which is why there is no cookie banner.",
};

export default function CookiesPage() {
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
          <h1 className="h1">Cookie Policy</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            Short version: we do not use tracking cookies, so there is no cookie banner and no
            cookie settings control to manage. This page explains what that means in detail.
          </p>

          <div style={s.body} data-reveal>
            <h2 style={s.h2}>1. What cookies are</h2>
            <p style={s.p}>
              Cookies are small text files a website asks your browser to store. They are useful
              for keeping you signed in, remembering preferences, and tracking users across
              sites. The last kind is what cookie banners are about.
            </p>

            <h2 style={s.h2}>2. What Elpis uses</h2>
            <ul style={s.ul}>
              <li style={s.li}>
                <strong style={s.strong}>No tracking cookies.</strong> No advertising, no
                cross-site tracking, no marketing pixels.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>No analytics cookies.</strong> The marketing site is
                static files with no analytics or tag manager installed.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Sign-in is local storage, not a cookie.</strong> When
                you log in, your session token is kept in your browser&apos;s local storage so the
                app can authenticate requests. It is cleared when you log out. This is strictly
                necessary for the service to function.
              </li>
              <li style={s.li}>
                <strong style={s.strong}>Delivery cookies.</strong> Our hosting and CDN provider
                may set strictly necessary cookies to deliver and secure pages, for example to
                route traffic and defend against abuse. These are provider-controlled and used
                only for delivery and security.
              </li>
            </ul>

            <h2 style={s.h2}>3. Third parties</h2>
            <p style={s.p}>
              The apply form is relayed by FormSubmit, a form-to-email service; any cookies it
              sets belong to its own domain and are covered by its policy. When you connect an
              LLM provider with your own key, that provider processes your requests under your
              agreement with them. We do not embed social media widgets or video players from
              third parties.
            </p>

            <h2 style={s.h2}>4. Why there is no cookie banner</h2>
            <p style={s.p}>
              Consent banners exist for non-essential cookies. We do not set any, so there is
              nothing to consent to and no cookie settings panel to offer. If we ever add an
              optional cookie (for example, privacy-friendly analytics), we will update this page
              and put a proper consent control in place before it runs.
            </p>

            <h2 style={s.h2}>5. Managing cookies yourself</h2>
            <p style={s.p}>
              You can delete or block cookies in your browser settings at any time. Blocking
              everything will sign you out and prevent staying signed in, because the app relies
              on local storage for your session.
            </p>

            <h2 style={s.h2}>6. Contact</h2>
            <p style={s.p}>
              Questions:{" "}
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
