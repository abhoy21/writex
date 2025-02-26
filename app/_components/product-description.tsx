import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductDescription(): React.JSX.Element {
  return (
    <section className=" text-gray-100 py-16 mt-12 md:mb-24">
      <div className="max-w-[100rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 text-center text-supernova-400">
          Supercharge Your SEO With AI
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300">
          Elevate your online presence with our cutting-edge AI solution that
          helps you create SEO-rich content that ranks.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-video rounded-lg shadow-2xl overflow-hidden border border-supernova-500/45">
              <Image
                src="/product-desc.png"
                alt="AI-powered SEO content creation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain hover:scale-105 transition-all duration-300 mx-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Details About the Website
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-500 bg-opacity-20 rounded-full mt-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Smart Content Generation
                  </span>
                  — Our AI analyzes top-performing content in your niche to
                  create optimized articles.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-500 bg-opacity-20 rounded-full mt-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Keyword Optimization
                  </span>
                  — Automatically integrate high-performing keywords that drive
                  organic traffic.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-500 bg-opacity-20 rounded-full mt-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">SEO Analysis</span>{" "}
                  — Get real-time feedback and suggestions to improve your
                  content's search engine ranking.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={"/auth/login"}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Creating SEO Content
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
