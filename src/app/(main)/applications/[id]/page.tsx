"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  User, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Download,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for a detailed application view
const APP_DETAILS: any = {
  "APP-98231": {
    id: "APP-98231",
    university: "Stanford University",
    course: "Computer Science",
    appliedDate: "Oct 12, 2023",
    status: 2,
    personal: {
      fullName: "Jemish Macwan",
      dob: "15 May 2001",
      gender: "Male",
      nationality: "Indian",
      email: "jemish@example.com",
      phone: "+91 98765 43210",
      address: "123 Academic Square, Mumbai, MH, 400001"
    },
    academic: {
      qualification: "B.Tech in Information Technology",
      score10: "94.5%",
      score12: "92.0%",
      englishScore: "IELTS 8.0",
      completionYear: "2023"
    },
    documents: [
      { name: "Passport", status: "Verified", date: "Oct 13, 2023" },
      { name: "Transcripts", status: "Verified", date: "Oct 13, 2023" },
      { name: "Resume/CV", status: "Under Review", date: "Oct 12, 2023" },
      { name: "SOP", status: "Under Review", date: "Oct 12, 2023" }
    ]
  },
  "APP-98105": {
    id: "APP-98105",
    university: "MIT",
    course: "Biotechnology",
    appliedDate: "Oct 05, 2023",
    status: 1,
    personal: {
      fullName: "Jemish Macwan",
      dob: "15 May 2001",
      gender: "Male",
      nationality: "Indian",
      email: "jemish@example.com",
      phone: "+91 98765 43210",
      address: "123 Academic Square, Mumbai, MH, 400001"
    },
    academic: {
      qualification: "B.Tech in Information Technology",
      score10: "94.5%",
      score12: "92.0%",
      englishScore: "IELTS 8.0",
      completionYear: "2023"
    },
    documents: [
      { name: "Passport", status: "Verified", date: "Oct 06, 2023" },
      { name: "Transcripts", status: "Pending", date: "-" },
      { name: "Resume/CV", status: "Verified", date: "Oct 05, 2023" },
      { name: "SOP", status: "Verified", date: "Oct 05, 2023" }
    ]
  }
};

const timelineSteps = [
  { title: "Application Submitted", status: "completed" },
  { title: "Under Review", status: "current" },
  { title: "Document Verification", status: "pending" },
  { title: "Offer Letter", status: "pending" },
  { title: "Visa Process", status: "pending" }
];

export default function ApplicationDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const app = APP_DETAILS[id as string] || APP_DETAILS["APP-98231"];

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 flex items-center gap-4 mb-8">
        <button 
          onClick={() => router.back()} 
          className="p-3 bg-white rounded-2xl shadow-sm text-primary hover:scale-105 transition-transform border border-secondary"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-bold">Application Details</h2>
          <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{app.id}</p>
        </div>
      </div>

      <div className="flex-1 px-6 pb-24 space-y-6">
        {/* Main Info Card */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-black/[0.02] border border-secondary animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-3xl">
              <GraduationCap className="text-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{app.university}</h3>
              <p className="text-sm text-muted-foreground">{app.course}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-secondary">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Applied On</span>
              <span className="text-sm font-bold flex items-center gap-1 mt-1">
                <Calendar size={14} className="text-primary" /> {app.appliedDate}
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Current Status</span>
              <span className="text-sm font-bold text-primary mt-1">
                {timelineSteps[app.status]?.title}
              </span>
            </div>
          </div>
        </div>

        {/* Section: Personal Information */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-2 px-2">
            <User size={18} className="text-primary" />
            <h4 className="font-bold text-lg">Personal Information</h4>
          </div>
          <div className="bg-white rounded-[2rem] p-6 space-y-4 shadow-sm border border-secondary">
            <InfoItem label="Full Name" value={app.personal.fullName} />
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Date of Birth" value={app.personal.dob} />
              <InfoItem label="Gender" value={app.personal.gender} />
            </div>
            <InfoItem label="Nationality" value={app.personal.nationality} />
            <InfoItem 
              label="Email" 
              value={app.personal.email} 
              icon={<Mail size={12} className="text-muted-foreground" />} 
            />
            <InfoItem 
              label="Phone" 
              value={app.personal.phone} 
              icon={<Phone size={12} className="text-muted-foreground" />} 
            />
            <InfoItem 
              label="Address" 
              value={app.personal.address} 
              icon={<MapPin size={12} className="text-muted-foreground" />} 
            />
          </div>
        </div>

        {/* Section: Academic Details */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 px-2">
            <GraduationCap size={18} className="text-primary" />
            <h4 className="font-bold text-lg">Academic Records</h4>
          </div>
          <div className="bg-white rounded-[2rem] p-6 space-y-4 shadow-sm border border-secondary">
            <InfoItem label="Highest Qualification" value={app.academic.qualification} />
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="10th Score" value={app.academic.score10} />
              <InfoItem label="12th Score" value={app.academic.score12} />
            </div>
            <InfoItem label="English Proficiency" value={app.academic.englishScore} />
            <InfoItem label="Year of Completion" value={app.academic.completionYear} />
          </div>
        </div>

        {/* Section: Uploaded Documents */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 px-2">
            <FileText size={18} className="text-primary" />
            <h4 className="font-bold text-lg">Submitted Documents</h4>
          </div>
          <div className="space-y-3">
            {app.documents.map((doc: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl p-4 flex items-center justify-between border border-secondary shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/5 p-2 rounded-xl text-primary">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{doc.name}</p>
                    <p className="text-[10px] text-muted-foreground">Uploaded: {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase px-2 py-1 rounded-md",
                    doc.status === "Verified" ? "bg-green-100 text-green-600" : 
                    doc.status === "Pending" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                  )}>
                    {doc.status}
                  </span>
                  {doc.status === "Verified" && <CheckCircle2 size={16} className="text-green-600" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/80 backdrop-blur-md border-t border-secondary z-50 rounded-t-[2.5rem] flex gap-3">
        <Button variant="outline" className="flex-1 h-14 rounded-2xl font-bold border-primary/20 text-primary">
          <Download size={20} className="mr-2" /> PDF Copy
        </Button>
        <Button className="flex-[1.5] h-14 rounded-2xl font-bold shadow-xl shadow-primary/20 bg-primary">
          <MessageCircle size={20} className="mr-2" /> Contact Advisor
        </Button>
      </div>
    </div>
  );
}

function InfoItem({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tight">{label}</span>
      <span className="text-sm font-medium mt-0.5 flex items-center gap-1.5 leading-relaxed">
        {icon}
        {value}
      </span>
    </div>
  );
}
