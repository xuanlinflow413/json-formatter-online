import Link from "next/link";
import { Shield, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
            <Shield className="w-4 h-4" />
            <span>All processing happens in your browser. Your data is not uploaded.</span>
          </div>
          <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
            <span>&copy; 2025 JSON Formatter Online</span>
            <a
              href="https://github.com/xuanlinflow413/json-formatter-online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
          <BookOpen className="w-4 h-4" />
          <span className="font-medium">Guides:</span>
          <Link href="/how-to-format-json/" className="hover:underline">
            How to Format JSON
          </Link>
          <Link href="/json-validator-guide/" className="hover:underline">
            JSON Validator Guide
          </Link>
          <Link href="/fix-invalid-json/" className="hover:underline">
            Fix Invalid JSON
          </Link>
        </div>
      </div>
    </footer>
  );
}
