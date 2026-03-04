
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, MessageSquare, User, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CounselingPage() {
  const router = useRouter();

  const sessions = [
    {
      id: 1,
      advisor: "Dr. Arun Sharma",
      subject: "IIT Bombay Admission Guidance",
      date: "Oct 12, 2024",
      time: "10:30 AM",
      status: "Confirmed"
    },
    {
      id: 2,
      advisor: "Ms. Neha Gupta",
      subject: "Document Verification Help",
      date: "Oct 15, 2024",
      time: "02:00 PM",
      status: "Scheduled"
    }
  ];

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Counseling Sessions</h2>
      </div>

      <div className="px-6 space-y-6 pb-10">
        <div className="bg-primary/10 rounded-[2.5rem] p-6 text-center border border-primary/20 mb-8">
          <MessageSquare className="mx-auto mb-4 text-primary" size={40} />
          <h3 className="font-bold text-lg mb-2">Need Expert Advice?</h3>
          <p className="text-xs text-muted-foreground mb-6">Book a 1-on-1 session with our top education experts to clear your doubts.</p>
          <Button className="w-full rounded-2xl bg-primary font-bold shadow-lg shadow-primary/20">Book New Session</Button>
        </div>

        <h3 className="text-sm font-bold uppercase text-muted-foreground tracking-widest px-2">Upcoming Meetings</h3>
        
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-3xl p-6 shadow-sm border border-secondary/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{session.advisor}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">{session.subject}</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-600 p-1 rounded-full">
                  <CheckCircle2 size={16} />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-secondary/50">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  <Calendar size={14} className="text-primary" /> {session.date} • {session.time}
                </div>
                <Button size="sm" variant="ghost" className="text-primary font-bold h-auto p-0">Join Call</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
