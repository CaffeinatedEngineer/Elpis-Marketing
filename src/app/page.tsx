import ScrollReveal from "./reveal";
import SiteEffects from "./site-effects";

// Hosted app (Cloudflare quick tunnel — update when a stable domain lands).
const APP = "https://lisa-threats-exclusive-managed.trycloudflare.com";

const whyItems = [
  {
    title: "Correlate evidence across every source in one pass.",
    body: "Logs, metrics, traces, deployments, Git history and past incidents are collected in parallel by specialist agents, so there is no more tab-hopping through six consoles to form one hypothesis.",
    media: (
      <>
        <div><span className="k">collect_logs</span> ........ <span className="hl">done</span></div>
        <div><span className="k">collect_metrics</span> ...... <span className="hl">done</span></div>
        <div><span className="k">collect_traces</span> ....... <span className="hl">done</span></div>
        <div><span className="k">collect_deployments</span> .. <span className="hl">done</span></div>
        <div><span className="k">git_analysis</span> ......... <span className="hl">done</span></div>
        <div><span className="k">historical_search</span> .... <span className="hl">done</span></div>
      </>
    ),
  },
  {
    title: "Root causes backed by evidence, not vibes.",
    body: "Every conclusion ships with the log lines, metric deltas, commits and deployments that support it, plus alternative hypotheses and a confidence score you can challenge.",
    media: (
      <>
        <div><span className="k">root_cause</span> = connection pool exhaustion</div>
        <div><span className="k">confidence</span> = <span className="hl">0.93</span></div>
        <div><span className="sky">✓</span> DB connections reached 98/100</div>
        <div><span className="sky">✓</span> timeout errors up 14×</div>
        <div><span className="sky">✓</span> pool size changed in v1.8.3</div>
      </>
    ),
  },
  {
    title: "Nothing touches production without a human.",
    body: "A risk engine classifies every proposed action. Low-risk steps run automatically, anything riskier stops at an RBAC-gated approval screen, and destructive actions are prohibited outright.",
    media: (
      <>
        <div><span className="k">risk_engine</span> → <span className="hl">HIGH</span></div>
        <div>rollback_deployment</div>
        <div><span className="k">approval</span> → SRE role required</div>
        <div><span className="warn">awaiting your decision…</span></div>
        <div><span className="k">delete_database</span> → <span style={{ color: "var(--danger)" }}>PROHIBITED</span></div>
      </>
    ),
  },
  {
    title: "Guardrails on tool calls, time, and spend.",
    body: "Every investigation runs inside hard caps: 30 tool calls, 5 minutes, $0.10 of LLM spend, 3 retries. When a limit trips, the graph stops and says so instead of burning budget.",
    media: (
      <>
        <div><span className="k">max_tool_calls</span> <span className="hl">30</span></div>
        <div><span className="k">max_duration</span>&nbsp;&nbsp;&nbsp; <span className="hl">300s</span></div>
        <div><span className="k">max_cost</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="hl">$0.10</span></div>
        <div><span className="k">max_retries</span>&nbsp;&nbsp;&nbsp; <span className="hl">3</span></div>
        <div><span className="k">budget spent</span> $0.04 <span className="sky">▮▮▮▯▯▯▯▯▯▯</span></div>
      </>
    ),
  },
  {
    title: "It remembers, and gets cheaper every time.",
    body: "Investigations are embedded into pgvector memory and retrieved as incident RAG. Semantic caching reuses near-identical answers, and recurring root causes auto-generate runbooks.",
    media: (
      <>
        <div><span className="k">rag.search_similar</span>(k=3) <span className="hl">→ 3 hits</span></div>
        <div><span className="k">cache</span> redis → postgres → pgvector</div>
        <div><span className="k">recurrence ≥ 3</span> → <span className="hl">runbook draft</span></div>
        <div><span className="k">route</span> classify→cheap root_cause→reasoning</div>
        <div><span className="k">compress_logs</span> 10k lines → ≤30 patterns</div>
      </>
    ),
  },
];

const capabilities = [
  {
    label: "Investigate",
    color: "var(--magenta)",
    text: "An 18-node LangGraph workflow fans out across six evidence sources in parallel, then assembles one correlated picture of the incident.",
    meta: "intake → classify → collect → assemble",
  },
  {
    label: "Diagnose",
    color: "var(--sky)",
    text: "Hypotheses are generated, tested against telemetry, and promoted to a root cause only when confidence clears the 0.8 gate. Otherwise, the graph gathers more evidence.",
    meta: "hypothesis → test → confidence gate",
  },
  {
    label: "Remediate",
    color: "var(--amber)",
    text: "A planner proposes the smallest safe fix, such as restart, scale, rollback, or clear cache, classified by a risk table before anyone is paged.",
    meta: "12 typed actions · 4 risk levels",
  },
  {
    label: "Approve",
    color: "var(--accent)",
    text: "Human-in-the-loop gates with JWT + four RBAC roles. Engineers run investigations, SREs approve fixes, admins own policy.",
    meta: "viewer · engineer · sre · admin",
  },
  {
    label: "Verify",
    color: "var(--mint)",
    text: "After execution, a verification step compares error rate and latency against the pre-incident baseline before declaring RECOVERED.",
    meta: "before/after comparison",
  },
  {
    label: "Report",
    color: "var(--violet)",
    text: "Each incident ends with a structured report covering summary, root cause, evidence, actions, and verification, then is written back into organizational memory.",
    meta: "report → RAG memory → runbooks",
  },
];

const flowSteps = [
  "Alert",
  "Classify",
  "Collect evidence (×6 parallel)",
  "Guardrail check",
  "Hypotheses",
  "Root cause",
  "Risk assessment",
  "Human approval",
  "Execute",
  "Verify",
  "Report",
];

const stats = [
  { num: "18", label: "workflow nodes in the investigation graph" },
  { num: "24", label: "reproducible fault scenarios (8 base + 16 variants)" },
  { num: "$0.10", label: "hard LLM budget per incident" },
  { num: "4", label: "RBAC roles gating every action" },
  { num: "30", label: "tool-call cap per investigation" },
  { num: "6", label: "specialist agents collecting evidence in parallel" },
  { num: "384", label: "dimension pgvector embeddings for incident RAG" },
  { num: "26", label: "passing tests in the CI suite" },
];

const stack = [
  "FastAPI",
  "LangGraph",
  "Neon Postgres + pgvector",
  "Ollama (llama3.1:8b)",
  "Next.js 16",
  "JWT / RBAC",
  "Prometheus",
  "OpenTelemetry",
  "Loki",
  "GitHub API",
  "Docker",
  "Kubernetes",
];

const agentLanes = [
  { label: "Logs", value: "14x timeout spike", tone: "sky" },
  { label: "Metrics", value: "98/100 DB conns", tone: "mint" },
  { label: "Traces", value: "p95 +420ms", tone: "amber" },
  { label: "Deploy", value: "v1.8.3 at 12:04", tone: "violet" },
  { label: "Git", value: "pool config touched", tone: "magenta" },
  { label: "Memory", value: "3 similar incidents", tone: "accent" },
];

const footerLinks = {
  Platform: [
    ["Investigation graph", "#platform"],
    ["Evidence and root cause", "#platform"],
    ["Risk engine and approvals", "#how"],
    ["Memory and runbooks", "#how"],
  ],
  Developers: [
    ["Quickstart", "#start"],
    ["Live app", APP],
    ["Evaluation harness", "#evaluation"],
    ["Sign up", `${APP}/signup`],
  ],
  Architecture: [
    ["LangGraph workflow", "#how"],
    ["Model routing and budgets", "#how"],
    ["Incident RAG", "#how"],
    ["Observability", "#how"],
  ],
  Project: [
    ["Try the demo", `${APP}/login`],
    ["Sign up free", `${APP}/signup`],
    ["Apply for startups", "/apply"],
    ["Bring your own key", "#start"],
  ],
};

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <SiteEffects />
      <div className="noise" aria-hidden="true" />
      {/* Header */}
      <header className="header">
        <div className="shell header-inner">
          <a href="#" className="brand">
            <span className="brand-mark" />
            Elpis
          </a>
          <nav className="nav">
            <a href="#why">Why Elpis</a>
            <a href="#platform">Platform</a>
            <a href="#how">How it works</a>
            <a href="#evaluation">Evaluation</a>
            <a href="#start">Get started</a>
            <a href="/apply">For startups</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-ghost btn-sm" href={`${APP}/signup`}>
              Try it free
            </a>
            <a className="btn btn-sm" href="/apply">
              Apply now
            </a>
          </div>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div className="mobile-nav-panel">
              <a href="#why">Why Elpis</a>
              <a href="#platform">Platform</a>
              <a href="#how">How it works</a>
              <a href="#evaluation">Evaluation</a>
              <a href="#start">Get started</a>
              <a href="/apply">For startups</a>
              <a href={`${APP}/signup`}>Try it free</a>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="hero grid-bg">
        <div className="shell">
          <div className="hero-grid">
            <div data-reveal>
              <div className="hero-badge">
                <span className="dot" />
                AI-powered autonomous incident response
              </div>
              <h1 className="h1">Incidents investigated while you read the alert.</h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Elpis is an AI SRE that correlates logs, metrics, traces, deployments and Git
                changes into an evidence-backed root cause, proposes a risk-classified fix, and
                executes only after a human says yes, with a full audit trail. Open signup — no
                card, no sales call — and you bring your own LLM key, so there is zero markup on
                your AI spend.
              </p>
              <div className="hero-actions">
                <a className="btn btn-accent" href={`${APP}/signup`}>
                  Run the 60-second demo
                </a>
                <a className="btn btn-ghost" href="#how">
                  See how it works ↓
                </a>
              </div>
            </div>

            <div className="command-center" aria-hidden="true">
              <div className="command-glow" />
              <div className="console-window">
                <div className="console-topbar">
                  <div>
                    <div className="mock-label">INC-1042 / P1 / payments-api</div>
                    <div className="console-title">
                      <span className="pulse" />
                      Investigation running
                    </div>
                  </div>
                  <span className="mock-risk">risk: high</span>
                </div>

                <div className="signal-grid">
                  {agentLanes.map((lane) => (
                    <div className={`signal-card tone-${lane.tone}`} key={lane.label}>
                      <span>{lane.label}</span>
                      <strong>{lane.value}</strong>
                      <i />
                    </div>
                  ))}
                </div>

                <div className="diagnosis-panel">
                  <div>
                    <div className="mock-label">root cause / confidence 0.93</div>
                    <h3>Database connection pool exhaustion</h3>
                  </div>
                  <div className="confidence-ring">
                    <span>93%</span>
                  </div>
                </div>

                <div className="live-chart">
                  <span style={{ height: "34%" }} />
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "38%" }} />
                  <span style={{ height: "72%" }} />
                  <span style={{ height: "88%" }} />
                  <span style={{ height: "78%" }} />
                  <span style={{ height: "50%" }} />
                  <span style={{ height: "44%" }} />
                </div>

                <div className="timeline">
                  <div className="timeline-row active">
                    <span>01</span>
                    <p>Collectors assembled evidence from six sources.</p>
                  </div>
                  <div className="timeline-row active">
                    <span>02</span>
                    <p>Risk engine classified rollback as HIGH.</p>
                  </div>
                  <div className="timeline-row pending">
                    <span>03</span>
                    <p>Awaiting SRE approval before execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-strip" data-reveal>
            <span>
              Reproducible by design: 24 built-in fault scenarios, from pool exhaustion to bad
              deployments, injectable with one API call.
            </span>
            <a href="#platform">Explore the platform</a>
          </div>
        </div>
      </section>

      {/* Why Elpis */}
      <section className="section" id="why">
        <div className="shell">
          <h2 className="h2" style={{ marginBottom: 48 }}>
            Why Elpis?
          </h2>
          <div>
            {whyItems.map((item, i) => (
              <div className="why-item" key={i} data-reveal>
                <div className="why-num">{i + 1}</div>
                <div>
                  <div className="why-title">{item.title}</div>
                  <p className="why-body">{item.body}</p>
                </div>
                <div className="why-media">{item.media}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack strip */}
      <section className="section section-tight">
        <div className="shell stack-strip">
          <span className="stack-label">Built with</span>
          {stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>
      <div className="melt melt-light-dark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Platform and capabilities */}
      <section className="section section-dark grid-bg" id="platform">
        <div className="shell">
          <div className="kicker">
            <em>Platform</em> · one loop, end to end
          </div>
          <h2 className="h2">
            From alert to verified recovery, with evidence at every step.
          </h2>
          <p className="lede" style={{ marginTop: 20 }}>
            Elpis doesn&apos;t guess. Each stage produces structured output the next stage can
            check: classifications, evidence rows, hypotheses with confidence, risk-classified
            actions, approval records, and verification results.
          </p>
          <div className="cards">
            {capabilities.map((c) => (
              <div className="card" key={c.label} data-reveal>
                <span className="card-label" style={{ background: c.color }}>
                  {c.label}
                </span>
                <p>{c.text}</p>
                <div className="meta">{c.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="melt melt-dark-light" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Demo video */}
      <section className="section" id="demo">
        <div className="shell">
          <div className="video-frame">
            <video src="/demo.mp4" autoPlay muted loop playsInline />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how">
        <div className="shell">
          <div className="kicker">
            <em>How it works</em> · the investigation loop
          </div>
          <h2 className="h2">Eleven stages. One shared state. Zero hidden reasoning.</h2>

          <div className="flow">
            {flowSteps.map((s, i) => (
              <span key={s} style={{ display: "contents" }}>
                <span
                  className={`flow-step ${
                    s === "Human approval" || s === "Root cause" ? "key" : ""
                  }`}
                >
                  {s}
                </span>
                {i < flowSteps.length - 1 && <span className="flow-arrow">→</span>}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 88 }}>
            <div className="split" data-reveal>
              <div>
                <h3>Six agents collect evidence in parallel.</h3>
                <p>
                  Logs come from Loki, host metrics from Prometheus, spans from your trace store,
                  and real commits from the GitHub API. Each tool is narrowly scoped, times out
                  safely, and returns structured rows. If the telemetry stack is down, collectors
                  return empty results and the investigation still runs.
                </p>
                <div className="tags">
                  <span className="tag">search_logs</span>
                  <span className="tag">get_metrics</span>
                  <span className="tag">analyze_traces</span>
                  <span className="tag">get_recent_deployments</span>
                  <span className="tag">git_analysis</span>
                  <span className="tag">historical_search</span>
                </div>
              </div>
              <div className="code" aria-hidden="true">
                <div>
                  <span className="c"># inject a fault</span>
                </div>
                <div>
                  <span className="p">POST</span> /api/simulate/database_pool_exhaustion
                </div>
                <div style={{ marginTop: 12 }}>
                  <span className="c"># investigate it</span>
                </div>
                <div>
                  <span className="p">POST</span> /api/incidents/
                  <span className="s">{"{id}"}</span>/investigate
                </div>
                <div style={{ marginTop: 12 }}>
                  <span className="c"># risk-checked approval (SRE role)</span>
                </div>
                <div>
                  <span className="p">POST</span> /api/incidents/
                  <span className="s">{"{id}"}</span>/approve
                </div>
                <div style={{ marginTop: 12 }}>
                  <span className="c"># status → EXECUTED → RECOVERED</span>
                </div>
              </div>
            </div>

            <div className="split" data-reveal>
              <div className="code" aria-hidden="true">
                <div className="mock-label" style={{ marginBottom: 10 }}>
                  guardrail_check · hard caps
                </div>
                <div>
                  tool_calls <span className="hl">12 / 30</span> <span className="c">ok</span>
                </div>
                <div>
                  elapsed <span className="hl">41s / 300s</span> <span className="c">ok</span>
                </div>
                <div>
                  spend <span className="hl">$0.04 / $0.10</span> <span className="c">ok</span>
                </div>
                <div>
                  retries <span className="hl">1 / 3</span> <span className="c">ok</span>
                </div>
                <div style={{ marginTop: 10 }}>
                  <span className="c">→ continue to hypothesis</span>
                </div>
              </div>
              <div>
                <h3>Autonomy with a hard leash.</h3>
                <p>
                  The risk engine, not the model, decides who must approve. LOW actions run
                  automatically, MEDIUM and HIGH require SRE approval, and four CRITICAL actions
                  like delete_database are prohibited outright. Guardrails run as a graph node, so
                  an over-budget investigation is blocked before the next LLM call.
                </p>
                <div className="tags">
                  <span className="tag">risk table (12 actions)</span>
                  <span className="tag">RBAC (4 roles)</span>
                  <span className="tag">audit trail</span>
                  <span className="tag">30s token rotation</span>
                </div>
              </div>
            </div>

            <div className="split" data-reveal>
              <div>
                <h3>Remembered, measured, and cost-aware.</h3>
                <p>
                  Every finished incident is embedded into pgvector and retrievable as context for
                  the next one. A three-tier model router sends classification to cheap models and
                  root-cause work to reasoning models, semantic caching skips repeats, and log
                  compression trims raw telemetry to ≤30 patterns before it ever reaches the LLM.
                </p>
                <div className="tags">
                  <span className="tag">incident RAG</span>
                  <span className="tag">model routing</span>
                  <span className="tag">semantic cache</span>
                  <span className="tag">context compression</span>
                  <span className="tag">cost analytics</span>
                </div>
              </div>
              <div className="code" aria-hidden="true">
                <div className="mock-label" style={{ marginBottom: 10 }}>
                  GET /api/analytics/cost
                </div>
                <div>
                  total_cost_usd <span className="hl">0.42</span>
                </div>
                <div>
                  total_tokens <span className="hl">184,320</span>
                </div>
                <div>
                  llm_calls <span className="hl">36</span>
                </div>
                <div>
                  per_task.classify <span className="hl">12</span>
                </div>
                <div>
                  per_task.root_cause <span className="hl">8</span>
                </div>
                <div className="c" style={{ marginTop: 8 }}>
                  route: cheap / medium / reasoning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="melt melt-light-green" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Stats band */}
      <section className="section stats-band">
        <div className="shell">
          <div className="kicker" style={{ color: "rgba(12,13,10,0.7)" }}>
            <em style={{ background: "var(--ink)", color: "var(--accent)" }}>By the numbers</em>{" "}
            · measured, not claimed
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label} data-reveal>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="melt melt-green-dark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Evaluation */}
      <section className="section section-dark" id="evaluation">
        <div className="shell">
          <div className="split">
            <div>
              <div className="kicker">
                <em>Evaluation</em> · the AI is graded too
              </div>
              <h2 className="h2" style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>
                Quality, safety and cost are scored on every run.
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                A built-in evaluator replays all 24 fault scenarios against the full graph and
                scores two things that matter: did it name the correct root cause, and did it
                propose a safe action? Prometheus counters track LLM calls and investigations, and
                OpenTelemetry traces export every graph transition.
              </p>
              <div className="tags">
                <span className="tag">root-cause accuracy</span>
                <span className="tag">safe-action rate</span>
                <span className="tag">elpis_llm_calls_total</span>
                <span className="tag">OTLP → Jaeger</span>
              </div>
            </div>
            <div className="code" aria-hidden="true">
              <div>
                <span className="p">$</span> python -m evaluation.evaluator
              </div>
              <div style={{ marginTop: 10 }}>
                scenarios <span className="hl">24 / 24</span>
              </div>
              <div>
                root_cause_accuracy <span className="hl">1.00</span>
              </div>
              <div>
                safe_action_rate <span className="hl">1.00</span>
              </div>
              <div className="c" style={{ marginTop: 10 }}>
                # scores the heuristic fallback on the
              </div>
              <div className="c">simulated scenario set</div>
              <div style={{ marginTop: 14 }}>
                <span className="p">$</span> python -m pytest tests -q
              </div>
              <div>
                <span className="hl">26 passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="melt melt-dark-light" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Get started */}
      <section className="section" id="start">
        <div className="shell">
          <div className="cta-box">
            <div>
              <div className="kicker">
                <em>Get started</em> · open signup, no install
              </div>
              <h2 className="h2">Try it free in your browser.</h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Sign up with an email and password — you start at SRE. Inject a fault, hit
                investigate, and watch the agent graph, timeline and evidence fill in live. Then
                approve the fix and see it verify recovery. Every account gets private incidents,
                your own OpenAI-compatible key in Settings (or the free built-in model), and demo
                logins viewer / engineer / sre / admin.
              </p>
              <div className="cta-actions">
                <a className="btn btn-accent" href={`${APP}/signup`}>
                  Sign up free →
                </a>
                <a className="btn btn-ghost" href="/apply">
                  Want this for your startup? Apply →
                </a>
              </div>
            </div>
            <div className="code" aria-hidden="true">
              <div>
                <span className="c"># 1. sign up — open registration, role SRE</span>
              </div>
              <div>
                <span className="p">$</span> POST /api/auth/signup
              </div>
              <div style={{ marginTop: 12 }}>
                <span className="c"># 2. inject a P1 fault</span>
              </div>
              <div>
                <span className="p">$</span> POST /api/simulate/high_cpu
              </div>
              <div style={{ marginTop: 12 }}>
                <span className="c"># 3. investigate — runs in the background</span>
              </div>
              <div>
                <span className="p">$</span> POST /api/incidents/{"{id}"}/investigate
              </div>
              <div style={{ marginTop: 12 }}>
                <span className="c"># 4. approve as SRE → EXECUTED</span>
              </div>
              <div>
                <span className="p">$</span> POST /api/incidents/{"{id}"}/approve
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="shell">
          <div className="footer-hero">
            <div>
              <a href="#" className="brand footer-brand">
                <span className="brand-mark" />
                Elpis
              </a>
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
                {links.map(([label, href]) => {
                  const external = href.startsWith("http");
                  return (
                    <a
                      href={href}
                      key={label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="footer-fine">
            <span>© 2026 Elpis. AI incident investigation and remediation.</span>
            <span>FastAPI · LangGraph · Neon · Next.js</span>
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
    </main>
  );
}
