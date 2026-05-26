"use client";

interface JsonOutputProps {
  value: string;
  error: string | null;
}

export default function JsonOutput({ value, error }: JsonOutputProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium" style={{ color: "var(--muted)" }}>
          Output
        </label>
        {value && !error && (
          <span className="text-xs" style={{ color: "var(--success)" }}>
            Valid JSON
          </span>
        )}
      </div>

      {error ? (
        <div
          className="p-4 rounded-lg text-sm"
          style={{
            background: "var(--error-bg)",
            border: "1px solid var(--error)",
            color: "var(--error)",
            minHeight: "320px",
          }}
        >
          <div className="font-semibold mb-1">Invalid JSON</div>
          <div className="font-mono text-xs whitespace-pre-wrap">{error}</div>
        </div>
      ) : (
        <textarea
          value={value}
          readOnly
          className="flex-1 w-full p-4 rounded-lg font-mono text-sm resize-none focus:outline-none"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
            minHeight: "320px",
          }}
        />
      )}
    </div>
  );
}
