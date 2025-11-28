import { Badge } from "@/components/ui/badge";

export default function HowItWorksSection() {
  const steps = [
    {
      n: 1,
      title: "Share your vision",
      desc: "Provide topics, goals, or a short brief to get started.",
    },
    {
      n: 2,
      title: "Generate SEO-optimized drafts",
      desc: "AI crafts keyword-aware copy tailored for search intent.",
    },
    {
      n: 3,
      title: "Refine & publish",
      desc: "Iterate with suggestions and export for your CMS or landing page.",
    },
  ];
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">How it Works</h2>
        <p className="mt-2 text-muted-foreground">
          Three simple steps to SEO-ready, conversion-first content.
        </p>
      </div>
      <ol className="mx-auto mt-8 grid max-w-3xl gap-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex items-start gap-3 rounded-2xl border p-4"
          >
            <Badge className="rounded-full">{s.n}</Badge>
            <div>
              <div className="font-medium">{s.title}</div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
