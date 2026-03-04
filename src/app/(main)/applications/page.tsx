"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, MapPin, GraduationCap, MessageCircle, AlertCircle } from "lucide-react";

const applications = [
  {
    id: "APP-98231",
    uni: "Stanford University",
    course: "Computer Science",
    date: "12 Oct 2023",
    status: 2, // Under Review
    estDate: "Nov 15, 2023"
  },
  {
    id: "APP-98105",
    uni: "MIT",
    course: "Biotechnology",
    date: "05 Oct 2023",
    status: 1, // Submitted
    estDate: "Nov 01, 2023"
  }
];

const steps = [
  { title: "Application Submitted", status: "completed" },
  { title: "Under Review", status: "current" },
  { title: "Document Verification", status: "pending" },
  { title: "Offer Letter", status: "pending" },
  { title: "Visa Process", status: "pending" }
];

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col pt-12">
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-bold">My Applications</h2>
        <p className="text-muted-foreground text-sm">Track your progress in real-time</p>
      </div>

      <div className="px-6 space-y-6">
        {applications.map((app) => (
          <div key={app.id} className="bg-white rounded-[2rem] shadow-sm border border-secondary/20 overflow-hidden">
            <div className="p-6 pb-4 bg-primary/5 border-b border-primary/10">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-2 rounded-xl shadow-sm">
                   <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-tight">Application ID</p>
                  <p className="text-sm font-bold text-primary">{app.id}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold">{app.uni}</h3>
              <p className="text-sm text-muted-foreground mb-1">{app.course}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> Applied on {app.date}</p>
            </div>

            <div className="p-6">
              <h4 className="text-xs font-black uppercase text-muted-foreground tracking-widest mb-6">Tracking Timeline</h4>
              
              <div className="space-y-0">
                {steps.map((step, idx) => {
                  const isLast = idx === steps.length - 1;
                  const isActive = idx < app.status;
                  const isCurrent = idx === app.status;

                  return (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                          isActive ? "bg-green-500 text-white" : 
                          isCurrent ? "bg-primary text-white animate-pulse" : "bg-secondary text-muted-foreground"
                        }`}>
                          {isActive ? <CheckCircle2 size={14} /> : isCurrent ? <Clock size={14} /> : <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />}
                        </div>
                        {!isLast && (
                          <div className={`w-[2px] h-10 ${isActive ? "bg-green-500" : "bg-secondary"}`} />
                        )}
                      </div>
                      <div className={`pt-0.5 pb-8 ${isLast ? "pb-0" : ""}`}>
                        <p className={`text-sm font-bold ${isActive ? "text-green-600" : isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                          {step.title}
                        </p>
                        {isCurrent && (
                          <p className="text-[10px] text-muted-foreground mt-1 bg-primary/5 px-2 py-1 rounded-md w-fit">In progress</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-secondary flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Est. Decision</p>
                    <p className="text-sm font-bold">{app.estDate}</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl h-10 border-primary/20 text-primary">
                    <MessageCircle size={16} className="mr-2" /> Advisor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 mt-10 mb-10">
        <div className="bg-accent/10 p-6 rounded-[2rem] flex items-center gap-4">
          <div className="bg-accent text-white p-3 rounded-2xl shadow-lg shadow-accent/20">
            <AlertCircle />
          </div>
          <div>
            <h4 className="font-bold text-sm">Need Help?</h4>
            <p className="text-xs text-muted-foreground">Book a free session with an expert counselor today.</p>
          </div>
        </div>
      </div>
    </div>
  );
}