"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, MapPin, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const universities = [
  {
    id: "1",
    name: "Stanford University",
    location: "California, USA",
    rating: 4.9,
    description: "Ranked #1 for Computer Science and Innovation world-wide.",
    image: "https://picsum.photos/seed/stan1/600/400"
  },
  {
    id: "2",
    name: "Oxford University",
    location: "Oxford, UK",
    rating: 5.0,
    description: "Oldest university in the English-speaking world with rich heritage.",
    image: "https://picsum.photos/seed/oxf1/600/400"
  },
  {
    id: "3",
    name: "MIT",
    location: "Massachusetts, USA",
    rating: 4.8,
    description: "Global leader in technology, engineering, and artificial intelligence.",
    image: "https://picsum.photos/seed/mit1/600/400"
  }
];

export default function UniversityListingPage() {
  return (
    <div className="flex flex-col pt-12 pb-10">
      <div className="px-6 flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Universities</h2>
        <Button variant="outline" size="icon" className="rounded-xl">
          <SlidersHorizontal size={20} />
        </Button>
      </div>

      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input 
            placeholder="Search by country or name..." 
            className="pl-12 h-14 bg-white rounded-2xl shadow-sm"
          />
        </div>
      </div>

      <div className="px-6 space-y-6">
        {universities.map((uni) => (
          <div key={uni.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary/20 flex flex-col">
            <div className="relative h-44">
              <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold shadow-sm">
                <Star size={12} className="fill-yellow-400 text-yellow-400" /> {uni.rating}
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{uni.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <MapPin size={12} /> {uni.location.split(',')[1]}
                </div>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                {uni.description}
              </p>
              <Link href={`/universities/${uni.id}`}>
                <Button className="w-full rounded-xl bg-primary shadow-lg shadow-primary/10">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}