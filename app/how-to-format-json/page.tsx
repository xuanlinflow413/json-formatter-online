import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlignLeft, Terminal, Code, Copy, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Format JSON | A Complete Guide for Developers",
  description:
    "Learn how to format JSON manually and online. Step-by-step guide for JavaScript, Python, CLI tools, and our free JSON formatter.",
  alternates: {
    canonical: "https://json-formatter-online.pages.dev/how-to-format-json/",
  },
  openGraph: {
    title: "How to Format JSON | A Complete Guide for Developers",
    description:
      "Learn how to format JSON manually and online. Step-by-step guide for JavaScript, Python, CLI tools, and our free JSON formatter.",
    url: "https://json-formatter-online.pages.dev/how-to-format-json/",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is the standard indentation for JSON?",
    a: "Two spaces is the most common convention, but four spaces and tabs are also valid. The key is consistency within your project.",
  },
  {
    q: "Does formatting JSON change its data?",
    a: "No. Formatting only changes whitespace — indentation, line breaks, and spacing. The actual data structure and values remain identical.",
  },
  {
    q: "Can I format JSON without an internet connection?",
    a: "Yes. Use built-in tools like JSON.stringify() in JavaScript, json.dumps() in Python, or jq on the command line.",
  },
  {
    q: "Why does my formatted JSON look different in different tools?",
    a: "Different formatters use different indentation defaults (2 vs 4 spaces), key sorting rules, and line wrapping. Most tools let you configure these.",
  },
  {
    q: "Should I commit formatted or minified JSON to git?",
    a: "Commit formatted JSON for readability during code review. Use minified JSON only for production builds or API responses where size matters.",
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

export default function HowToFormatJsonPage() {
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
          How to Format JSON: A Complete Guide for Developers
        </h1>

        <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
          Raw JSON is hard to read. This guide shows you how to format JSON for readability — using code, command-line tools, and our free online formatter.
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
                What Is JSON Formatting?
              </a>
            </li>
            <li>
              <a href="#why-matters" className="hover:underline" style={{ color: "var(--primary)" }}>
                Why Formatting JSON Matters
              </a>
            </li>
            <li>
              <a href="#manual" className="hover:underline" style={{ color: "var(--primary)" }}>
                How to Format JSON Manually
              </a>
            </li>
            <li>
              <a href="#mistakes" className="hover:underline" style={{ color: "var(--primary)" }}>
                Common Formatting Mistakes
              </a>
            </li>
            <li>
              <a href="#online" className="hover:underline" style={{ color: "var(--primary)" }}>
                How to Format JSON Online
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
          What Is JSON Formatting?
        </h2>
        <p className="mb-6" style={{ color: "var(--foreground)" }}>
          JSON formatting is the process of adding whitespace — indentation, line breaks, and spacing — to JSON data so humans can read it. The underlying data does not change. Only the presentation changes.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4" style={{ color: "var(--error)" }} />
              <span className="text-sm font-medium">Unformatted</span>
            </div>
            <pre
              className="p-4 rounded-lg overflow-x-auto text-xs font-mono"
              style={{ background: "#fef2f2", color: "#991b1b" }}
            >
              <code>{`{"users":[{"id":1,"name":"Alice","roles":["admin"]},{"id":2,"name":"Bob","roles":["viewer"]}],"settings":{"theme":"dark","notifications":true}}`}</code>
            </pre>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4" style={{ color: "var(--success)" }} />
              <span className="text-sm font-medium">Formatted</span>
            </div>
            <pre
              className="p-4 rounded-lg overflow-x-auto text-xs font-mono"
              style={{ background: "#f0fdf4", color: "#166534" }}
            >
              <code>{`{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "roles": ["admin"]
    },
    {
      "id": 2,
      "name": "Bob",
      "roles": ["viewer"]
    }
  ],
  "settings": {
    "theme": "dark",
    "notifications": true
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Why Matters */}
        <h2 id="why-matters" className="text-2xl font-bold mb-4">
          Why Formatting JSON Matters
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <AlignLeft className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <div>
              <h3 className="font-semibold mb-1">Readability</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Nested objects and arrays are impossible to scan in a single line. Proper indentation reveals the structure instantly.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <div>
              <h3 className="font-semibold mb-1">Debugging</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                When an API returns malformed JSON, formatting it is the first step to finding the error.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Copy className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <div>
              <h3 className="font-semibold mb-1">Version Control</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Formatted JSON produces meaningful diffs. Minified JSON shows the entire line changed for a single character edit.
              </p>
            </div>
          </div>
        </div>

        {/* Manual Formatting */}
        <h2 id="manual" className="text-2xl font-bold mb-4">
          How to Format JSON Manually
        </h2>

        <h3 className="text-lg font-semibold mb-3">JavaScript: JSON.stringify()</h3>
        <pre
          className="p-4 rounded-lg overflow-x-auto text-sm font-mono mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <code>{`const obj = { name: "Alice", age: 30 };

// Format with 2-space indentation
const formatted = JSON.stringify(obj, null, 2);
console.log(formatted);

// Output:
// {
//   "name": "Alice",
//   "age": 30
// }`}</code>
        </pre>

        <h3 className="text-lg font-semibold mb-3">Python: json.dumps()</h3>
        <pre
          className="p-4 rounded-lg overflow-x-auto text-sm font-mono mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <code>{`import json

data = {"name": "Alice", "age": 30}

# Format with 2-space indentation
formatted = json.dumps(data, indent=2)
print(formatted)`}</code>
        </pre>

        <h3 className="text-lg font-semibold mb-3">Command Line: jq</h3>
        <pre
          className="p-4 rounded-lg overflow-x-auto text-sm font-mono mb-8"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <code>{`# Format a JSON file
jq . data.json > formatted.json

# Format from stdin
cat data.json | jq .

# Format with 4-space indentation
jq --indent 4 . data.json`}</code>
        </pre>

        {/* Common Mistakes */}
        <h2 id="mistakes" className="text-2xl font-bold mb-4">
          Common JSON Formatting Mistakes
        </h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "Trailing commas after the last property",
              desc: "JSON does not allow trailing commas. Remove the comma after the last key-value pair.",
            },
            {
              title: "Mixing single and double quotes",
              desc: "JSON requires double quotes for strings and keys. Single quotes are invalid.",
            },
            {
              title: "Leaving keys unquoted",
              desc: "All object keys must be wrapped in double quotes. Unquoted keys are JavaScript-only.",
            },
            {
              title: "Adding comments",
              desc: "Standard JSON does not support comments. Remove all // and /* */ comments.",
            },
          ].map((m, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-semibold mb-1">{m.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Online Formatting */}
        <h2 id="online" className="text-2xl font-bold mb-4">
          How to Format JSON Online
        </h2>
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          If you do not want to write code or install tools, use our free JSON formatter. It runs entirely in your browser — no data is uploaded.
        </p>
        <div className="space-y-4 mb-10">
          {[
            "Copy your raw JSON from an API response, log file, or database export.",
            "Go to JSON Formatter Online and paste it into the input box.",
            "Click the Format button.",
            "Copy the formatted result or download it as a .json file.",
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
          <AlignLeft className="w-10 h-10 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Format Your JSON Now</h2>
          <p className="mb-6 opacity-90">
            Paste your raw JSON into our free formatter. Get perfectly indented output in one click.
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
