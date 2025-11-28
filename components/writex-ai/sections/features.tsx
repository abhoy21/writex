import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      title: "Idea to Draft",
      desc: "Turn brief concepts into full, publishable drafts in seconds.",
    },
    {
      title: "SEO Optimization",
      desc: "Built-in keyword and intent optimization for higher search rankings.",
    },
    {
      title: "Conversion Focused",
      desc: "Copy tuned for clicks, sign-ups, and measurable conversions.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
        <p className="mt-2 text-muted-foreground">
          From concept to published page — SEO-ready content, focused on
          conversion and discoverability.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {f.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
