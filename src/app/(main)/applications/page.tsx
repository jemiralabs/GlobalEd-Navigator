"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, GraduationCap, MessageCircle, AlertCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const applications = [
  {
    id: "APP-IITB-101",
    uni: "IIT Bombay",
    course: "B.Tech Computer Science",
    date: "12 Feb 2024",
    status: 1, // Document Verification
    estDate: "Mar 15, 2024",
    logo: "uni-1"
  },
  {
    id: "APP-DU-502",
    uni: "SRCC, Delhi University",
    course: "B.Com (Hons)",
    date: "05 Feb 2024",
    status: 0, // Submitted
    estDate: "Mar 01, 2024",
    logo: "uni-3"
  }
];

const steps = [
  { title: "Application Fees Paid", status: "completed" },
  { title: "Document Verification", status: "current" },
  { title: "Entrance Merit List", status: "pending" },
  { title: "Provisional Admission", status: "pending" },
  { title: "Fee Payment & Enrollment", status: "pending" }
];

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col pt-6 md:pt-12">
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-bold text-foreground">Admission Status</h2>
        <p className="text-muted-foreground text-sm">Track your Centralized Admissions progress</p>
      </div>

      <div className="px-6 space-y-8">
        {applications.map((app) => (
          <div key={app.id} className="bg-white rounded-[2.5rem] shadow-lg shadow-black/[0.03] border border-secondary overflow-hidden animate-fade-in">
            <div className="p-6 pb-4 bg-primary/[0.02] border-b border-secondary/50">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-secondary">
                   <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Enrollment ID</p>
                  <p className="text-sm font-bold text-primary">{app.id}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold">{app.uni}</h3>
              <p className="text-sm text-muted-foreground mb-3">{app.course}</p>
              <div className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary text-[10px] font-black uppercase px-2 py-1 rounded-md">
                  Processing
                </span>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {app.date}</p>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-6 border-b border-secondary pb-2 w-fit">Counseling Steps</h4>
              
              <div className="space-y-0">
                {steps.map((step, idx) => {
                  const isLast = idx === steps.length - 1;
                  const isCompleted = idx < app.status;
                  const isCurrent = idx === app.status;

                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center z-10 transition-colors",
                          isCompleted ? "bg-green-500 text-white shadow-lg shadow-green-200" : 
                          isCurrent ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-secondary text-muted-foreground"
                        )}>
                          {isCompleted ? <CheckCircle2 size={14} /> : isCurrent ? <Clock size={14} /> : <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />}
                        </div>
                        {!isLast && (
                          <div className={cn(
                            "w-[2px] h-10 transition-colors",
                            isCompleted ? "bg-green-500" : "bg-secondary"
                          )} />
                        )}
                      </div>
                      <div className={cn("pt-0.5 pb-8", isLast && "pb-0")}>
                        <p className={cn(
                          "text-sm font-bold transition-colors",
                          isCompleted ? "text-green-600" : isCurrent ? "text-primary" : "text-muted-foreground"
                        )}>
                          {step.title}
                        </p>
                        {isCurrent && (
                          <p className="text-[10px] text-muted-foreground mt-1 bg-primary/5 px-2 py-0.5 rounded-md w-fit border border-primary/10">Under Verification</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-6 border-t border-secondary">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Merit List Date</p>
                    <p className="text-sm font-bold">{app.estDate}</p>
                  </div>
                  <Link href="/help-desk">
                    <Button variant="outline" size="sm" className="rounded-xl h-10 border-primary/20 text-primary hover:bg-primary/5 font-bold">
                      <MessageCircle size={16} className="mr-2" /> Admission Cell
                    </Button>
                  </Link>
                </div>
                <Link href={`/applications/${app.id}`} className="block w-full">
                  <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-bold h-12 shadow-none border border-black/5">
                    View Full Application <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 mt-10 mb-12">
        <Link href="/help-desk" className="block">
          <div className="bg-accent/10 p-6 rounded-[2.5rem] flex items-center gap-4 border border-accent/10 hover:bg-accent/20 transition-colors cursor-pointer">
            <div className="bg-accent text-white p-3 rounded-2xl shadow-lg shadow-accent/20">
              <AlertCircle />
            </div>
            <div>
              <h4 className="font-bold text-sm">Need Help?</h4>
              <p className="text-[11px] text-muted-foreground leading-snug">Connect with our education experts for counseling and fee structure guidance.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
