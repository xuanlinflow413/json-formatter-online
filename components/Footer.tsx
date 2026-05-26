import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
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
            className="flex items-center gap-1 hover:underline"
          >
            <span className="mr-1"></span>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
