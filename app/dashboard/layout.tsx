import { auth } from "@/lib/auth/auth";
import { AppSidebar } from "@/components/writex-ai/dashboard/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <SidebarInset>
        <header className="flex items-center justify-between border-b px-4">
          <div className="flex h-16 shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <div className="w-px h-4 bg-border mx-2" />
            <DashboardTabs />
          </div>
          <Link
            href="https://www.abhoy.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap mt-2 text-gray-400 text-sm border border-gray-200 px-2 py-1 rounded-lg shadow-xs hover:bg-gray-50 transition"
          >
            Know more about the developer{" "}
            <span className="underline">Abhoy Sarkar</span>
          </Link>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
