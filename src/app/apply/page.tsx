"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../reveal";
import SiteEffects from "../site-effects";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import { CONTACT } from "../../lib/site";

// No signup, no server: FormSubmit relays submissions to this inbox.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT}`;
const THROTTLE_KEY = "elpis_apply_last";
const THROTTLE_MS = 60_000;

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--mono)",
  fontSize: 11.5,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--muted)",
  marginBottom: 8,
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 15,
  lineHeight: 1.5,
  color: "var(--ink)",
  background: "var(--bg)",
  border: "1px solid var(--line-strong)",
  borderRadius: 10,
  fontFamily: "var(--sans)",
};

const fieldGroup: React.CSSProperties = { marginBottom: 18 };

const teamSizes = ["1–5", "6–20", "21–50", "51–200", "200+"];

export default function ApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [team, setTeam] = useState("");
  const [stack, setStack] = useState("");
  const [goal, setGoal] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "throttled">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Honeypot: humans never see this field, so pretend success and stop.
    if (website) {
      setStatus("sent");
      return;
    }
    const last = Number(localStorage.getItem(THROTTLE_KEY) || "0");
    if (Date.now() - last < THROTTLE_MS) {
      setStatus("throttled");
      return;
    }
    localStorage.setItem(THROTTLE_KEY, String(Date.now()));
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Elpis apply: ${company || name}`,
          _replyto: email,
          _captcha: "false",
          _honey: website,
          // FormSubmit rejects requests without the submitting page's URL.
          _url: `${window.location.origin}/apply`,
          Name: name,
          Email: email,
          Company: company,
          "Team size": team,
          Stack: stack || "(not specified)",
          Goal: goal,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <ScrollReveal />
      <SiteEffects />
      <div className="noise" aria-hidden="true" />
      <SiteHeader />

      {/* Apply */}
      <section className="section" id="apply">
        <div className="shell">
          <div className="split">
            <div data-reveal>
              <div className="kicker">
                <em>For startups</em> · apply to work with us
              </div>
              <h2 className="h2">Want Elpis for your startup?</h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Tell us what you run and what you want watched. We reply within one business day,
                jump on a 30-minute scoping call, and quote a fixed-price Launch build up front.
                We deploy Elpis for you and you bring your own LLM key, so you keep the keys, the
                data and the audit trail. No per-seat pricing, no usage markup.
              </p>
              <div className="code" aria-hidden="true" style={{ marginTop: 28 }}>
                <div>
                  <span className="c"># what happens after you apply</span>
                </div>
                <div>1. we reply within 1 business day</div>
                <div>2. 30-min scoping call, no pitch deck</div>
                <div>3. fixed-price Launch build, quoted up front</div>
                <div>4. we deploy it; you BYOK your own key</div>
                <div>
                  5. optional hosted plan{" "}
                  <span className="p">if you&apos;d rather we run it</span>
                </div>
              </div>
            </div>

            <div data-reveal>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--line-strong)",
                  borderRadius: 18,
                  padding: 32,
                  boxShadow: "8px 8px 0 rgba(12, 13, 10, 0.12)",
                }}
              >
                {status === "sent" ? (
                  <div>
                    <div style={{ ...labelStyle, color: "var(--ink)" }}>
                      Application received
                    </div>
                    <p className="lede" style={{ fontSize: 16, marginTop: 0 }}>
                      Thanks{name ? `, ${name.split(" ")[0]}` : ""}, your application is in our
                      inbox. We&apos;ll reply within one business day to set up the scoping call.
                    </p>
                    <Link className="btn btn-ghost" href="/" style={{ marginTop: 8 }}>
                      ← Back to the site
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={onSubmit}>
                    <div style={{ ...labelStyle, color: "var(--ink)" }}>
                      Apply: takes 30 seconds
                    </div>

                    <div style={fieldGroup}>
                      <label style={labelStyle} htmlFor="apply-name">
                        Name *
                      </label>
                      <input
                        id="apply-name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Ada Lovelace"
                        style={fieldStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div style={fieldGroup}>
                      <label style={labelStyle} htmlFor="apply-email">
                        Work email *
                      </label>
                      <input
                        id="apply-email"
                        type="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        placeholder="you@startup.dev"
                        style={fieldStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div style={fieldGroup}>
                      <label style={labelStyle} htmlFor="apply-company">
                        Startup / company *
                      </label>
                      <input
                        id="apply-company"
                        type="text"
                        required
                        maxLength={200}
                        autoComplete="organization"
                        placeholder="Acme Payments"
                        style={fieldStyle}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>

                    <div style={fieldGroup}>
                      <label style={labelStyle} htmlFor="apply-team">
                        Team size *
                      </label>
                      <select
                        id="apply-team"
                        required
                        style={fieldStyle}
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                      >
                        <option value="" disabled>
                          Select…
                        </option>
                        {teamSizes.map((size) => (
                          <option key={size} value={size}>
                            {size} people
                          </option>
                        ))}
                      </select>
                    </div>

                    <div style={fieldGroup}>
                      <label style={labelStyle} htmlFor="apply-stack">
                        Your stack (optional)
                      </label>
                      <input
                        id="apply-stack"
                        type="text"
                        maxLength={300}
                        placeholder="AWS, Kubernetes, Datadog…"
                        style={fieldStyle}
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                      />
                    </div>

                    <div style={fieldGroup}>
                      <label style={labelStyle} htmlFor="apply-goal">
                        What do you want Elpis to do? *
                      </label>
                      <textarea
                        id="apply-goal"
                        required
                        rows={4}
                        maxLength={2000}
                        placeholder="Watch our production API, investigate alerts, propose fixes we can approve…"
                        style={{ ...fieldStyle, resize: "vertical" }}
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                      />
                    </div>

                    {/* Honeypot: hidden from humans, bots tend to fill it. */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                      }}
                    >
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>

                    {status === "throttled" && (
                      <p
                        style={{
                          color: "#b3261e",
                          fontSize: 14,
                          lineHeight: 1.5,
                          margin: "0 0 14px",
                        }}
                      >
                        You just sent an application. Please wait a minute before sending
                        another one.
                      </p>
                    )}

                    {status === "error" && (
                      <p
                        style={{
                          color: "#b3261e",
                          fontSize: 14,
                          lineHeight: 1.5,
                          margin: "0 0 14px",
                        }}
                      >
                        Something went wrong sending the form. Email us directly at{" "}
                        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
                      </p>
                    )}

                    <button
                      className="btn btn-accent"
                      type="submit"
                      disabled={status === "sending" || status === "throttled"}
                      style={{ width: "100%", opacity: status === "sending" ? 0.6 : 1 }}
                    >
                      {status === "sending" ? "Sending…" : "Send application →"}
                    </button>

                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--muted)",
                        margin: "14px 0 0",
                        lineHeight: 1.6,
                      }}
                    >
                      Goes straight to our inbox · no newsletter · no sales sequence
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
