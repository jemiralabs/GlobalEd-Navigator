import { 
  User, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Download,
  MessageCircle,
  Fingerprint,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const APP_DETAILS: any = {
  "APP-IITB-101": {
    id: "APP-IITB-101",
    university: "IIT Bombay",
    course: "B.Tech Computer Science",
    appliedDate: "Feb 12, 2024",
    status: 1,
    personal: {
      fullName: "Jemira",
      aadhar: "XXXX-XXXX-9012",
      gender: "Female",
      nationality: "Indian",
      email: "jemira@example.com",
      phone: "+91 98765 43210",
      address: "Sector 5, Hiranandani, Mumbai, MH - 400076"
    },
    academic: {
      qualification: "12th Science (PCM)",
      score10: "96.5% (CBSE)",
      score12: "94.0% (CBSE)",
      entranceScore: "JEE Rank: 1205",
      completionYear: "2023"
    },
    documents: [
      { name: "Aadhar Card", status: "Verified", date: "Feb 13, 2024" },
      { name: "10th Marksheet", status: "Verified", date: "Feb 13, 2024" },
      { name: "12th Marksheet", status: "Verified", date: "Feb 12, 2024" },
      { name: "Entrance Scorecard", status: "Under Review", date: "Feb 12, 2024" }
    ]
  },
  "APP-DU-502": {
    id: "APP-DU-502",
    university: "SRCC, Delhi University",
    course: "B.Com (Hons)",
    appliedDate: "Feb 05, 2024",
    status: 0,
    personal: {
      fullName: "Jemira",
      aadhar: "XXXX-XXXX-9012",
      gender: "Female",
      nationality: "Indian",
      email: "jemira@example.com",
      phone: "+91 98765 43210",
      address: "Sector 5, Hiranandani, Mumbai, MH - 400076"
    },
    academic: {
      qualification: "12th Commerce",
      score10: "95.2% (CBSE)",
      score12: "97.5% (CBSE)",
      entranceScore: "CUET Score: 795/800",
      completionYear: "2023"
    },
    documents: [
      { name: "Aadhar Card", status: "Verified", date: "Feb 06, 2024" },
      { name: "10th Marksheet", status: "Verified", date: "Feb 06, 2024" },
      { name: "12th Marksheet", status: "Under Review", date: "Feb 05, 2024" }
    ]
  }
};

const timelineSteps = [
  { title: "Application Fees Paid", status: "completed" },
  { title: "Document Verification", status: "current" },
  { title: "Entrance Merit List", status: "pending" },
  { title: "Provisional Admission", status: "pending" },
  { title: "Fee Payment & Enrollment", status: "pending" }
];

export async function generateStaticParams() {
  return [
    { id: 'APP-IITB-101' },
    { id: 'APP-DU-502' }
  ];
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const app = APP_DETAILS[id] || APP_DETAILS["APP-IITB-101"];

  return (
    <div className="flex flex-col pt-4 md:pt-12 min-h-screen bg-background">
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold">Admission Details</h2>
        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{app.id}</p>
      </div>

      <div className="flex-1 px-6 pb-24 space-y-6">
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
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Submitted</span>
              <span className="text-sm font-bold flex items-center gap-1 mt-1">
                <Calendar size={14} className="text-primary" /> {app.appliedDate}
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Stage</span>
              <span className="text-sm font-bold text-primary mt-1">
                {timelineSteps[app.status]?.title}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 px-2">
            <User size={18} className="text-primary" />
            <h4 className="font-bold text-lg">Identity Details</h4>
          </div>
          <div className="bg-white rounded-[2rem] p-6 space-y-4 shadow-sm border border-secondary">
            <InfoItem label="Legal Name" value={app.personal.fullName} />
            <InfoItem label="Aadhar Status" value={app.personal.aadhar} icon={<Fingerprint size={12} />} />
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Nationality" value={app.personal.nationality} />
              <InfoItem label="Gender" value={app.personal.gender} />
            </div>
            <InfoItem label="Email ID" value={app.personal.email} icon={<Mail size={12} />} />
            <InfoItem label="Mobile" value={app.personal.phone} icon={<Phone size={12} />} />
            <InfoItem label="Current Address" value={app.personal.address} icon={<MapPin size={12} />} />
          </div>
        </div>

        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 px-2">
            <BookOpen size={18} className="text-primary" />
            <h4 className="font-bold text-lg">Academic Scorecard</h4>
          </div>
          <div className="bg-white rounded-[2rem] p-6 space-y-4 shadow-sm border border-secondary">
            <InfoItem label="Highest Stream" value={app.academic.qualification} />
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Class 10th" value={app.academic.score10} />
              <InfoItem label="Class 12th" value={app.academic.score12} />
            </div>
            <InfoItem label="Entrance Rank/Score" value={app.academic.entranceScore} />
          </div>
        </div>

        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 px-2">
            <FileText size={18} className="text-primary" />
            <h4 className="font-bold text-lg">Uploaded Certificates</h4>
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
                    <p className="text-[10px] text-muted-foreground">Digital copy verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase px-2 py-1 rounded-md",
                    doc.status === "Verified" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
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

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/80 backdrop-blur-md border-t border-secondary z-50 rounded-t-[2.5rem] flex gap-3">
        <Button variant="outline" className="flex-1 h-14 rounded-2xl font-bold border-primary/20 text-primary">
          <Download size={20} className="mr-2" /> Admission PDF
        </Button>
        <Link href="/help-desk" className="flex-[1.5]">
          <Button className="w-full h-14 rounded-2xl font-bold shadow-xl shadow-primary/20 bg-primary">
            <MessageCircle size={20} className="mr-2" /> Help Desk
          </Button>
        </Link>
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
