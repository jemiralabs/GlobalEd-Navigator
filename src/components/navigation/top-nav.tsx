"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, MessageCircle, User, GraduationCap, LogOut, Bell, CheckCircle2, Info, AlertCircle } from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Applications", icon: FileText, href: "/applications" },
  { label: "Counseling", icon: MessageCircle, href: "/profile/counseling" },
];

const mockNotifications = [
  {
    id: 1,
    title: "Application Verified",
    desc: "Your 10th marksheet for IIT Bombay has been verified.",
    time: "2h ago",
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    id: 2,
    title: "New Merit List",
    desc: "SRCC has released the first merit list for B.Com (Hons).",
    time: "5h ago",
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 3,
    title: "Document Required",
    desc: "Please re-upload your clear Aadhar card scan for AIIMS.",
    time: "1d ago",
    icon: AlertCircle,
    color: "text-orange-500",
    bg: "bg-orange-50"
  }
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 mt-2 rounded-2xl p-0 overflow-hidden" align="end">
              <div className="p-4 border-b bg-secondary/10 flex justify-between items-center">
                <h4 className="font-bold text-sm">Notifications</h4>
                <Link href="/profile/notifications" className="text-[10px] font-black text-primary uppercase hover:underline">View All</Link>
              </div>
              <ScrollArea className="h-80">
                <div className="flex flex-col">
                  {mockNotifications.map((notif) => (
                    <div key={notif.id} className="p-4 border-b last:border-0 hover:bg-secondary/5 transition-colors cursor-pointer">
                      <div className="flex gap-3">
                        <div className={cn("p-2 rounded-xl h-fit", notif.bg, notif.color)}>
                          <notif.icon size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-0.5">
                            <h5 className="font-bold text-xs">{notif.title}</h5>
                            <span className="text-[9px] text-muted-foreground">{notif.time}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2">{notif.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
          
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
                <Link href="/profile/favorites" className="flex items-center gap-2">
                  <Bell size={16} /> Favorites
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
