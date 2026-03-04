
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  const router = useRouter();

  const favorites = [
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

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Favorited Colleges</h2>
      </div>

      <div className="px-6 space-y-6 pb-10">
        {favorites.map((uni) => (
          <Link key={uni.id} href={`/universities/${uni.id}`} className="block bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-secondary/20">
            <div className="relative h-40">
              <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-destructive shadow-sm">
                <Heart size={18} className="fill-current" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{uni.name}</h3>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" /> {uni.rating}
                </div>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-xs mb-4">
                <MapPin size={14} /> {uni.location}
              </div>
              <Button variant="outline" className="w-full rounded-xl border-primary/20 text-primary font-bold">View Course Catalog</Button>
            </div>
          </Link>
        ))}

        {favorites.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
            <Heart size={64} className="mb-4" />
            <p className="font-bold">No favorites yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
