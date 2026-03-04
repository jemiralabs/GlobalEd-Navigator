"use client";

import { 
  PhoneCall, 
  Mail, 
  MessageSquare, 
  Clock, 
  Globe, 
  ShieldCheck,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HelpDeskPage() {
  const contactMethods = [
    {
      icon: <PhoneCall className="text-primary" />,
      title: "Toll-Free Helpline",
      value: "1800-123-4567",
      sub: "Available 9 AM - 6 PM (Mon-Sat)",
      action: "Call Now"
    },
    {
      icon: <Headphones className="text-primary" />,
      title: "Mobile Support",
      value: "+91 98765 43210",
      sub: "Direct line for active applications",
      action: "WhatsApp"
    },
    {
      icon: <Mail className="text-primary" />,
      title: "Official Email",
      value: "support@globaled.in",
      sub: "Response within 24 working hours",
      action: "Send Email"
    }
  ];

  return (
    <div className="flex flex-col pt-4 md:pt-12 min-h-screen bg-background">
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold">Help Desk</h2>
        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Support Center</p>
      </div>

      <div className="flex-1 px-6 pb-20 space-y-6">
        <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">How can we help?</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Our education experts are here to guide you through the centralized admission process.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold bg-white/20 backdrop-blur-sm w-fit px-3 py-1.5 rounded-full">
              <Clock size={14} /> Average wait time: 2 mins
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <MessageSquare size={160} />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase text-muted-foreground tracking-widest px-2">Contact Channels</h4>
          {contactMethods.map((method, idx) => (
            <Card key={idx} className="rounded-3xl border-secondary shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-black text-muted-foreground mb-1">{method.title}</p>
                    <p className="text-lg font-bold text-foreground mb-1">{method.value}</p>
                    <p className="text-xs text-muted-foreground mb-4">{method.sub}</p>
                    <Button variant="outline" className="w-full rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5">
                      {method.action}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-6 border border-secondary space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" size={24} />
            <div>
              <p className="text-sm font-bold">Safe & Secure</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">Verified Education Partner</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            GlobalEd Navigator is an authorized partner for Indian Centralized Admissions. All communications are recorded for quality assurance.
          </p>
        </div>
      </div>
      
      <div className="px-6 pb-10 text-center">
        <div className="flex justify-center gap-4 opacity-40 grayscale mb-4">
          <Globe size={20} />
          <MessageSquare size={20} />
          <PhoneCall size={20} />
        </div>
        <p className="text-[10px] text-muted-foreground font-medium">© 2024 GlobalEd Support. All rights reserved.</p>
      </div>
    </div>
  );
}
