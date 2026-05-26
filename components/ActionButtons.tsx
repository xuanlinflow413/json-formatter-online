"use client";

import {
  AlignLeft,
  Minimize2,
  CheckCircle,
  Copy,
  Trash2,
  Download,
  FileJson,
} from "lucide-react";

interface ActionButtonsProps {
  onFormat: () => void;
  onMinify: () => void;
  onValidate: () => void;
  onCopy: () => void;
  onClear: () => void;
  onDownload: () => void;
  onSample: () => void;
  hasInput: boolean;
  hasOutput: boolean;
}

export default function ActionButtons({
  onFormat,
  onMinify,
  onValidate,
  onCopy,
  onClear,
  onDownload,
  onSample,
  hasInput,
  hasOutput,
}: ActionButtonsProps) {
  const btnBase =
    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={onFormat}
        disabled={!hasInput}
        className={btnBase}
        style={{
          background: "var(--primary)",
          color: "#fff",
          opacity: hasInput ? 1 : 0.5,
        }}
      >
        <AlignLeft className="w-4 h-4" />
        Format
      </button>

      <button
        onClick={onMinify}
        disabled={!hasInput}
        className={btnBase}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          opacity: hasInput ? 1 : 0.5,
        }}
      >
        <Minimize2 className="w-4 h-4" />
        Minify
      </button>

      <button
        onClick={onValidate}
        disabled={!hasInput}
        className={btnBase}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          opacity: hasInput ? 1 : 0.5,
        }}
      >
        <CheckCircle className="w-4 h-4" />
        Validate
      </button>

      <div className="w-px h-8 mx-1" style={{ background: "var(--border)" }} />

      <button
        onClick={onCopy}
        disabled={!hasOutput}
        className={btnBase}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          opacity: hasOutput ? 1 : 0.5,
        }}
      >
        <Copy className="w-4 h-4" />
        Copy
      </button>

      <button
        onClick={onDownload}
        disabled={!hasOutput}
        className={btnBase}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          opacity: hasOutput ? 1 : 0.5,
        }}
      >
        <Download className="w-4 h-4" />
        Download
      </button>

      <button
        onClick={onClear}
        disabled={!hasInput}
        className={btnBase}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--error)",
          opacity: hasInput ? 1 : 0.5,
        }}
      >
        <Trash2 className="w-4 h-4" />
        Clear
      </button>

      <button
        onClick={onSample}
        className={btnBase}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
        }}
      >
        <FileJson className="w-4 h-4" />
        Sample
      </button>
    </div>
  );
}
