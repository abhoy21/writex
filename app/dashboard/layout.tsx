"use client";
import { useState } from "react";
import { UsageContext } from "../(context)/usage";
import DashboardHeader from "../_components/dashboard-header";
import DashboardSidebar from "../_components/dashboard-sidebar";
import { UpgradeUserContext } from "../(context)/upgrade-user";
import {
  UpdateCreditUsageContext,
  UpdateCreditUsageContextType,
} from "../(context)/update-credit-usage";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [creditUsed, setCreditused] = useState(0);
  const [upgradeUser, setUpgradeUser] = useState(false);
  const [updateCreditUsage, setUpdateCreditUsage] =
    useState<UpdateCreditUsageContextType>();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <UsageContext.Provider value={{ creditUsed, setCreditused }}>
      <UpgradeUserContext.Provider value={{ upgradeUser, setUpgradeUser }}>
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="min-h-screen relative">
            <Button
              onClick={toggleSidebar}
              className="fixed top-4 left-4 z-50 md:hidden"
              variant="ghost"
              size="icon"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            <div
              className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-background
                ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
            >
              <DashboardSidebar />
            </div>

            {isOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
                onClick={toggleSidebar}
                aria-hidden="true"
              />
            )}

            <div className={`transition-all duration-300 md:ml-64`}>
              <DashboardHeader />
              <main className="p-4">{children}</main>
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UpgradeUserContext.Provider>
    </UsageContext.Provider>
  );
}
