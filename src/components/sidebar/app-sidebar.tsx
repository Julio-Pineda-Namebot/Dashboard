import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings, Command } from 'lucide-react';
import { NavUser } from "./nav.user"

const items = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Productos", url: "/products", icon: Inbox },
  { title: "Calendario", url: "/calendar", icon: Calendar },
  { title: "Buscar", url: "/search", icon: Search },
  { title: "Ajustes", url: "/settings", icon: Settings },
];

const data = {
    user: {
      name: "Saul Andia",
      email: "saulandia@example.com",
      avatar: "https://scontent.fpio4-1.fna.fbcdn.net/v/t39.30808-6/277353583_1272868456454366_2710129009557954098_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG6UP40sO9FUBXpFNfd5lIwgivj6ZJEKsCCK-PpkkQqwATU2peHFv0q2t0riDicjz1d1k7GWkweNQVF5Nf1zJiO&_nc_ohc=zXGBJCFu4OUQ7kNvgEMJLAL&_nc_zt=23&_nc_ht=scontent.fpio4-1.fna&_nc_gid=AftW-gpquxVXH6kHjDYP4Nm&oh=00_AYALN42vMK1zf4wWCz6w2Hk4ywWR9yMktxEcJ-3pHgchCw&oe=673C9808",
    },
}

export function AppSidebar({ navigate }: { navigate: (to: string) => void }) {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" onClick={() => navigate('/')}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Command className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">FULL GAMES</span>
                <span className="truncate text-xs">Empresa</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Entorno</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => navigate(item.url)}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}