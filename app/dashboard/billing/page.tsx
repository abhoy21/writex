"use client";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { UpgradeUserContext } from "@/app/(context)/upgrade-user";
import { RazorpayResponse } from "@/types/type";

export default function Billing(): React.JSX.Element {
  const router = useRouter();
  const { upgradeUser } = useContext(UpgradeUserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const enableSubscription = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "/api/v1/subscription/create-subscription",
        {}
      );

      if (response.status === 200) {
        console.log("response.data\n", response.data);
        onPaymentSuccess(response.data.response.id);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Failed to enable subscription. Please try again later."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const onPaymentSuccess = (id: string) => {
    //@ts-expect-error
    if (!window.Razorpay) {
      setError("Razorpay SDK not loaded. Please refresh the page.");
      return;
    }
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      subscription_id: id,
      name: "WriteX",
      amount: (199 * 100).toString(),
      Currency: "INR",
      quantity: 1,
      description:
        "WriteX Professional-Subscription - this subscriptions will be charged on a 3-month interval basis",
      handler: async (response: RazorpayResponse) => {
        await saveToDB({
          subId: id,
          paymentId: response.razorpay_payment_id,
        });
        setLoading(false);
      },
    };

    //@ts-expect-error
    const razorpay = new window.Razorpay(options);
    console.log("razorpay\n", razorpay);
    razorpay.open();
  };

  const saveToDB = async ({
    subId,
    paymentId,
  }: {
    subId: string;
    paymentId: string;
  }) => {
    const data = {
      subscriptionId: subId,
      paymentId: paymentId,
    };
    console.log("data\n", data);
    const response = await axios.post(
      "/api/v1/subscription/save-payment-info",
      data
    );
    if (response.status === 200) {
      setSuccess(true);
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="pricing" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-500/15 text-green-500 border-green-500/50">
            <AlertDescription>
              Subscription activated successfully! You now have access to all
              Pro features.
            </AlertDescription>
          </Alert>
        )}

        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Content Creation Plan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock the power of AI-driven content optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-supernova-500 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-4xl font-bold text-white">₹0</span>
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
            <Button
              className="w-full py-3 px-6 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors"
              disabled
            >
              {!upgradeUser ? "Current Plan" : "Free Plan"}
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-supernova-500 relative transform scale-105 z-10 animate__animated animate__fadeInUp">
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
            <Button
              onClick={enableSubscription}
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg bg-supernova-500 text-[#181818] hover:bg-supernova-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
              {loading
                ? "Processing..."
                : upgradeUser
                ? "Current Plan"
                : "Upgrade Now"}
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-supernova-500 transition-all duration-300 animate__animated animate__fadeInUp">
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
            <Button className="w-full py-3 px-6 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition-colors">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
