import Link from "next/link";

export default function Pricing(): React.JSX.Element {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-supernova-400 mb-4">
            Choose Your Content Creation Plan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock the power of AI-driven content optimization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-supernova-500 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <p className="text-gray-400">Perfect for content beginners</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                5,000 words per month
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic SEO optimization
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                3 content templates
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors">
              Free Trial
            </button>
          </div>
          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl p-8 border-2 border-supernova-500 relative transform scale-105 z-10 animate__animated animate__fadeInUp">
            <div className="absolute top-0 right-0 bg-supernova-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Most Popular
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Professional
              </h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-4xl font-bold text-white">₹199</span>
                <span className="text-gray-400 ml-1">/3-month</span>
              </div>
              <p className="text-gray-400">For content creators & marketers</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                12,000 words per month
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced SEO tools
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Keyword research
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Content performance analytics
              </li>
            </ul>
            <Link href="/auth/signin">
              <button className="w-full py-3 px-6 rounded-lg bg-supernova-500 text-[#181818] hover:bg-supernova-950 transition-colors">
                Upgrade Now
              </button>
            </Link>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-supernova-500 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise
              </h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <p className="text-gray-400">For growing teams & agencies</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited words
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom AI training
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                API access
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-supernova-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dedicated success manager
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
