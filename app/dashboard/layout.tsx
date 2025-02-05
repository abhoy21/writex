"use client";
import { useState } from "react";
import { UsageContext } from "../(context)/usage";
import DashboardHeader from "../_components/dashboard-header";
import DashboardSidebar from "../_components/dashboard-sidebar";
import { UpgradeUserContext } from "../(context)/upgrade-user";
import { UpdateCreditUsageContext } from "../(context)/update-credit-usage";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [creditUsed, setCreditused] = useState(0);
  const [upgradeUser, setUpgradeUser] = useState(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  return (
    <UsageContext.Provider value={{ creditUsed, setCreditused }}>
      <UpgradeUserContext.Provider value={{ upgradeUser, setUpgradeUser }}>
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="min-h-screen">
            <div className="hidden md:block md:w-64 fixed">
              <DashboardSidebar />
            </div>
            <div className="md:ml-64">
              <DashboardHeader />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UpgradeUserContext.Provider>
    </UsageContext.Provider>
  );
}
