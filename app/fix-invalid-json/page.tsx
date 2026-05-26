import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, Wrench, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Fix Invalid JSON | Common Errors and Solutions",
  description:
    "Learn how to fix invalid JSON with step-by-step solutions for the 8 most common errors. Fix trailing commas, single quotes, unquoted keys, and more.",
  alternates: {
    canonical: "https://json-formatter-online.pages.dev/fix-invalid-json/",
  },
  openGraph: {
    title: "How to Fix Invalid JSON | Common Errors and Solutions",
    description:
      "Learn how to fix invalid JSON with step-by-step solutions for the 8 most common errors.",
    url: "https://json-formatter-online.pages.dev/fix-invalid-json/",
    type: "article",
  },
};

const errors = [
  {
    id: "trailing-commas",
    title: "Trailing Commas",
    problem: `{
  "name": "Alice",
  "age": 30,
}`,
    fix: `{
  "name": "Alice",
  "age": 30
}`,
    explanation:
      "JSON strictly forbids trailing commas. Unlike JavaScript, you cannot leave a comma after the last property.",
  },
  {
    id: "single-quotes",
    title: "Single Quotes Around Strings",
    problem: `{
  'name': 'Alice',
  'age': 30
}`,
    fix: `{
  "name": "Alice",
  "age": 30
}`,
    explanation:
      'JSON requires double quotes for strings and object keys. Single quotes are valid in JavaScript but not in JSON.',
  },
  {
    id: "unquoted-keys",
    title: "Unquoted Object Keys",
    problem: `{
  name: "Alice",
  age: 30
}`,
    fix: `{
  "name": "Alice",
  "age": 30
}`,
    explanation:
      "All object keys in JSON must be wrapped in double quotes. Unquoted keys are valid in JavaScript objects but invalid in JSON.",
  },
  {
    id: "comments",
    title: "Comments in JSON",
    problem: `{
  // User information
  "name": "Alice",
  "age": 30
}`,
    fix: `{
  "name": "Alice",
  "age": 30
}`,
    explanation:
      "Standard JSON does not support comments. If you need comments, use JSON5 or store them in a separate field.",
  },
  {
    id: "undefined-nan",
    title: "Undefined or NaN Values",
    problem: `{
  "name": "Alice",
  "score": undefined,
  "rating": NaN
}`,
    fix: `{
  "name": "Alice",
  "score": null,
  "rating": null
}`,
    explanation:
      'JSON does not support undefined or NaN. Use null instead, or omit the property entirely.',
  },
  {
    id: "unescaped",
    title: "Unescaped Special Characters",
    problem: `{
  "bio": "Line one
Line two"
}`,
    fix: `{
  "bio": "Line one\\nLine two"
}`,
    explanation:
      "Control characters like newlines must be escaped with a backslash. Use \\n for newlines, \\t for tabs, etc.",
  },
  {
    id: "bom",
    title: "BOM (Byte Order Mark)",
    problem: `\uFEFF{
  "name": "Alice"
}`,
    fix: `{
  "name": "Alice"
}`,
    explanation:
      "Some editors add an invisible BOM character at the start of UTF-8 files. This breaks JSON parsers. Save the file without BOM.",
  },
  {
    id: "escape-sequences",
    title: "Incorrect Escape Sequences",
    problem: `{
  "path": "C:\\Users\\Alice\\file.json"
}`,
    fix: `{
  "path": "C:\\\\Users\\\\Alice\\\\file.json"
}`,
    explanation:
      'Backslashes must be escaped as \\\\ in JSON strings. A single backslash is interpreted as an escape character.',
  },
];

const faqs = [
  {
    q: "What does 'Unexpected token' mean in JSON?",
    a: "It means the parser found a character it did not expect at that position. Common causes include trailing commas, single quotes, or unquoted keys.",
  },
  {
    q: "Can I use comments in JSON?",
    a: "No, standard JSON does not support comments. Use JSON5 if you need comments, or add a separate '_comment' field.",
  },
  {
    q: "Why does my valid JavaScript object fail as JSON?",
    a: "JavaScript objects allow features that JSON does not: single quotes, unquoted keys, trailing commas, undefined, NaN, and comments.",
  },
  {
    q: "How do I find the exact line of a JSON error?",
    a: "Paste your JSON into a validator. The error message usually includes the line and column number where parsing failed.",
  },
  {
    q: "What is the fastest way to fix broken JSON?",
    a: "Use an online JSON validator that shows the exact error location. Fix one error at a time, then re-validate.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FixInvalidJsonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:underline"
            style={{ color: "var(--primary)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to JSON Formatter
          </Link>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How to Fix Invalid JSON: Common Errors and Solutions
        </h1>

        <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
          Invalid JSON is one of the most frustrating errors in development. This guide covers the 8 most common JSON errors, shows you exactly how to identify them, and gives you step-by-step fixes.
        </p>

        {/* Table of Contents */}
        <div
          className="rounded-xl p-6 mb-10"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold mb-3">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#what-makes-invalid" className="hover:underline" style={{ color: "var(--primary)" }}>
                What Makes JSON Invalid?
              </a>
            </li>
            <li>
              <a href="#common-errors" className="hover:underline" style={{ color: "var(--primary)" }}>
                The 8 Most Common JSON Errors
              </a>
            </li>
            <li>
              <a href="#find-location" className="hover:underline" style={{ color: "var(--primary)" }}>
                How to Find the Exact Error Location
              </a>
            </li>
            <li>
              <a href="#step-by-step" className="hover:underline" style={{ color: "var(--primary)" }}>
                Step-by-Step: Fix Your JSON
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline" style={{ color: "var(--primary)" }}>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* What Makes JSON Invalid */}
        <h2 id="what-makes-invalid" className="text-2xl font-bold mb-4">
          What Makes JSON Invalid?
        </h2>
        <p className="mb-6" style={{ color: "var(--foreground)" }}>
          JSON (JavaScript Object Notation) has a strict specification defined by{" "}
          <a
            href="https://datatracker.ietf.org/doc/html/rfc8259"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--primary)" }}
          >
            RFC 8259
          </a>
          . Any deviation from this spec makes the JSON invalid. The problem is that many developers write JSON-like structures that work in JavaScript but fail strict JSON parsing.
        </p>

        {/* Common Errors */}
        <h2 id="common-errors" className="text-2xl font-bold mb-6">
          The 8 Most Common JSON Errors (With Fixes)
        </h2>

        <div className="space-y-8 mb-10">
          {errors.map((err, idx) => (
            <div
              key={err.id}
              id={err.id}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "var(--surface)" }}
              >
                <AlertTriangle className="w-5 h-5" style={{ color: "var(--error)" }} />
                <h3 className="font-semibold text-lg">
                  Error {idx + 1} — {err.title}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4" style={{ color: "var(--error)" }} />
                    <span className="text-sm font-medium">Incorrect</span>
                  </div>
                  <pre
                    className="p-4 rounded-lg overflow-x-auto text-sm font-mono"
                    style={{ background: "#fef2f2", color: "#991b1b" }}
                  >
                    <code>{err.problem}</code>
                  </pre>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4" style={{ color: "var(--success)" }} />
                    <span className="text-sm font-medium">Correct</span>
                  </div>
                  <pre
                    className="p-4 rounded-lg overflow-x-auto text-sm font-mono"
                    style={{ background: "#f0fdf4", color: "#166534" }}
                  >
                    <code>{err.fix}</code>
                  </pre>
                </div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {err.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Find Error Location */}
        <h2 id="find-location" className="text-2xl font-bold mb-4">
          How to Find the Exact Error Location
        </h2>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          When JSON.parse() throws an error, the message usually includes the line and column number. But reading these messages takes practice.
        </p>
        <div
          className="rounded-lg p-4 mb-6 font-mono text-sm"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p style={{ color: "var(--error)" }}>SyntaxError: Unexpected token \u007D in JSON at position 42</p>
        </div>
        <p className="mb-6" style={{ color: "var(--foreground)" }}>
          This means the parser hit a closing brace <code>{"}"}</code> where it expected something else — usually a value after a trailing comma. Count characters from the start, or use an online validator that highlights the exact position.
        </p>

        {/* Step by Step */}
        <h2 id="step-by-step" className="text-2xl font-bold mb-4">
          Step-by-Step: Fix Your JSON
        </h2>
        <div className="space-y-4 mb-10">
          {[
            "Paste your JSON into the validator",
            "Read the error message and note the line/column",
            "Check the 8 common errors above — does it match?",
            "Apply the fix",
            "Validate again until it passes",
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                {idx + 1}
              </div>
              <p className="pt-1" style={{ color: "var(--foreground)" }}>
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="faq" className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-xl p-8 text-center"
          style={{ background: "var(--primary)", color: "#fff" }}
        >
          <Wrench className="w-10 h-10 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Fix Your JSON Now</h2>
          <p className="mb-6 opacity-90">
            Paste your broken JSON into our free validator. Get instant error detection and clear fix instructions.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
            style={{ background: "#fff", color: "var(--primary)" }}
          >
            Try JSON Formatter Online →
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
