import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, CheckCircle2, Share2, Heart } from "lucide-react";
import Link from "next/link";

const UNIVERSITY_DATA: any = {
  "iit-b": {
    name: "IIT Bombay",
    location: "Mumbai, India",
    rating: 4.9,
    banner: "https://picsum.photos/seed/iitb/800/600",
    overview: "IIT Bombay is recognized worldwide as a leader in the field of engineering education and research. It is known for the outstanding calibre of students graduating from its undergraduate and postgraduate programmes.",
    courses: [
      { name: "Computer Science & Engineering", duration: "4 Years", fee: "₹2.2L/yr", eligibility: "JEE Advanced Rank < 100" },
      { name: "Electrical Engineering", duration: "4 Years", fee: "₹2.2L/yr", eligibility: "JEE Advanced Rank < 500" }
    ],
    admission: ["JEE Advanced Scorecard", "Class 10th & 12th Marksheets", "Category Certificate (if any)", "Aadhar Card"]
  },
  "iim-a": {
    name: "IIM Ahmedabad",
    location: "Ahmedabad, India",
    rating: 5.0,
    banner: "https://picsum.photos/seed/iima/800/600",
    overview: "IIM Ahmedabad is the premier management institute in India. It has been consistently ranked as the top business school in the country and is known for its rigorous academic curriculum and global impact.",
    courses: [
      { name: "MBA (PGP)", duration: "2 Years", fee: "₹12L/yr", eligibility: "CAT Percentile > 99.5 + Interview" },
      { name: "MBA-FABM", duration: "2 Years", fee: "₹10L/yr", eligibility: "CAT Percentile > 98 + Interview" }
    ],
    admission: ["CAT Scorecard", "Graduation Transcripts", "Work Experience Proof", "Academic References"]
  },
  "du-srcc": {
    name: "SRCC, Delhi University",
    location: "Delhi, India",
    rating: 4.8,
    banner: "https://picsum.photos/seed/srcc/800/600",
    overview: "Shri Ram College of Commerce is a premier institute for commerce and economics education in India. Affiliated with the University of Delhi, it attracts the brightest minds from across the country.",
    courses: [
      { name: "B.Com (Honours)", duration: "3 Years", fee: "₹30K/yr", eligibility: "CUET Percentile > 99" },
      { name: "B.A. Economics (Honours)", duration: "3 Years", fee: "₹30K/yr", eligibility: "CUET Percentile > 99" }
    ],
    admission: ["CUET Scorecard", "Class 12th Marksheet", "DU CSAS Portal Registration", "Character Certificate"]
  },
  "bits-p": {
    name: "BITS Pilani",
    location: "Pilani, India",
    rating: 4.7,
    banner: "https://picsum.photos/seed/bits/800/600",
    overview: "BITS Pilani is a leading private deemed university known for its flexible academic system and strong industry connections. It offers a unique 'Practice School' program.",
    courses: [
      { name: "B.E. Computer Science", duration: "4 Years", fee: "₹5L/yr", eligibility: "BITSAT Score > 320" },
      { name: "B.E. Mechanical", duration: "4 Years", fee: "₹5L/yr", eligibility: "BITSAT Score > 280" }
    ],
    admission: ["BITSAT Scorecard", "Class 12th Marksheet (min 75% in PCM)", "Aadhar Card"]
  },
  "aiims-d": {
    name: "AIIMS Delhi",
    location: "Delhi, India",
    rating: 5.0,
    banner: "https://picsum.photos/seed/aiims/800/600",
    overview: "All India Institute of Medical Sciences, Delhi is the pinnacle of medical education and healthcare in India. It is a dream destination for every medical aspirant in the country.",
    courses: [
      { name: "MBBS", duration: "5.5 Years", fee: "₹1.6K/yr", eligibility: "NEET Rank < 50" },
      { name: "B.Sc Nursing", duration: "4 Years", fee: "₹1K/yr", eligibility: "AIIMS Entrance Exam" }
    ],
    admission: ["NEET Scorecard", "Class 12th Marksheet (min 60% in PCB)", "Medical Fitness Certificate", "Aadhar Card"]
  }
};

export async function generateStaticParams() {
  return [
    { id: 'iit-b' },
    { id: 'iim-a' },
    { id: 'du-srcc' },
    { id: 'bits-p' },
    { id: 'aiims-d' }
  ];
}

export default async function UniversityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const uni = UNIVERSITY_DATA[id] || UNIVERSITY_DATA["iit-b"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="relative h-72 w-full">
        <img src={uni.banner} alt={uni.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-6 right-6 flex justify-end">
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
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">NIRF Rank</p>
                <p className="text-lg font-bold">Top 5</p>
              </div>
              <div className="bg-background p-4 rounded-2xl border border-secondary">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Acceptance</p>
                <p className="text-lg font-bold">Highly Competitive</p>
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
                      <span className="font-bold text-foreground">{course.fee}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-2 text-xs font-bold text-primary bg-primary/5 px-3 py-2 rounded-xl border border-primary/10">
                      <CheckCircle2 size={14} /> {course.eligibility}
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
