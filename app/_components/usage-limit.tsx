"use client";
import React, { useContext, useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { UsageContext } from "../(context)/usage";

export default function UsageLimit(): React.JSX.Element {
  const { creditUsed, setCreditused } = useContext(UsageContext);
  const token = localStorage.getItem("token");
  const TOTAL_LIMIT = 7000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content/get-contents`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;
          const totalLength = data.reduce((acc: any, content: any) => {
            const responseLength = content.response
              ? content.response.split(" ").length
              : 0;
            return acc + responseLength;
          }, 0);

          const boundedCredit = Math.min(totalLength, TOTAL_LIMIT);
          setCreditused(boundedCredit);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  const usedPercentage = Math.min(
    Math.round((creditUsed / TOTAL_LIMIT) * 100),
    100
  );
  const remainingPercentage = Math.max(100 - usedPercentage, 0);

  return (
    <div className="p-2 rounded-xl bg-gradient-to-br from-supernova-100 to-supernova-500 border border-supernova-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">Usage Limit</h2>
          <span className="text-sm font-medium text-supernova-800">
            {usedPercentage}% Used
          </span>
        </div>

        <div className="relative">
          <div className="h-3 w-full bg-gradient-to-l from-supernova-50 to-supernova-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-supernova-700 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${remainingPercentage}%` }}
            />
          </div>
        </div>

        <Alert className="bg-gradient-to-br from-supernova-50 to-supernova-300 border border-supernova-200">
          <div className="flex gap-3">
            <ArrowUpCircle className="h-5 w-5 md:h-8 md:w-8 text-supernova-700" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-900">
                You've {remainingPercentage}% of your plan limit remaining
              </p>
              <p className="text-sm text-supernova-700">
                Upgrade your plan to continue using WriteX with full features!
              </p>
            </div>
          </div>
        </Alert>
      </div>

      <Button
        className="w-full text-supernova-950 font-montserrat hover:text-supernova-500 hover:bg-neutral-900"
        size="sm"
      >
        Upgrade Plan
      </Button>
    </div>
  );
}
