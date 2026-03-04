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
  Globe,
  DollarSign
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

const universities = [
  {
    id: "1",
    name: "Stanford University",
    location: "California, USA",
    country: "USA",
    rating: 4.9,
    fee: 55000,
    description: "Ranked #1 for Computer Science and Innovation world-wide.",
    image: "https://picsum.photos/seed/stan1/600/400"
  },
  {
    id: "2",
    name: "Oxford University",
    location: "Oxford, UK",
    country: "UK",
    rating: 5.0,
    fee: 42000,
    description: "Oldest university in the English-speaking world with rich heritage.",
    image: "https://picsum.photos/seed/oxf1/600/400"
  },
  {
    id: "3",
    name: "MIT",
    location: "Massachusetts, USA",
    country: "USA",
    rating: 4.8,
    fee: 52000,
    description: "Global leader in technology, engineering, and artificial intelligence.",
    image: "https://picsum.photos/seed/mit1/600/400"
  },
  {
    id: "4",
    name: "University of Toronto",
    location: "Toronto, Canada",
    country: "Canada",
    rating: 4.7,
    fee: 35000,
    description: "Canada's leading institution of learning, discovery and knowledge creation.",
    image: "https://picsum.photos/seed/tor1/600/400"
  },
  {
    id: "5",
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    country: "Switzerland",
    rating: 4.9,
    fee: 15000,
    description: "A world-class university for technology and natural sciences.",
    image: "https://picsum.photos/seed/eth1/600/400"
  }
];

export default function UniversityListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedFeeRange, setSelectedFeeRange] = useState("all");

  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           uni.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCountry = selectedCountry === "all" || uni.country === selectedCountry;
      
      let matchesFee = true;
      if (selectedFeeRange === "low") matchesFee = uni.fee < 20000;
      if (selectedFeeRange === "mid") matchesFee = uni.fee >= 20000 && uni.fee <= 45000;
      if (selectedFeeRange === "high") matchesFee = uni.fee > 45000;

      return matchesSearch && matchesCountry && matchesFee;
    });
  }, [searchQuery, selectedCountry, selectedFeeRange]);

  const resetFilters = () => {
    setSelectedCountry("all");
    setSelectedFeeRange("all");
    setSearchQuery("");
  };

  const activeFiltersCount = (selectedCountry !== "all" ? 1 : 0) + (selectedFeeRange !== "all" ? 1 : 0);

  return (
    <div className="flex flex-col pt-12 pb-10">
      <div className="px-6 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Universities</h2>
        
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
                <SheetTitle className="text-2xl font-bold">Filter Options</SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 px-8 space-y-8 overflow-y-auto pb-10">
                {/* Country Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                    <Globe size={16} /> Country
                  </div>
                  <RadioGroup value={selectedCountry} onValueChange={setSelectedCountry} className="grid grid-cols-1 gap-3">
                    {["all", "USA", "UK", "Canada", "Switzerland"].map((c) => (
                      <Label key={c} className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                        selectedCountry === c ? "border-primary bg-primary/5 shadow-sm" : "border-secondary hover:bg-secondary/20"
                      )}>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={c} id={`country-${c}`} className="sr-only" />
                          <span className="font-bold capitalize">{c === "all" ? "All Countries" : c}</span>
                        </div>
                        {selectedCountry === c && <CheckCircle2 size={18} className="text-primary" />}
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Fee Range Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                    <DollarSign size={16} /> Fee Range (USD)
                  </div>
                  <RadioGroup value={selectedFeeRange} onValueChange={setSelectedFeeRange} className="grid grid-cols-1 gap-3">
                    {[
                      { label: "Any Range", value: "all" },
                      { label: "Under $20k", value: "low" },
                      { label: "$20k - $45k", value: "mid" },
                      { label: "Above $45k", value: "high" }
                    ].map((f) => (
                      <Label key={f.value} className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                        selectedFeeRange === f.value ? "border-primary bg-primary/5 shadow-sm" : "border-secondary hover:bg-secondary/20"
                      )}>
                        <span className="font-bold">{f.label}</span>
                        {selectedFeeRange === f.value && <CheckCircle2 size={18} className="text-primary" />}
                        <RadioGroupItem value={f.value} className="sr-only" />
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
            placeholder="Search by country or name..." 
            className="pl-12 h-14 bg-white rounded-2xl shadow-sm border-none focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground bg-secondary/50 p-1 rounded-full"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="px-6 mb-4 flex flex-wrap gap-2">
          {selectedCountry !== "all" && (
            <Badge variant="secondary" className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary border-none flex items-center gap-1">
              {selectedCountry} <X size={14} className="cursor-pointer" onClick={() => setSelectedCountry("all")} />
            </Badge>
          )}
          {selectedFeeRange !== "all" && (
            <Badge variant="secondary" className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary border-none flex items-center gap-1">
              {selectedFeeRange === "low" ? "Under $20k" : selectedFeeRange === "mid" ? "$20k-$45k" : "Above $45k"} 
              <X size={14} className="cursor-pointer" onClick={() => setSelectedFeeRange("all")} />
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
                  ${uni.fee.toLocaleString()}/yr
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold leading-tight">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-primary bg-primary/5 px-2 py-1 rounded-lg text-[10px] font-bold">
                    <MapPin size={10} /> {uni.country}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">
                  {uni.description}
                </p>
                <Link href={`/universities/${uni.id}`}>
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold">
                    View Details
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
              <h3 className="text-lg font-bold">No Universities Found</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your filters or search query.</p>
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

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
