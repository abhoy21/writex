"use client";
import { CreditCard, History, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";

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
];

export default function DashboardSidebar(): React.JSX.Element {
  const path = usePathname();
  return (
    <div className='h-screen p-4 shadow-sm shadow-supernova-900/45'>
      <div className='flex justify-center '>
        <Logo />
      </div>

      <div className='mt-6'>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
          <div
            className={`flex items-center gap-4 mb-4 hover:bg-supernova-900/45 text-supernova-500 hover:text-supernova-100 p-2 rounded-lg cursor-pointer transition-colors ease-in duration-300 ${
              path === menu.path && "bg-supernova-900/45 text-supernova-100"
            }`}
            
          >
            <menu.icon className='h-5 w-5' />
            <h2 className='text-base'>{menu.name}</h2>
          </div></Link>
        ))}
      </div>
    </div>
  );
}
