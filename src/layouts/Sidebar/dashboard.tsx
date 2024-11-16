import { 
  SidebarProvider, 
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import React from "react";
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from '@/components/Mode/ModeToggle';
import { ClientRouter } from "@/components/ClienteRouter";
import ProductTable from '@/components/products/producTable';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <ClientRouter>
        {({ currentPath, navigate }) => (
          <div className="flex min-h-screen">
            <AppSidebar navigate={navigate} />
            <SidebarInset className="flex-1">
              <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <div className="ml-auto px-3">
                  <ModeToggle />
                </div>
              </header>
              <main className="flex-1">
                <div className="h-[calc(100vh-4rem)] overflow-auto p-4">
                  {currentPath === '/' && <div>{children}</div>}
                  {currentPath === '/products' && (
                    <div className="p-4 bg-background">
                      <ProductTable />
                    </div>
                  )}
                </div>
              </main>
            </SidebarInset>
          </div>
        )}
      </ClientRouter>
    </SidebarProvider>
  );
}