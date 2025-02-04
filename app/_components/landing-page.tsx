import CTA from "./cta";
import Footer from "./footer";
import Hero from "./hero-section";
import Navbar from "./navbar";

import Showcase from "./showcase-section";
import Testimonials from "./testimonials";

export default function LandingPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Testimonials />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
