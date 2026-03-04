"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredUniversities = [
  {
    id: "1",
    name: "Stanford University",
    location: "USA",
    rating: 4.9,
    image: PlaceHolderImages.find(i => i.id === "uni-1")?.imageUrl || ""
  },
  {
    id: "2",
    name: "Oxford University",
    location: "UK",
    rating: 5.0,
    image: PlaceHolderImages.find(i => i.id === "uni-2")?.imageUrl || ""
  }
];

const popularCourses = [
  { id: "c1", name: "Computer Science", duration: "4 Years", fee: "$45,000/yr" },
  { id: "c2", name: "Business Management", duration: "3 Years", fee: "$38,000/yr" },
  { id: "c3", name: "Biotechnology", duration: "4 Years", fee: "$42,000/yr" }
];

export default function HomePage() {
  return (
    <div className="flex flex-col pt-12">
      {/* Header */}
      <div className="px-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Hello, Jemish 👋
          </h2>
          <p className="text-muted-foreground text-sm">Where do you want to study?</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input 
            placeholder="Search universities..." 
            className="pl-12 h-14 bg-white border-none rounded-2xl shadow-sm focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-6 mb-8">
        <Link href="/apply" className="relative block w-full h-40 rounded-3xl overflow-hidden shadow-lg group">
          <img 
            src={PlaceHolderImages.find(i => i.id === "hero-bg")?.imageUrl || ""} 
            alt="Apply Banner"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-6 text-white">
            <h3 className="text-xl font-bold mb-1">Fast Track Application</h3>
            <p className="text-white/80 text-sm mb-3">Apply to top universities in minutes.</p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold w-fit">
              Quick Apply <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Universities */}
      <div className="mb-8">
        <div className="px-6 flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Featured Universities</h3>
          <Link href="/universities" className="text-primary text-sm font-semibold">View All</Link>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 pb-4 no-scrollbar">
          {featuredUniversities.map((uni) => (
            <Link key={uni.id} href={`/universities/${uni.id}`} className="min-w-[260px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-32">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold">
                  <Star size={10} className="fill-yellow-400 text-yellow-400" /> {uni.rating}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-base truncate">{uni.name}</h4>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                  <MapPin size={12} /> {uni.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Courses */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-bold mb-4">Popular Courses</h3>
        <div className="space-y-3">
          {popularCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-secondary/20">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{course.name}</h4>
                <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-tight">{course.duration} • {course.fee}</p>
              </div>
              <Link href="/apply">
                <Button size="sm" variant="ghost" className="text-primary p-0 h-auto font-bold text-xs hover:bg-transparent">
                  Apply <ArrowRight size={14} className="ml-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}