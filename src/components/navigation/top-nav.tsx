"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, FileText, MessageCircle, User, GraduationCap, LogOut, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/home" },
  { label: "Universities", icon: Search, href: "/universities" },
  { label: "Applications", icon: FileText, href: "/applications" },
  { label: "Counseling", icon: MessageCircle, href: "/profile/counseling" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/home" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">GlobalEd</span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-white shadow-sm">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://picsum.photos/seed/user1/100/100" alt="User" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 rounded-2xl p-2" align="end" forceMount>
              <DropdownMenuLabel className="font-normal p-4">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-bold leading-none">Jemish Macwan</p>
                  <p className="text-xs leading-none text-muted-foreground">jemish@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-2.5">
                <Link href="/profile" className="flex items-center gap-2">
                  <User size={16} /> Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-2.5">
                <Link href="/profile/notifications" className="flex items-center gap-2">
                  <Bell size={16} /> Notifications
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-2.5 text-destructive focus:text-destructive">
                <Link href="/login" className="flex items-center gap-2">
                  <LogOut size={16} /> Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
