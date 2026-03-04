
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationHistoryPage() {
  const router = useRouter();

  const history = [
    {
      level: "Class 12th (HSC)",
      board: "CBSE Board",
      year: "2023",
      score: "94.0%",
      stream: "Science (PCM)"
    },
    {
      level: "Class 10th (SSC)",
      board: "CBSE Board",
      year: "2021",
      score: "96.5%",
      stream: "General"
    }
  ];

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Educational History</h2>
      </div>

      <div className="px-6 space-y-6 pb-10">
        {history.map((edu, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={80} />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-xl text-primary">
                <Award size={20} />
              </div>
              <h3 className="font-bold text-lg">{edu.level}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Board/School</p>
                <p className="text-sm font-semibold">{edu.board}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Passing Year</p>
                <p className="text-sm font-semibold flex items-center gap-1">
                  <Calendar size={12} className="text-primary" /> {edu.year}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Score/Grade</p>
                <p className="text-sm font-black text-primary">{edu.score}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Stream</p>
                <p className="text-sm font-semibold">{edu.stream}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-primary/5 rounded-3xl p-6 border-2 border-dashed border-primary/20 text-center cursor-pointer hover:bg-primary/10 transition-colors">
          <GraduationCap className="mx-auto mb-2 text-primary opacity-50" size={32} />
          <p className="text-sm font-bold text-primary">Add New Qualification</p>
          <p className="text-[10px] text-muted-foreground">Bachelor's, Master's or Diploma</p>
        </div>
      </div>
    </div>
  );
}
