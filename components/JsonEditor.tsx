"use client";

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JsonEditor({ value, onChange }: JsonEditorProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium" style={{ color: "var(--muted)" }}>
          Input
        </label>
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          {value.length} chars
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your JSON here..."
        className="flex-1 w-full p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          minHeight: "320px",
        }}
        spellCheck={false}
      />
    </div>
  );
}
