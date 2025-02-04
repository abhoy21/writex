"use client";
import { CreditCard, History, Home, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";
import UsageLimit from "./usage-limit";
import { Button } from "@/components/ui/button";

const MenuList = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "History",
    path: "/dashboard/history",
    icon: History,
  },
  {
    name: "Billing",
    path: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "Sign Out",
    path: "/",
    icon: LogOut,
  },
];

export default function DashboardSidebar(): React.JSX.Element {
  const path = usePathname();
  const router = useRouter();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <div className="h-screen relative p-4 shadow-sm shadow-supernova-900/45">
      <div className="flex justify-center ">
        <Logo />
      </div>

      <div className="mt-6">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              role="button"
              className={`flex items-center gap-4 mb-4 hover:bg-supernova-900/45 text-supernova-500 hover:text-supernova-100 p-2 rounded-lg cursor-pointer transition-colors ease-in duration-300 ${
                path === menu.path && "bg-supernova-900/45 text-supernova-100"
              }`}
              onClick={menu.name === "Sign Out" ? handleSignOut : () => {}}
            >
              <menu.icon
                className={`h-5 w-5 ${
                  menu.icon === LogOut ? "text-red-500" : ""
                }`}
              />
              <h2
                className={`text-base ${
                  menu.name === "Sign Out" ? "text-red-500" : ""
                }`}
              >
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center p-4">
        <UsageLimit />
      </div>
    </div>
  );
}
