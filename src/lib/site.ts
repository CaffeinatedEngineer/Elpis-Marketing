// Hosted app on Cloudflare Pages (permanent free domain).
export const APP = "https://elpis-app.pages.dev";
export const CONTACT = "notsekiro11@gmail.com";

// Shared styles for content pages (inline only, no CSS file changes).
export const docStyles = {
  body: {
    maxWidth: "72ch" as const,
    marginTop: 28,
  },
  h2: {
    fontFamily: "var(--mono)",
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.07em",
    color: "var(--ink)",
    marginTop: 44,
    marginBottom: 10,
    lineHeight: 1.4,
  },
  p: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "var(--muted)",
    margin: "10px 0",
  },
  ul: {
    margin: "12px 0",
    paddingLeft: 20,
    fontSize: 16,
    lineHeight: 1.7,
    color: "var(--muted)",
  },
  li: {
    margin: "6px 0",
  },
  a: {
    color: "var(--ink)",
    textDecoration: "underline" as const,
    textUnderlineOffset: "3px",
    textDecorationColor: "var(--line-strong)" as const,
  },
  strong: {
    color: "var(--ink)",
    fontWeight: 600,
  },
  note: {
    fontFamily: "var(--mono)" as const,
    fontSize: 12,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    color: "var(--muted)",
    marginTop: 40,
    lineHeight: 1.7,
  },
};
