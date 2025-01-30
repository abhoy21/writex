"use client";
import { CreditCard, History, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Logo from "./logo";

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
  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className='h-screen p-4 border-r shadow-sm shadow-malachite-900/45'>
      <div className='flex justify-center border-b border-malachite-900/45'>
        <Logo />
      </div>

      <div className='mt-6'>
        {MenuList.map((menu, index) => (
          <div
            className={`flex items-center gap-4 mb-4 hover:bg-malachite-900/45 text-malachite-500 hover:text-malachite-100 p-2 rounded-lg cursor-pointer transition-colors ease-in duration-300 ${
              path === menu.path && "bg-malachite-900/45 text-malachite-100"
            }`}
            key={index}
          >
            <menu.icon className='h-5 w-5' />
            <h2 className='text-base'>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
