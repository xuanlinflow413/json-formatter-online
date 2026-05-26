"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import JsonEditor from "@/components/JsonEditor";
import JsonOutput from "@/components/JsonOutput";
import ActionButtons from "@/components/ActionButtons";
import FeatureCards from "@/components/FeatureCards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { formatJson, minifyJson, validateJson, SAMPLE_JSON } from "@/lib/jsonUtils";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = useCallback(() => {
    try {
      const result = formatJson(input);
      setOutput(result);
      setError(null);
    } catch (e: unknown) {
      const err = e as Error;
      setOutput("");
      setError(err.message);
    }
  }, [input]);

  const handleMinify = useCallback(() => {
    try {
      const result = minifyJson(input);
      setOutput(result);
      setError(null);
    } catch (e: unknown) {
      const err = e as Error;
      setOutput("");
      setError(err.message);
    }
  }, [input]);

  const handleValidate = useCallback(() => {
    const result = validateJson(input);
    if (result.valid) {
      setOutput(input);
      setError(null);
    } else {
      setOutput("");
      setError(result.error || "Invalid JSON");
    }
  }, [input]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }, [output]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setError(null);
  }, []);

  const handleDownload = useCallback(() => {
    if (!output) return;
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [output]);

  const handleSample = useCallback(() => {
    setInput(SAMPLE_JSON);
    setOutput("");
    setError(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-10 pb-6 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              JSON Formatter Online
            </h1>
            <p className="text-base" style={{ color: "var(--muted)" }}>
              Free online JSON formatter, validator, and minifier.
              Format, validate, and compress JSON instantly in your browser.
            </p>
          </div>
        </section>

        {/* Tool */}
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <ActionButtons
              onFormat={handleFormat}
              onMinify={handleMinify}
              onValidate={handleValidate}
              onCopy={handleCopy}
              onClear={handleClear}
              onDownload={handleDownload}
              onSample={handleSample}
              hasInput={input.length > 0}
              hasOutput={output.length > 0 && !error}
            />

            <div className="grid md:grid-cols-2 gap-4 mt-4" style={{ minHeight: "360px" }}>
              <JsonEditor value={input} onChange={setInput} />
              <JsonOutput value={output} error={error} />
            </div>
          </div>
        </section>

        <FeatureCards />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
