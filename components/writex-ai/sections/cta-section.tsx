import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-rose-100 via-rose-50 to-orange-100 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Ready to explore?
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Discover what writex‑ai can do for you. Join us and start creating today.
        </p>
        <a
          href="/signup"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
