"use client";

import { useParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Clock, DollarSign, CheckCircle2, Share2, Heart } from "lucide-react";
import Link from "next/link";

const UNIVERSITY_DATA: any = {
  "1": {
    name: "Stanford University",
    location: "California, USA",
    rating: 4.9,
    banner: "https://picsum.photos/seed/stan1/800/600",
    overview: "Stanford University is a private research university in Stanford, California. It is ranked among the best universities in the world. Its 8,180-acre campus is one of the largest in the United States and is home to more than 17,000 students.",
    courses: [
      { name: "Computer Science", duration: "4 Years", fee: "$55,000/yr", eligibility: "SAT 1500+ / IELTS 7.5" },
      { name: "Electrical Engineering", duration: "4 Years", fee: "$52,000/yr", eligibility: "SAT 1450+ / IELTS 7.0" }
    ],
    admission: ["Personal Statement", "High School Transcripts", "Two Letters of Recommendation", "English Proficiency Scores"]
  },
  "2": {
    name: "Oxford University",
    location: "Oxford, UK",
    rating: 5.0,
    banner: "https://picsum.photos/seed/oxf1/800/600",
    overview: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.",
    courses: [
      { name: "Economics & Management", duration: "3 Years", fee: "£35,000/yr", eligibility: "A*AA / IELTS 7.5" },
      { name: "Law", duration: "3 Years", fee: "£32,000/yr", eligibility: "AAA / IELTS 7.5" }
    ],
    admission: ["Academic Excellence", "Thinking Skills Assessment", "Strong Motivation Statement", "Proof of English Skills"]
  }
};

export default function UniversityDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const uni = UNIVERSITY_DATA[id as string] || UNIVERSITY_DATA["1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-72 w-full">
        <img src={uni.banner} alt={uni.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-12 left-6 right-6 flex justify-between">
          <button onClick={() => router.back()} className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <Heart size={20} />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-1 bg-accent/90 backdrop-blur px-2 py-0.5 rounded-full text-[10px] font-black text-white w-fit mb-2 uppercase">
            Top Choice
          </div>
          <h1 className="text-3xl font-bold mb-1">{uni.name}</h1>
          <div className="flex items-center gap-3 text-sm font-medium">
            <div className="flex items-center gap-1"><MapPin size={14} /> {uni.location}</div>
            <div className="flex items-center gap-1"><Star size={14} className="fill-yellow-400 text-yellow-400 border-none" /> {uni.rating}</div>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="flex-1 px-6 pt-6 -mt-6 bg-white rounded-t-[2.5rem] shadow-2xl z-10">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full bg-secondary/30 rounded-2xl h-12 mb-6">
            <TabsTrigger value="overview" className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">Overview</TabsTrigger>
            <TabsTrigger value="courses" className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">Courses</TabsTrigger>
            <TabsTrigger value="admission" className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">Info</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pb-10 animate-fade-in">
            <h3 className="text-lg font-bold mb-3">About the University</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {uni.overview}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-2xl border border-secondary">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Students</p>
                <p className="text-lg font-bold">17,000+</p>
              </div>
              <div className="bg-background p-4 rounded-2xl border border-secondary">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Acceptance</p>
                <p className="text-lg font-bold">4.8%</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="pb-10 animate-fade-in">
            <div className="space-y-4">
              {uni.courses.map((course: any, idx: number) => (
                <div key={idx} className="bg-white p-5 rounded-3xl border border-secondary shadow-sm">
                  <h4 className="font-bold text-lg mb-4">{course.name}</h4>
                  <div className="grid grid-cols-2 gap-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign size={16} /> {course.fee}
                    </div>
                    <div className="col-span-2 flex items-center gap-2 text-xs font-bold text-primary bg-primary/5 px-3 py-2 rounded-xl border border-primary/10">
                      <CheckCircle2 size={14} /> Eligibility: {course.eligibility}
                    </div>
                  </div>
                  <Link href="/apply">
                    <Button className="w-full rounded-2xl bg-primary">Apply Now</Button>
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admission" className="pb-10 animate-fade-in">
             <h3 className="text-lg font-bold mb-4">Requirement Checklist</h3>
             <ul className="space-y-4">
               {uni.admission.map((item: string, idx: number) => (
                 <li key={idx} className="flex items-center gap-4 text-sm font-medium p-4 bg-background rounded-2xl border border-secondary">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                     <CheckCircle2 size={16} />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}