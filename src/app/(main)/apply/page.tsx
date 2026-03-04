"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Upload, 
  FileText, 
  ChevronRight, 
  GraduationCap, 
  Loader2,
  Fingerprint
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function ApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadingDoc, setUploadingDoc] = useState<number | null>(null);
  const [uploadedDocs, setUploadedDocs] = useState<number[]>([]);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const simulateUpload = (idx: number) => {
    if (uploadedDocs.includes(idx)) return;
    setUploadingDoc(idx);
    setTimeout(() => {
      setUploadingDoc(null);
      setUploadedDocs([...uploadedDocs, idx]);
    }, 1500);
  };

  const handleSubmit = () => {
    setIsSuccess(true);
    setTimeout(() => {
      router.push("/applications");
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="mobile-container flex flex-col items-center justify-center p-10 animate-fade-in">
        <div className="bg-primary/10 p-8 rounded-full mb-6">
          <CheckCircle2 className="w-20 h-20 text-primary animate-bounce" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Application Submitted!</h2>
        <p className="text-muted-foreground text-center">Your application to IIT Bombay has been received. Redirecting to tracking screen...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-12 min-h-screen">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => step > 1 ? prevStep() : router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary hover:scale-105 transition-transform">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-xl font-bold">University Application</h2>
          <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Step {step} of {totalSteps}</p>
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="flex justify-between mb-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={cn(
              "w-2 h-2 rounded-full",
              step > i ? "bg-primary" : "bg-secondary"
            )} />
          ))}
        </div>
        <Progress value={progress} className="h-1.5 rounded-full" />
      </div>

      <div className="flex-1 px-6 pb-32">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Personal Details</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Full Name (as per Aadhar)</Label>
                <Input placeholder="Jemira" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Aadhar Card Number</Label>
                <div className="relative">
                  <Input placeholder="1234 5678 9012" className="h-12 bg-white rounded-xl pl-10" maxLength={14} />
                  <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <Input type="date" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup defaultValue="female" className="flex gap-4">
                  <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-secondary flex-1">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-secondary flex-1">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Full Address</Label>
                <Textarea placeholder="House No, Area, City, Pincode..." className="bg-white rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Academic History</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>10th Board (e.g., CBSE, ICSE, State)</Label>
                <Input placeholder="CBSE" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>10th Percentage/CGPA</Label>
                  <Input placeholder="9.5" className="h-12 bg-white rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Year of Passing</Label>
                  <Input type="number" placeholder="2021" className="h-12 bg-white rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>12th Stream (Science/Comm/Arts)</Label>
                <Input placeholder="Science (PCM)" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>12th Percentage</Label>
                  <Input placeholder="92%" className="h-12 bg-white rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Year of Passing</Label>
                  <Input type="number" placeholder="2023" className="h-12 bg-white rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Entrance Exam Score (JEE/NEET/CAT)</Label>
                <Input placeholder="JEE Rank: 4500" className="h-12 bg-white rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Document Verification</h3>
            
            <div className="grid grid-cols-1 gap-4 pt-2">
              {[
                { label: "Aadhar Card", sub: "Front & Back scan" },
                { label: "10th Marksheet", sub: "Official board certificate" },
                { label: "12th Marksheet", sub: "Official board certificate" },
                { label: "Graduation Degree", sub: "For PG applicants only" }
              ].map((doc, idx) => (
                <div 
                  key={idx} 
                  onClick={() => simulateUpload(idx)}
                  className={cn(
                    "relative overflow-hidden bg-white border-2 border-dashed p-5 rounded-2xl flex items-center gap-4 cursor-pointer transition-all",
                    uploadedDocs.includes(idx) ? "border-green-500 bg-green-50" : "border-secondary hover:border-primary/40"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl",
                    uploadedDocs.includes(idx) ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary"
                  )}>
                    {uploadingDoc === idx ? <Loader2 size={24} className="animate-spin" /> : <Upload size={24} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{doc.label}</p>
                    <p className="text-[10px] text-muted-foreground">{doc.sub}</p>
                    {uploadingDoc === idx && (
                      <div className="w-full h-1 bg-secondary rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-primary animate-progress" />
                      </div>
                    )}
                  </div>
                  {uploadedDocs.includes(idx) && (
                    <CheckCircle2 size={20} className="text-green-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Review & Submit</h3>
            <div className="bg-white p-5 rounded-3xl border border-secondary shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">IIT Bombay</h4>
                  <p className="text-xs text-muted-foreground">B.Tech Computer Science, 2024</p>
                </div>
              </div>
              <hr className="border-secondary" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Full Name</span>
                  <span className="font-medium text-right">Jemira</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Documents</span>
                  <span className="font-medium text-right text-green-600 font-bold">{uploadedDocs.length} / 4 Verified</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl text-[11px] text-muted-foreground leading-relaxed italic">
              <FileText className="text-primary shrink-0" size={16} />
              I hereby declare that all information provided is true to the best of my knowledge and matches my official Indian govt-issued documents.
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/90 backdrop-blur-md border-t border-secondary z-50 rounded-t-[2.5rem]">
        <Button 
          className="w-full h-14 text-lg rounded-2xl shadow-xl shadow-primary/20 bg-primary group hover:scale-[1.02] transition-transform"
          onClick={step === totalSteps ? handleSubmit : nextStep}
        >
          {step === totalSteps ? "Confirm & Pay Fees" : "Next Step"}
          <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
