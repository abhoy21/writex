import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA(): React.JSX.Element {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-900 rounded-2xl p-8 md:p-12 border border-neutral-700 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Writing{" "}
              <span className="bg-gradient-to-r from-supernova-200 to-supernova-500 text-transparent bg-clip-text">
                Amazing Content
              </span>{" "}
              Today
            </h2>
            <p className="text-xl text-gray-400 mb-8 md:mb-0">
              Join thousands of users who tsupernova WriteX for their Content
              Writing needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/auth/signin">
              <Button className="bg-gradient-to-br from-supernova-500 to-supernova-200 text-supernova-900 font-semibold">
                Start For Free
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-supernova-500 hover:text-supernova-950 font-semibold"
            >
              Have a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
