"use client";
import { useState } from "react";
import { UsageContext } from "../(context)/usage";
import DashboardHeader from "../_components/dashboard-header";
import DashboardSidebar from "../_components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [creditUsed, setCreditused] = useState(0);
  return (
    <UsageContext.Provider value={{ creditUsed, setCreditused }}>
      <div className="min-h-screen">
        <div className="hidden md:block md:w-64 fixed">
          <DashboardSidebar />
        </div>
        <div className="md:ml-64">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </UsageContext.Provider>
  );
}
