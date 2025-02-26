import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero(): React.JSX.Element {
  return (
    <section className="pt-16 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        <div className="flex flex-col items-center justify-center py-20 relative">
          <span className="px-4 py-2 bg-supernova-500/10 text-supernova-400 rounded-full text-sm font-medium inline-block">
            Write Better, Faster
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-montserrat bg-gradient-to-r from-supernova-100 to-supernova-500 text-transparent bg-clip-text leading-tight ">
            Write Better with WriteX
          </h1>

          <p className="text-sm text-center text-gray-400 leading-relaxed mt-6">
            WriteX: AI-powered content creation for everyone. Create
            SEO-optimized blogs, articles, and web content in minutes with our
            free, open-source writing assistant. Streamline your workflow from
            draft to publication—write better, publish faster, and reach more
            readers without the complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link href="/auth/signup">
              <Button className="text-supernova-950 hover:text-supernova-500">
                Get Started Now
                <ArrowUpRight />
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="flex -space-x-4 overflow-hidden mb-2 p-2">
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-supernova-500 relative overflow-hidden">
                <Image
                  src="/avatar1.jpeg"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-supernova-500 relative overflow-hidden">
                <Image
                  src="/avatar2.jpeg"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-supernova-500 relative overflow-hidden">
                <Image
                  src="/avatar3.jpeg"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-supernova-500 relative overflow-hidden">
                <Image
                  src="/avatar4.jpeg"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-neutral-900 ring-2 ring-supernova-500 text-supernova-500 text-xs font-medium">
                50+
              </div>
            </div>
            <div className="px-6 py-3 bg-neutral-800/50 rounded-xl max-w-md">
              <p className="text-center text-supernova-400 text-sm italic">
                &quot;Join over 500 content creators who have boosted their SEO
                rankings by 83% with our AI-powered content generation&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 pb-10">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gradient-to-r from-supernova-400 to-supernova-700 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                id="el-3z33ysrh"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  id="el-b2b0b8ld"
                ></path>
              </svg>
            </div>
            <span className="text-xm">Free Trial</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gradient-to-r from-supernova-400 to-supernova-700 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                id="el-3z33ysrh"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  id="el-b2b0b8ld"
                ></path>
              </svg>
            </div>
            <span className="text-xm">Fast Experience</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gradient-to-r from-supernova-400 to-supernova-700 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                id="el-3z33ysrh"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  id="el-b2b0b8ld"
                ></path>
              </svg>
            </div>
            <span className="text-xm">Better Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
