import { auth } from "@/lib/auth/auth";
import { AppSidebar } from "@/components/writex-ai/dashboard/app-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";

export default async function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const session = await auth();
  return (
    <SidebarProvider>
      <AppSidebar session={session}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="w-px h-4 bg-border mx-2" />
          <DashboardTabs />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}