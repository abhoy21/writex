import { cn } from "@/lib/utils";
import Image from "next/image";

export function DashboardPreview() {
  return (
    <section className="-mt-10">
      <div
        className={cn(
          "relative mx-auto max-w-5xl h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden rounded-3xl border bg-white shadow-md"
        )}
      >
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
