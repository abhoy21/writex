"use client";
import React, { useContext, useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { UsageContext } from "../(context)/usage";
import Link from "next/link";
import { UpgradeUserContext } from "../(context)/upgrade-user";
import { UpdateCreditUsageContext } from "../(context)/update-credit-usage";

interface Content {
  response: string | null;
}

export default function UsageLimit(): React.JSX.Element {
  const { creditUsed, setCreditused } = useContext(UsageContext);
  const { upgradeUser, setUpgradeUser } = useContext(UpgradeUserContext);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [isLoading, setIsLoading] = useState(true);

  const TOTAL_LIMIT = upgradeUser ? 12000 : 5000;

  useEffect(() => {
    const getStatus = async () => {
      try {
        const response = await axios.get("/api/v1/subscription/get-pro-user");

        if (response.status === 200) {
          setUpgradeUser(response.data.status);
        }
      } catch (error) {
        console.error("Error fetching pro status:", error);
      }
    };

    const fetchUsageData = async () => {
      try {
        const response = await axios.get("/api/v1/content/get-contents");
        if (response.status === 200) {
          const data = response.data.contents;
          const totalLength = data
            ? data.reduce((acc: number, content: Content) => {
                const responseLength = content.response
                  ? content.response.split(" ").length
                  : 0;
                return acc + responseLength;
              }, 0)
            : 0;

          const boundedCredit = Math.min(totalLength, TOTAL_LIMIT);
          setCreditused(boundedCredit);
        }
      } catch (error) {
        console.error("Error fetching usage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const initializeData = async () => {
      setIsLoading(true);
      await getStatus();
      await fetchUsageData();
    };

    initializeData();
  }, [
    upgradeUser,
    TOTAL_LIMIT,
    setCreditused,
    setUpgradeUser,
    updateCreditUsage,
  ]);

  const usedPercentage = Math.min(
    Math.round((creditUsed / TOTAL_LIMIT) * 100),
    100
  );
  const remainingPercentage = Math.max(100 - usedPercentage, 0);

  if (isLoading) {
    return (
      <div className="p-2 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
        Loading usage data...
      </div>
    );
  }

  return (
    <div className="p-2 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-sm shadow-supernova-900/45">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-400">Usage Limit</h2>
          <span className="text-sm font-medium text-gray-400">
            {usedPercentage}% Used ({creditUsed}/{TOTAL_LIMIT} words)
          </span>
        </div>

        <div className="relative">
          <div className="h-3 w-full bg-gradient-to-l from-supernova-50 to-supernova-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-supernova-700 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${usedPercentage}%` }}
            />
          </div>
        </div>

        <Alert className="bg-gradient-to-br from-supernova-50 to-supernova-300 border border-supernova-200">
          <div className="flex gap-3">
            <ArrowUpCircle className="h-5 w-5 md:h-8 md:w-8 text-supernova-700" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-900">
                You&apos;ve {remainingPercentage}% of your plan limit remaining
              </p>
              <p className="text-sm text-supernova-700">
                Upgrade your plan to continue using WriteX with full features!
              </p>
            </div>
          </div>
        </Alert>
      </div>

      <Link href="/dashboard/billing">
        <Button
          className="w-full text-supernova-950 font-montserrat hover:text-supernova-500 hover:bg-neutral-900 mt-2"
          size="sm"
        >
          Upgrade Plan
        </Button>
      </Link>
    </div>
  );
}
