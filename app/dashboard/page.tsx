"use client";
import { Redirect } from "@/redirect";
import { useState } from "react";
import DashboardSearchSection from "../_components/dashboard-search-section";
import DashboardTemplate from "../_components/dashboard-template";

export default function DashboardPage(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
      <Redirect />
      <div className='px-8 py-4'>
        <DashboardSearchSection setSearchTerm={setSearchTerm} />
      </div>
      <DashboardTemplate searchTerm={searchTerm} />
    </div>
  );
}
