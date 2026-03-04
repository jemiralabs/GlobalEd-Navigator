
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Bell, CheckCircle2, Info, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotificationsPage() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      title: "Document Verified",
      desc: "Your 10th marksheet for IIT Bombay has been verified successfully.",
      time: "2 hours ago",
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-50",
      isNew: true
    },
    {
      id: 2,
      title: "Merit List Update",
      desc: "IIT Bombay first merit list for Computer Science is now live.",
      time: "Yesterday",
      icon: Info,
      color: "text-blue-500",
      bg: "bg-blue-50",
      isNew: false
    },
    {
      id: 3,
      title: "Fee Reminder",
      desc: "Please complete the counseling fee payment for SRCC by end of this week.",
      time: "2 days ago",
      icon: AlertCircle,
      color: "text-orange-500",
      bg: "bg-orange-50",
      isNew: false
    }
  ];

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Notifications</h2>
      </div>

      <div className="px-6 space-y-4 pb-10">
        {notifications.map((notif) => (
          <div key={notif.id} className={cn(
            "p-5 rounded-3xl border shadow-sm flex gap-4 items-start transition-all",
            notif.isNew ? "bg-white border-primary/20 ring-1 ring-primary/10" : "bg-white/60 border-secondary/40"
          )}>
            <div className={cn("p-3 rounded-2xl shrink-0", notif.bg, notif.color)}>
              <notif.icon size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm">{notif.title}</h4>
                {notif.isNew && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{notif.desc}</p>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                <Clock size={10} /> {notif.time}
              </div>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
            <Bell size={64} className="mb-4" />
            <p className="font-bold">No new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}
