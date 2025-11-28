"use client"

import { usePathname, useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardTabs() {
  const pathname = usePathname()
  const router = useRouter()

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname.startsWith("/dashboard")) return "dashboard"
    if (pathname.startsWith("/history")) return "history"
    if (pathname.startsWith("/plans")) return "plans"
    return "dashboard"
  }

  const handleTabChange = (value: string) => {
    switch (value) {
      case "dashboard":
        router.push("/dashboard")
        break
      case "history":
        router.push("/history")
        break
      case "plans":
        router.push("/plans")
        break
    }
  }

  return (
    <Tabs value={getActiveTab()} onValueChange={handleTabChange} className="w-full">
      <TabsList className="flex items-center justify-center mt-2 space-x-4">
        <TabsTrigger value="dashboard" className="font-semibold cursor-pointer">
          Dashboard
        </TabsTrigger>

        <TabsTrigger value="history" className="font-semibold cursor-pointer">
          History
        </TabsTrigger>

        <TabsTrigger value="plans" className="font-semibold cursor-pointer">
          Plans
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
