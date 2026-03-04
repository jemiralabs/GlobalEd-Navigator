"use client";

import * as React from "react";
import { Home, Search, FileText, User, GraduationCap, LogOut, MessageCircle, Heart, Bell } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/home" },
  { label: "Universities", icon: Search, href: "/universities" },
  { label: "My Applications", icon: FileText, href: "/applications" },
  { label: "Counseling", icon: MessageCircle, href: "/profile/counseling" },
];

const profileItems = [
  { label: "Profile Settings", icon: User, href: "/profile" },
  { label: "Favorites", icon: Heart, href: "/profile/favorites" },
  { label: "Notifications", icon: Bell, href: "/profile/notifications" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    router.push("/");
  };

  return (
    <Sidebar className="hidden md:flex border-r border-secondary/50 bg-white">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">GlobalEd</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-2">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={isActive} className={cn(
                  "h-12 rounded-xl transition-all duration-200",
                  isActive ? "bg-primary text-white shadow-md shadow-primary/10 hover:bg-primary/90 hover:text-white" : "hover:bg-primary/5 hover:text-primary"
                )}>
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon size={20} />
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
        
        <SidebarSeparator className="my-6 opacity-50" />
        
        <SidebarMenu>
          <p className="px-4 mb-2 text-[10px] uppercase font-black text-muted-foreground tracking-widest">Account</p>
          {profileItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={isActive} className={cn(
                  "h-12 rounded-xl transition-all duration-200",
                  isActive ? "bg-primary text-white shadow-md shadow-primary/10 hover:bg-primary/90 hover:text-white" : "hover:bg-primary/5 hover:text-primary"
                )}>
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon size={20} />
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleLogout}
              className="h-12 rounded-xl text-destructive hover:bg-destructive/5 hover:text-destructive"
            >
              <LogOut size={20} />
              <span className="font-bold">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}