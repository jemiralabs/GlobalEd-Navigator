"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Star, 
  X,
  CheckCircle2,
  BookOpen,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
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
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    rating: 4.9,
    type: "UG/PG",
    stream: "Engineering",
    description: "Premier institute for technology and research in India.",
    image: "https://picsum.photos/seed/iitb/600/400"
  },
  {
    id: "iim-a",
    name: "IIM Ahmedabad",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    rating: 5.0,
    type: "PG",
    stream: "Management",
    description: "The top-ranked business school in India for management studies.",
    image: "https://picsum.photos/seed/iima/600/400"
  },
  {
    id: "du-srcc",
    name: "SRCC, Delhi University",
    location: "New Delhi, Delhi",
    state: "Delhi",
    rating: 4.8,
    type: "UG",
    stream: "Commerce",
    description: "Premier college for commerce and economics in Asia.",
    image: "https://picsum.photos/seed/srcc/600/400"
  },
  {
    id: "bits-p",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    state: "Rajasthan",
    rating: 4.7,
    type: "UG/PG",
    stream: "Engineering",
    description: "A leading private deemed university for science and technology.",
    image: "https://picsum.photos/seed/bits/600/400"
  },
  {
    id: "aiims-d",
    name: "AIIMS Delhi",
    location: "New Delhi, Delhi",
    state: "Delhi",
    rating: 5.0,
    type: "UG/PG",
    stream: "Medical",
    description: "The foremost medical college and hospital in India.",
    image: "https://picsum.photos/seed/aiims/600/400"
  }
];

export default function UniversityListingPage() {
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

  const resetFilters = () => {
    setSelectedType("all");
    setSelectedStream("all");
    setSearchQuery("");
  };

  const activeFiltersCount = (selectedType !== "all" ? 1 : 0) + (selectedStream !== "all" ? 1 : 0);

  return (
    <div className="flex flex-col pt-12 pb-10">
      <div className="px-6 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Indian Universities</h2>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-xl relative border-primary/20 text-primary hover:bg-primary/5">
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
                <SheetTitle className="text-2xl font-bold">Admission Filters</SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 px-8 space-y-8 overflow-y-auto pb-10">
                {/* Course Type Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                    <GraduationCap size={16} /> Course Type
                  </div>
                  <RadioGroup value={selectedType} onValueChange={setSelectedType} className="grid grid-cols-1 gap-3">
                    {["all", "UG", "PG"].map((t) => (
                      <Label key={t} className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                        selectedType === t ? "border-primary bg-primary/5 shadow-sm" : "border-secondary hover:bg-secondary/20"
                      )}>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={t} id={`type-${t}`} className="sr-only" />
                          <span className="font-bold">{t === "all" ? "All Levels" : t === "UG" ? "Undergraduate" : "Postgraduate"}</span>
                        </div>
                        {selectedType === t && <CheckCircle2 size={18} className="text-primary" />}
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Stream Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                    <BookOpen size={16} /> Stream
                  </div>
                  <RadioGroup value={selectedStream} onValueChange={setSelectedStream} className="grid grid-cols-1 gap-3">
                    {["all", "Engineering", "Management", "Commerce", "Medical"].map((s) => (
                      <Label key={s} className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                        selectedStream === s ? "border-primary bg-primary/5 shadow-sm" : "border-secondary hover:bg-secondary/20"
                      )}>
                        <span className="font-bold">{s === "all" ? "All Streams" : s}</span>
                        {selectedStream === s && <CheckCircle2 size={18} className="text-primary" />}
                        <RadioGroupItem value={s} className="sr-only" />
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <SheetFooter className="p-8 bg-white border-t border-secondary rounded-bl-[2.5rem] gap-3">
                <SheetClose asChild>
                  <Button variant="ghost" className="flex-1 font-bold h-14 rounded-2xl" onClick={resetFilters}>Reset</Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="flex-[2] bg-primary h-14 rounded-2xl font-bold shadow-lg shadow-primary/20">Apply Filters</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input 
            placeholder="Search for IITs, DU colleges..." 
            className="pl-12 h-14 bg-white rounded-2xl shadow-sm border-none focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="px-6 mb-4 flex flex-wrap gap-2">
          {selectedType !== "all" && (
            <Badge variant="secondary" className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary border-none flex items-center gap-1">
              {selectedType} <X size={14} className="cursor-pointer" onClick={() => setSelectedType("all")} />
            </Badge>
          )}
          {selectedStream !== "all" && (
            <Badge variant="secondary" className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary border-none flex items-center gap-1">
              {selectedStream} <X size={14} className="cursor-pointer" onClick={() => setSelectedStream("all")} />
            </Badge>
          )}
        </div>
      )}

      <div className="px-6 space-y-6">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni) => (
            <div key={uni.id} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/[0.03] border border-secondary/20 flex flex-col group animate-fade-in">
              <div className="relative h-48">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-black shadow-sm">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" /> {uni.rating}
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-black text-white shadow-sm uppercase tracking-widest">
                  {uni.stream}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold leading-tight">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-primary bg-primary/5 px-2 py-1 rounded-lg text-[10px] font-bold">
                    <MapPin size={10} /> {uni.location}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">
                  {uni.description}
                </p>
                <Link href={`/universities/${uni.id}`}>
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold">
                    Check Eligibility
                  </Button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="bg-secondary/30 p-6 rounded-full">
              <Search className="w-12 h-12 text-muted-foreground/40" />
            </div>
            <div>
              <h3 className="text-lg font-bold">No Colleges Found</h3>
              <p className="text-sm text-muted-foreground">Try searching for Engineering or Medical colleges.</p>
            </div>
            <Button variant="ghost" className="text-primary font-bold" onClick={resetFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
