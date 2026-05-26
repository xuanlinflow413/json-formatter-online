import { AlignLeft, CheckCircle, Minimize2 } from "lucide-react";

const features = [
  {
    icon: AlignLeft,
    title: "Format & Beautify",
    description:
      "Paste messy JSON and get perfectly indented, readable output with proper syntax highlighting.",
  },
  {
    icon: CheckCircle,
    title: "Validate Syntax",
    description:
      "Instantly detect syntax errors, missing commas, and invalid structures with clear error messages.",
  },
  {
    icon: Minimize2,
    title: "Minify JSON",
    description:
      "Remove all whitespace and reduce file size for production use or API requests.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <f.icon
                className="w-8 h-8 mb-4"
                style={{ color: "var(--primary)" }}
              />
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
