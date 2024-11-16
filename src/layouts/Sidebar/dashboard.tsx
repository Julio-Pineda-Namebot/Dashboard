import { 
  SidebarProvider, 
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import React from "react";
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from '@/components/Mode/ModeToggle';
import { Outlet } from "react-router-dom";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true)
  return (
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="ml-auto px-3">
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <Outlet />
                {children}
              </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
  );
}