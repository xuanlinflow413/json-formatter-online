"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this JSON formatter free to use?",
    answer:
      "Yes, completely free. No signup, no payment, no limits.",
  },
  {
    question: "Is my JSON data sent to a server?",
    answer:
      "No. All processing happens entirely in your browser using JavaScript's native JSON.parse and JSON.stringify. Your data never leaves your device.",
  },
  {
    question: "What is the maximum JSON size I can format?",
    answer:
      "There is no hard limit, but very large files (over 10MB) may slow down your browser. For best performance, keep files under a few megabytes.",
  },
  {
    question: "Can I use this on mobile?",
    answer:
      "Yes, the tool is fully responsive and works on desktop, tablet, and mobile browsers.",
  },
  {
    question: "Does this tool support JSON5 or other JSON variants?",
    answer:
      "Currently only standard JSON is supported. JSON5, JSON with comments, and other variants are not supported in this version.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12" style={{ background: "var(--surface)" }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--muted)" }}
                />
              </button>
              {open === i && (
                <div
                  className="px-4 pb-4 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
