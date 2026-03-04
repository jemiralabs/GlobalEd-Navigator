"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, GraduationCap, ArrowRight, MessageCircle, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const featuredUniversities = [
  {
    id: "iit-b",
    name: "IIT Bombay",
    location: "Mumbai",
    rating: 4.9,
    image: "https://picsum.photos/seed/iitb/400/300"
  },
  {
    id: "du-srcc",
    name: "SRCC, Delhi University",
    location: "Delhi",
    rating: 4.8,
    image: "https://picsum.photos/seed/srcc/400/300"
  }
];

const quickActions = [
  { label: "Find College", icon: Search, color: "bg-blue-50 text-blue-600", href: "/universities" },
  { label: "Counseling", icon: MessageCircle, color: "bg-purple-50 text-purple-600", href: "/profile/counseling" },
  { label: "My Apps", icon: FileText, color: "bg-orange-50 text-orange-600", href: "/applications" },
  { label: "AI Tips", icon: Sparkles, color: "bg-green-50 text-green-600", href: "/apply" }
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-12">
      {/* Header */}
      <div className="px-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Hello, Jemish 👋
          </h2>
          <p className="text-muted-foreground text-sm">Welcome to GlobalEd Navigator</p>
        </div>
        <Link href="/profile" className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
          <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" className="w-full h-full object-cover" />
        </Link>
      </div>

      {/* Unified Search Entry */}
      <div className="px-6 mb-8">
        <div 
          onClick={() => router.push('/universities')}
          className="relative cursor-pointer group"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          <div className="w-full h-14 bg-white border border-secondary rounded-2xl shadow-sm flex items-center pl-12 text-muted-foreground text-sm">
            Search 1000+ Indian Colleges...
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/10 text-primary p-1.5 rounded-lg">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-6 mb-10 grid grid-cols-4 gap-4">
        {quickActions.map((action, idx) => (
          <Link key={idx} href={action.href} className="flex flex-col items-center gap-2">
            <div className={`${action.color} p-4 rounded-2xl shadow-sm hover:scale-105 transition-transform`}>
              <action.icon size={24} />
            </div>
            <span className="text-[10px] font-bold text-center leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>

      {/* Hero Banner */}
      <div className="px-6 mb-10">
        <Link href="/apply" className="relative block w-full h-44 rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary/10 group">
          <img 
            src="https://picsum.photos/seed/eduin/800/400" 
            alt="Apply Banner"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent flex flex-col justify-center p-8 text-white">
            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-3">
              Phase 1 Live
            </div>
            <h3 className="text-2xl font-bold mb-1">Centralized Admissions</h3>
            <p className="text-white/80 text-xs mb-4 max-w-[180px]">Apply to multiple Tier-1 colleges with a single verified form.</p>
            <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold w-fit shadow-lg px-6 h-10">
              Apply Now
            </Button>
          </div>
        </Link>
      </div>

      {/* Featured Universities */}
      <div className="mb-10">
        <div className="px-6 flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Top NIRF Ranked</h3>
          <Link href="/universities" className="text-primary text-sm font-bold hover:underline">See All</Link>
        </div>
        <div className="flex overflow-x-auto gap-5 px-6 pb-6 no-scrollbar">
          {featuredUniversities.map((uni) => (
            <Link key={uni.id} href={`/universities/${uni.id}`} className="min-w-[280px] bg-white rounded-[2rem] overflow-hidden shadow-sm border border-secondary/50 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative h-36">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2.5 py-1 rounded-xl flex items-center gap-1 text-[11px] font-bold shadow-sm">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" /> {uni.rating}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg truncate mb-1">{uni.name}</h4>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
                  <MapPin size={14} className="text-primary" /> {uni.location}, India
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Help Banner */}
      <div className="px-6 mb-12">
        <Link href="/help-desk" className="block bg-secondary/30 p-6 rounded-[2rem] border border-secondary/50 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-white p-3 rounded-2xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Admission Help Desk</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">Connect with education experts for fee guidance.</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-primary opacity-50" />
          </div>
        </Link>
      </div>
    </div>
  );
}
