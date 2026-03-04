"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Star, 
  GraduationCap, 
  ArrowRight, 
  MessageCircle, 
  SlidersHorizontal,
  CheckCircle2,
  BookOpen,
  X,
  Bell
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const universities = [
  {
    id: "iit-b",
    name: "IIT Bombay",
    location: "Mumbai",
    rating: 4.9,
    stream: "Engineering",
    type: "UG/PG",
    image: "https://picsum.photos/seed/iitb/600/400"
  },
  {
    id: "iim-a",
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    rating: 5.0,
    stream: "Management",
    type: "PG",
    image: "https://picsum.photos/seed/iima/600/400"
  },
  {
    id: "du-srcc",
    name: "SRCC, Delhi University",
    location: "Delhi",
    rating: 4.8,
    stream: "Commerce",
    type: "UG",
    image: "https://picsum.photos/seed/srcc/600/400"
  },
  {
    id: "bits-p",
    name: "BITS Pilani",
    location: "Pilani",
    rating: 4.7,
    stream: "Engineering",
    type: "UG/PG",
    image: "https://picsum.photos/seed/bits/600/400"
  },
  {
    id: "aiims-d",
    name: "AIIMS Delhi",
    location: "Delhi",
    rating: 5.0,
    stream: "Medical",
    type: "UG/PG",
    image: "https://picsum.photos/seed/aiims/600/400"
  }
];

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStream, setSelectedStream] = useState("all");

  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           uni.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "all" || uni.type.includes(selectedType);
      const matchesStream = selectedStream === "all" || uni.stream === selectedStream;
      return matchesSearch && matchesType && matchesStream;
    });
  }, [searchQuery, selectedType, selectedStream]);

  const activeFiltersCount = (selectedType !== "all" ? 1 : 0) + (selectedStream !== "all" ? 1 : 0);

  return (
    <div className="flex flex-col pt-12">
      {/* Header */}
      <div className="px-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Hello, Jemish 👋
          </h2>
          <p className="text-muted-foreground text-sm font-medium italic">Phase 1 Admissions are Live!</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/profile/notifications" className="relative p-2 bg-white rounded-xl shadow-sm border border-secondary md:hidden">
            <Bell size={20} className="text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link href="/profile" className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
            <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>

      {/* Hero Search Section */}
      <div className="px-6 mb-8 space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              placeholder="Search IITs, IIMs, DU..." 
              className="pl-12 h-14 bg-white rounded-2xl border-secondary shadow-sm focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl relative border-primary/20 text-primary">
                <SlidersHorizontal size={20} />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-background">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[400px] rounded-l-[2.5rem] p-0">
              <div className="flex flex-col h-full">
                <SheetHeader className="p-8 pb-4">
                  <SheetTitle className="text-2xl font-bold">Search Filters</SheetTitle>
                </SheetHeader>
                <div className="flex-1 px-8 space-y-8 overflow-y-auto pb-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                      <GraduationCap size={16} /> Level
                    </div>
                    <RadioGroup value={selectedType} onValueChange={setSelectedType} className="grid grid-cols-1 gap-3">
                      {["all", "UG", "PG"].map((t) => (
                        <Label key={t} className={cn(
                          "flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                          selectedType === t ? "border-primary bg-primary/5" : "border-secondary"
                        )}>
                          <span className="font-bold">{t === "all" ? "All Levels" : t === "UG" ? "Undergraduate" : "Postgraduate"}</span>
                          {selectedType === t && <CheckCircle2 size={18} className="text-primary" />}
                          <RadioGroupItem value={t} className="sr-only" />
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                      <BookOpen size={16} /> Stream
                    </div>
                    <RadioGroup value={selectedStream} onValueChange={setSelectedStream} className="grid grid-cols-1 gap-3">
                      {["all", "Engineering", "Management", "Commerce", "Medical"].map((s) => (
                        <Label key={s} className={cn(
                          "flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                          selectedStream === s ? "border-primary bg-primary/5" : "border-secondary"
                        )}>
                          <span className="font-bold">{s === "all" ? "All Streams" : s}</span>
                          {selectedStream === s && <CheckCircle2 size={18} className="text-primary" />}
                          <RadioGroupItem value={s} className="sr-only" />
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <SheetFooter className="p-8 bg-white border-t">
                  <SheetClose asChild>
                    <Button className="w-full bg-primary h-14 rounded-2xl font-bold">Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedType !== "all" && (
              <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1 rounded-lg">
                {selectedType} <X size={14} className="ml-1 cursor-pointer" onClick={() => setSelectedType("all")} />
              </Badge>
            )}
            {selectedStream !== "all" && (
              <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1 rounded-lg">
                {selectedStream} <X size={14} className="ml-1 cursor-pointer" onClick={() => setSelectedStream("all")} />
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Featured NIRF Ranked Section */}
      <div className="mb-10">
        <div className="px-6 flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">Top NIRF Ranked</h3>
            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Premium Institutes 2024</p>
          </div>
          <Link href="/universities" className="text-primary text-sm font-bold hover:underline">Explore All</Link>
        </div>
        
        <div className="flex overflow-x-auto gap-5 px-6 pb-6 no-scrollbar">
          {filteredUniversities.map((uni) => (
            <Link key={uni.id} href={`/universities/${uni.id}`} className="min-w-[280px] bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-black/[0.02] border border-secondary/50 group">
              <div className="relative h-36">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2.5 py-1 rounded-xl flex items-center gap-1 text-[11px] font-bold">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" /> {uni.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-primary/90 text-white text-[9px] font-black uppercase px-2 py-1 rounded-md tracking-widest">
                  {uni.stream}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg truncate mb-1">{uni.name}</h4>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
                  <MapPin size={14} className="text-primary" /> {uni.location}, India
                </div>
                <div className="mt-4 pt-4 border-t border-secondary flex justify-between items-center">
                   <span className="text-[10px] font-black text-primary uppercase">{uni.type} Programs</span>
                   <ArrowRight size={14} className="text-primary opacity-50" />
                </div>
              </div>
            </Link>
          ))}
          {filteredUniversities.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center py-10 opacity-40">
              <Search size={40} className="mb-2" />
              <p className="font-bold text-sm">No matches found</p>
            </div>
          )}
        </div>
      </div>

      {/* Counseling Banner */}
      <div className="px-6 mb-12">
        <Link href="/profile/counseling" className="block bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20 group">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Need Admission Help?</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-[200px]">
              Speak with our expert education advisors today.
            </p>
            <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg h-10 px-6">
              Book Call
            </Button>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform">
            <MessageCircle size={140} />
          </div>
        </Link>
      </div>
    </div>
  );
}
