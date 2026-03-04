"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Home, 
  FileText, 
  MessageCircle, 
  User, 
  GraduationCap, 
  LogOut, 
  Bell, 
  CheckCircle2, 
  Info, 
  AlertCircle,
  LogIn
} from "lucide-react";
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
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Applications", icon: FileText, href: "/applications" },
  { label: "Counseling", icon: MessageCircle, href: "/profile/counseling" },
];

const mockNotifications = [
  {
    id: 1,
    title: "Aadhar Verified",
    desc: "Your Aadhar card verification for IIT Bombay application is successful.",
    time: "45m ago",
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    id: 2,
    title: "New Merit List",
    desc: "SRCC has released the first merit list for B.Com (Hons) 2024.",
    time: "3h ago",
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 3,
    title: "Fee Payment Alert",
    desc: "Last date for counseling fee payment for NIT Trichy is tomorrow.",
    time: "1d ago",
    icon: AlertCircle,
    color: "text-orange-500",
    bg: "bg-orange-50"
  }
];

export function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    router.push("/home");
  };

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
              if (!isLoggedIn && (item.href === "/applications" || item.href === "/profile/counseling")) return null;
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
          {isLoggedIn ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground relative hover:bg-secondary">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 mt-2 rounded-2xl p-0 overflow-hidden shadow-2xl border-secondary" align="end">
                  <div className="p-4 border-b bg-secondary/10 flex justify-between items-center">
                    <h4 className="font-bold text-sm">Admissions Alerts</h4>
                    <Link href="/profile/notifications" className="text-[10px] font-black text-primary uppercase hover:underline">View All</Link>
                  </div>
                  <ScrollArea className="h-60">
                    <div className="flex flex-col">
                      {mockNotifications.map((notif) => (
                        <div key={notif.id} className="p-4 border-b last:border-0 hover:bg-secondary/5 transition-colors cursor-pointer">
                          <div className="flex gap-3">
                            <div className={cn("p-2 rounded-xl h-fit shrink-0", notif.bg, notif.color)}>
                              <notif.icon size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-0.5">
                                <h5 className="font-bold text-[11px] truncate pr-2">{notif.title}</h5>
                                <span className="text-[9px] text-muted-foreground whitespace-nowrap">{notif.time}</span>
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
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-white shadow-sm hover:scale-105 transition-transform">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://picsum.photos/seed/user1/100/100" alt="User" />
                      <AvatarFallback>J</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 rounded-2xl p-2 shadow-2xl border-secondary" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-4">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">Jemira</p>
                      <p className="text-xs leading-none text-muted-foreground">jemira@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-2.5">
                    <Link href="/profile" className="flex items-center gap-2">
                      <User size={16} /> Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="rounded-xl cursor-pointer py-2.5 text-destructive focus:text-destructive focus:bg-destructive/5">
                    <div className="flex items-center gap-2">
                      <LogOut size={16} /> Logout
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-xl font-bold bg-primary px-6 h-10">
                <LogIn size={18} className="mr-2" /> Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
