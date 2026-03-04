"use client";

import { Button } from "@/components/ui/button";
import { User, Settings, Bell, Shield, LogOut, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="flex flex-col pt-12 pb-10">
      <div className="px-6 mb-8 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
            <img src="https://picsum.photos/seed/user1/200/200" alt="Profile" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg border-2 border-white">
            <Settings size={14} />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Jemish Macwan</h2>
        <p className="text-muted-foreground text-sm font-medium">B.Tech Student • India</p>
      </div>

      <div className="px-6 space-y-4">
        <div className="bg-white rounded-3xl p-6 flex justify-around shadow-sm border border-secondary/20">
          <div className="text-center">
            <p className="text-xl font-bold text-primary">2</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Applications</p>
          </div>
          <div className="w-[1px] bg-secondary" />
          <div className="text-center">
            <p className="text-xl font-bold text-primary">12</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Favorited</p>
          </div>
          <div className="w-[1px] bg-secondary" />
          <div className="text-center">
            <p className="text-xl font-bold text-primary">4</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Counseling</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-secondary/20 overflow-hidden">
          {[
            { icon: User, label: "Personal Information", color: "text-blue-500" },
            { icon: Bell, label: "Notifications", color: "text-orange-500" },
            { icon: Shield, label: "Security & Privacy", color: "text-green-500" },
            { icon: GraduationCap, label: "Educational History", color: "text-purple-500" }
          ].map((item, idx) => (
            <button key={idx} className="w-full px-6 py-5 flex items-center justify-between border-b border-secondary/20 last:border-0 hover:bg-secondary/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`${item.color} bg-current/10 p-2 rounded-xl`}>
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-bold">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          ))}
        </div>

        <Link href="/login" className="block">
          <Button variant="ghost" className="w-full h-14 rounded-2xl text-destructive hover:bg-destructive/5 hover:text-destructive font-bold">
            <LogOut size={20} className="mr-2" /> Logout Account
          </Button>
        </Link>
      </div>
    </div>
  );
}