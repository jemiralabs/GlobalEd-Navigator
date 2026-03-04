"use client";

import { Button } from "@/components/ui/button";
import { 
  User, 
  Bell, 
  Shield, 
  LogOut, 
  ChevronRight, 
  GraduationCap, 
  Heart, 
  MessageSquare, 
  Camera,
  Linkedin,
  Code
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const profileLinks = [
    { icon: User, label: "Personal Information", color: "text-blue-500", href: "/profile/personal" },
    { icon: Bell, label: "Notifications", color: "text-orange-500", href: "/profile/notifications" },
    { icon: Shield, label: "Security & Privacy", color: "text-green-500", href: "/profile/security" },
    { icon: GraduationCap, label: "Educational History", color: "text-purple-500", href: "/profile/education" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    window.location.href = "/home";
  };

  return (
    <div className="flex flex-col pt-4 md:pt-12 pb-10">
      <div className="px-6 mb-8 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
            <img src="https://picsum.photos/seed/user1/200/200" alt="Profile" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2.5 rounded-xl shadow-lg border-2 border-white cursor-pointer hover:bg-primary/90 transition-colors">
            <Camera size={16} />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Jemira</h2>
        <p className="text-muted-foreground text-sm font-medium">B.Tech Student • India</p>
      </div>

      <div className="px-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 flex justify-around shadow-sm border border-secondary/20">
          <Link href="/applications" className="text-center group">
            <p className="text-xl font-bold text-primary group-active:scale-95 transition-transform">2</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Applications</p>
          </Link>
          <div className="w-[1px] bg-secondary" />
          <Link href="/profile/favorites" className="text-center group">
            <p className="text-xl font-bold text-primary group-active:scale-95 transition-transform">12</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
              <Heart size={8} className="fill-primary text-primary" /> Favorited
            </p>
          </Link>
          <div className="w-[1px] bg-secondary" />
          <Link href="/profile/counseling" className="text-center group">
            <p className="text-xl font-bold text-primary group-active:scale-95 transition-transform">4</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
              <MessageSquare size={8} className="text-primary" /> Counseling
            </p>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-secondary/20 overflow-hidden">
          {profileLinks.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className="w-full px-6 py-5 flex items-center justify-between border-b border-secondary/20 last:border-0 hover:bg-secondary/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`${item.color} bg-current/10 p-2 rounded-xl`}>
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-bold">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-muted-foreground" />
            </Link>
          ))}
        </div>

        <div className="bg-muted/30 rounded-3xl p-6 border border-secondary/40">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground uppercase text-[10px] font-black tracking-widest">
            <Code size={14} /> Development Credits
          </div>
          <div className="space-y-4">
            <Link 
              href="https://www.linkedin.com/in/mudrika-variya/" 
              target="_blank" 
              className="flex items-center justify-between p-3 bg-white rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin size={14} className="text-primary" />
                </div>
                <span className="text-sm font-bold">Mudrika</span>
              </div>
              <ChevronRight size={14} className="text-muted-foreground" />
            </Link>
            
            <Link 
              href="https://www.linkedin.com/in/jemish-dhameliya/" 
              target="_blank" 
              className="flex items-center justify-between p-3 bg-white rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin size={14} className="text-primary" />
                </div>
                <span className="text-sm font-bold">Jemira</span>
              </div>
              <ChevronRight size={14} className="text-muted-foreground" />
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="https://jemira.in" target="_blank" className="text-[10px] font-black text-primary uppercase hover:underline">
              By Jemira Labs
            </Link>
          </div>
        </div>

        <Button 
          onClick={handleLogout}
          variant="ghost" 
          className="w-full h-14 rounded-2xl text-destructive hover:bg-destructive/5 hover:text-destructive font-bold"
        >
          <LogOut size={20} className="mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
}
