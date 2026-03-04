"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, FileText, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Search", icon: Search, href: "/universities" },
  { label: "Counseling", icon: MessageCircle, href: "/profile/counseling" },
  { label: "Apps", icon: FileText, href: "/applications" },
  { label: "Profile", icon: User, href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 md:hidden">
      <div className="bg-white border-t border-secondary px-4 py-3 flex justify-between items-center rounded-t-3xl shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors min-w-[64px]",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "p-2 rounded-xl transition-all",
                isActive ? "bg-primary/10" : "bg-transparent"
              )}>
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
