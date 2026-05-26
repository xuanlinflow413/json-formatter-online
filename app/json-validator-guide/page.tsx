import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Shield, Terminal, FileJson } from "lucide-react";

export const metadata: Metadata = {
  title: "JSON Validator Guide | How to Check JSON Syntax and Structure",
  description:
    "Learn JSON validation from scratch. Understand syntax rules, common errors, and how to validate JSON in JavaScript, Python, Go, and online.",
  alternates: {
    canonical: "https://json-formatter-online.pages.dev/json-validator-guide/",
  },
  openGraph: {
    title: "JSON Validator Guide | How to Check JSON Syntax and Structure",
    description:
      "Learn JSON validation from scratch. Understand syntax rules, common errors, and how to validate JSON in multiple languages.",
    url: "https://json-formatter-online.pages.dev/json-validator-guide/",
    type: "article",
  },
};

const syntaxRules = [
  {
    rule: "Keys must be double-quoted strings",
    example: `{ "name": "Alice" }`,
    invalid: `{ name: "Alice" }`,
  },
  {
    rule: "No trailing commas",
    example: `{ "a": 1, "b": 2 }`,
    invalid: `{ "a": 1, "b": 2, }`,
  },
  {
    rule: "No comments",
    example: `{ "a": 1 }`,
    invalid: `{ /* comment */ "a": 1 }`,
  },
  {
    rule: "No undefined or NaN values",
    example: `{ "a": null }`,
    invalid: `{ "a": undefined }`,
  },
  {
    rule: "No functions or dates (in standard JSON)",
    example: `{ "created": "2024-01-15T10:00:00Z" }`,
    invalid: `{ "created": new Date() }`,
  },
];

const validationErrors = [
  {
    error: 'Unexpected token } in JSON at position 42',
    cause: "Trailing comma before the closing brace",
    fix: "Remove the comma after the last property",
  },
  {
    error: 'Unexpected end of JSON input',
    cause: "Missing closing brace or bracket",
    fix: "Add the missing } or ] at the end",
  },
  {
    error: 'Unexpected token \' in JSON at position 15',
    cause: "Single quotes used instead of double quotes",
    fix: "Replace all single quotes with double quotes",
  },
  {
    error: 'Unexpected token : in JSON at position 8',
    cause: "Unquoted object key",
    fix: "Wrap the key in double quotes",
  },
];

const languageExamples = [
  {
    lang: "JavaScript",
    icon: "JS",
    code: `try {
  JSON.parse(jsonString);
  console.log("Valid JSON");
} catch (e) {
  console.log("Invalid:", e.message);
}`,
  },
  {
    lang: "Python",
    icon: "PY",
    code: `import json

try:
    json.loads(json_string)
    print("Valid JSON")
except json.JSONDecodeError as e:
    print("Invalid:", e.msg)`,
  },
  {
    lang: "Go",
    icon: "GO",
    code: `import "encoding/json"

var data interface{}
err := json.Unmarshal([]byte(jsonString), &data)
if err != nil {
    log.Fatal("Invalid JSON:", err)
}`,
  },
  {
    lang: "Postman",
    icon: "PM",
    code: `// In Tests tab
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});`,
  },
];

const faqs = [
  {
    q: "What is the difference between JSON validation and JSON formatting?",
    a: "Validation checks if JSON is syntactically correct. Formatting adds whitespace for readability. You should validate first, then format.",
  },
  {
    q: "Can JSON be valid but still wrong?",
    a: "Yes. JSON can be syntactically valid but semantically incorrect — for example, a string where a number is expected, or a missing required field.",
  },
  {
    q: "Does JSON validation check data types?",
    a: "Basic validation only checks syntax. To validate data types and structure, use JSON Schema validation.",
  },
  {
    q: "How do I validate large JSON files?",
    a: "For files over 10MB, use streaming validators or command-line tools like jq. Browser-based tools may struggle with very large files.",
  },
  {
    q: "Is there a JSON standard I should follow?",
    a: "Yes, RFC 8259 is the current JSON standard. It supersedes RFC 7159 and ECMA-404.",
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

export default function JsonValidatorGuidePage() {
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
          JSON Validator Guide: How to Check JSON Syntax and Structure
        </h1>

        <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
          JSON validation is the first step before parsing, storing, or transmitting data. This guide covers the rules, common errors, and how to validate JSON in any environment.
        </p>

        {/* Table of Contents */}
        <div
          className="rounded-xl p-6 mb-10"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold mb-3">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#what-is" className="hover:underline" style={{ color: "var(--primary)" }}>
                What Is JSON Validation?
              </a>
            </li>
            <li>
              <a href="#why-matters" className="hover:underline" style={{ color: "var(--primary)" }}>
                Why JSON Validation Matters
              </a>
            </li>
            <li>
              <a href="#syntax-rules" className="hover:underline" style={{ color: "var(--primary)" }}>
                JSON Syntax Rules
              </a>
            </li>
            <li>
              <a href="#common-errors" className="hover:underline" style={{ color: "var(--primary)" }}>
                Common Validation Errors
              </a>
            </li>
            <li>
              <a href="#how-to-validate" className="hover:underline" style={{ color: "var(--primary)" }}>
                How to Validate JSON
              </a>
            </li>
            <li>
              <a href="#languages" className="hover:underline" style={{ color: "var(--primary)" }}>
                Validating in Different Languages
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline" style={{ color: "var(--primary)" }}>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* What Is */}
        <h2 id="what-is" className="text-2xl font-bold mb-4">
          What Is JSON Validation?
        </h2>
        <p className="mb-6" style={{ color: "var(--foreground)" }}>
          JSON validation checks whether a string follows the JSON specification. A validator parses the string and reports any syntax errors. Valid JSON does not guarantee the data is correct — only that it is parseable.
        </p>

        {/* Why Matters */}
        <h2 id="why-matters" className="text-2xl font-bold mb-4">
          Why JSON Validation Matters
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <div>
              <h3 className="font-semibold mb-1">Preventing Runtime Errors</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Invalid JSON passed to JSON.parse() throws a SyntaxError. Validating first prevents crashes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileJson className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <div>
              <h3 className="font-semibold mb-1">API Contract Enforcement</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                APIs that accept JSON should validate input before processing. This catches malformed requests early.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <div>
              <h3 className="font-semibold mb-1">Data Integrity</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Validated JSON ensures downstream systems receive parseable data. This is critical for data pipelines and ETL processes.
              </p>
            </div>
          </div>
        </div>

        {/* Syntax Rules */}
        <h2 id="syntax-rules" className="text-2xl font-bold mb-4">
          JSON Syntax Rules (The Complete List)
        </h2>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          These rules come from{" "}
          <a
            href="https://datatracker.ietf.org/doc/html/rfc8259"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--primary)" }}
          >
            RFC 8259
          </a>
          , the official JSON specification. Every validator enforces these.
        </p>

        <div className="space-y-4 mb-8">
          {syntaxRules.map((rule, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="px-6 py-3 font-semibold text-sm"
                style={{ background: "var(--surface)" }}
              >
                {rule.rule}
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-medium mb-1 block" style={{ color: "var(--error)" }}>Invalid</span>
                  <pre
                    className="p-3 rounded text-xs font-mono"
                    style={{ background: "#fef2f2", color: "#991b1b" }}
                  >
                    <code>{rule.invalid}</code>
                  </pre>
                </div>
                <div>
                  <span className="text-xs font-medium mb-1 block" style={{ color: "var(--success)" }}>Valid</span>
                  <pre
                    className="p-3 rounded text-xs font-mono"
                    style={{ background: "#f0fdf4", color: "#166534" }}
                  >
                    <code>{rule.example}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Errors */}
        <h2 id="common-errors" className="text-2xl font-bold mb-4">
          Common JSON Validation Errors
        </h2>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          When JSON.parse() fails, it throws a SyntaxError with a message. Learning to read these messages is half the battle.
        </p>

        <div className="space-y-4 mb-8">
          {validationErrors.map((err, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div
                className="p-3 rounded-lg mb-3 font-mono text-sm"
                style={{ background: "#fef2f2", color: "#991b1b" }}
              >
                {err.error}
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium" style={{ color: "var(--muted)" }}>Cause: </span>
                  {err.cause}
                </div>
                <div>
                  <span className="font-medium" style={{ color: "var(--muted)" }}>Fix: </span>
                  {err.fix}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Validate */}
        <h2 id="how-to-validate" className="text-2xl font-bold mb-4">
          How to Validate JSON (Step-by-Step)
        </h2>
        <div className="space-y-4 mb-8">
          {[
            "Paste your JSON into the input box",
            "Click the Validate button",
            "Read the result — green means valid, red shows the error",
            "If invalid, fix the error and validate again",
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

        {/* Languages */}
        <h2 id="languages" className="text-2xl font-bold mb-4">
          Validating JSON in Different Languages
        </h2>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          Every major programming language has a built-in JSON parser. Here is how to validate JSON in the most common ones.
        </p>

        <div className="space-y-6 mb-10">
          {languageExamples.map((lang, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4" style={{ color: "var(--primary)" }} />
                <span className="font-semibold">{lang.lang}</span>
              </div>
              <pre
                className="p-4 rounded-lg overflow-x-auto text-sm font-mono"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <code>{lang.code}</code>
              </pre>
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
          <CheckCircle className="w-10 h-10 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Validate Your JSON Now</h2>
          <p className="mb-6 opacity-90">
            Paste your JSON into our free validator. Get instant syntax checking and clear error messages.
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
