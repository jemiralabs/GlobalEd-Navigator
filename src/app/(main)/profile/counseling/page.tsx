"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MessageSquare, User, Calendar, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function CounselingPage() {
  const router = useRouter();
  const [isBooking, setIsBooking] = useState(false);

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

  const handleBookSession = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      toast({
        title: "Session Requested!",
        description: "An advisor will confirm your slot within 2 hours.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-3 bg-white rounded-2xl shadow-sm text-primary border border-secondary">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-bold">Expert Counseling</h2>
          <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">1-on-1 Guidance</p>
        </div>
      </div>

      <div className="px-6 space-y-6 pb-24">
        <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-md w-fit p-3 rounded-2xl mb-4">
               <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Stuck in Admission?</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Our experts help you with university selection, documentation, and fee structure guidance.
            </p>
            <Button 
              onClick={handleBookSession}
              disabled={isBooking}
              className="w-full h-14 rounded-2xl bg-white text-primary font-bold shadow-lg hover:bg-white/90"
            >
              {isBooking ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4 text-primary" />}
              Book Expert Session
            </Button>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <MessageSquare size={200} />
          </div>
        </div>

        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-bold uppercase text-muted-foreground tracking-widest">Upcoming Meetings</h3>
          <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded-md">2 ACTIVE</span>
        </div>
        
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-secondary/50 group hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <User size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{session.advisor}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{session.subject}</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                  <CheckCircle2 size={16} />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-5 border-t border-secondary/50">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                  <Calendar size={14} className="text-primary" /> {session.date} • {session.time}
                </div>
                <Button size="sm" variant="ghost" className="text-primary font-black text-xs h-auto p-0 hover:bg-transparent">
                  JOIN CALL
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-3xl p-6 text-center border-2 border-dashed border-secondary">
          <p className="text-xs text-muted-foreground italic">
            "The guidance I received for my IIM application was life-changing. Highly recommended!"
          </p>
          <p className="text-[10px] font-bold mt-2 uppercase text-primary">- Ritesh Deshmukh, Student</p>
        </div>
      </div>
    </div>
  );
}
