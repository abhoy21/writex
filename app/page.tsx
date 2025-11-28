import { Navbar } from "@/components/writex-ai/sections/navbar";
import { Hero } from "@/components/writex-ai/sections/hero";
import { DashboardPreview } from "@/components/writex-ai/sections/dashboard-preview";
import FeaturesSection from "@/components/writex-ai/sections/features";
import HowItWorksSection from "@/components/writex-ai/sections/how-it-works";
import PricingSection from "@/components/writex-ai/sections/pricing";
import CTASection from "@/components/writex-ai/sections/cta-section";
import Footer from "@/components/writex-ai/sections/footer";

export default function Page() {
  return (
    <>
      <main className="min-h-dvh">
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-rose-50 via-rose-50/60 to-orange-50" />
          <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
            <Navbar />
            <Hero />
            <DashboardPreview />
          </div>
        </div>

        {/* sections */}
        <FeaturesSection />
        <HowItWorksSection />
        {/* <PricingSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
