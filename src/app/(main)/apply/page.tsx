"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CheckCircle2, Upload, FileText, ChevronRight, GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { DocumentGuidanceCard } from "@/components/ai/document-guidance-card";

export default function ApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
        <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
        <p className="text-muted-foreground text-center">Your application to Stanford University has been received. Redirecting to status screen...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-12 min-h-screen">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => step > 1 ? prevStep() : router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-xl font-bold">Apply Now</h2>
          <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Step {step} of {totalSteps}</p>
        </div>
      </div>

      <div className="px-6 mb-8">
        <Progress value={progress} className="h-2 rounded-full" />
      </div>

      <div className="flex-1 px-6 pb-24">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Personal Details</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input placeholder="John Doe" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <Input type="date" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup defaultValue="male" className="flex gap-4">
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
                <Label>Nationality</Label>
                <Input placeholder="e.g. United States" className="h-12 bg-white rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Academic Details</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Highest Qualification</Label>
                <Input placeholder="High School Diploma" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Grade/Score (GPA)</Label>
                <Input placeholder="3.8 / 4.0" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>English Proficiency (IELTS/TOEFL)</Label>
                <Input placeholder="7.5" className="h-12 bg-white rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Year of Completion</Label>
                <Input type="number" placeholder="2023" className="h-12 bg-white rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Document Upload</h3>
            
            <DocumentGuidanceCard docType="Statement of Purpose" />

            <div className="space-y-4 pt-2">
              {[
                { label: "Passport", sub: "Scan of bio page" },
                { label: "Transcript", sub: "Latest academic record" },
                { label: "Statement of Purpose (SOP)", sub: "PDF only" },
                { label: "Resume/CV", sub: "Professional profile" }
              ].map((doc, idx) => (
                <div key={idx} className="bg-white border-2 border-dashed border-secondary p-5 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/40 transition-colors">
                  <Upload size={24} className="text-primary mb-2" />
                  <p className="text-sm font-bold">{doc.label}</p>
                  <p className="text-[10px] text-muted-foreground">{doc.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-bold">Review Application</h3>
            <div className="bg-white p-5 rounded-3xl border border-secondary shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Stanford University</h4>
                  <p className="text-xs text-muted-foreground">Computer Science, Fall 2024</p>
                </div>
              </div>
              <hr className="border-secondary" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Applicant</span>
                  <span className="font-medium text-right">Jemish Macwan</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Contact</span>
                  <span className="font-medium text-right">jemish@example.com</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Documents</span>
                  <span className="font-medium text-right text-green-600">4 Uploaded</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-2xl text-xs text-muted-foreground leading-relaxed">
              <FileText className="text-primary shrink-0" size={16} />
              By submitting, I certify that the information provided is true and accurate to the best of my knowledge.
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/80 backdrop-blur-md border-t border-secondary z-50 rounded-t-3xl">
        <Button 
          className="w-full h-14 text-lg rounded-2xl shadow-xl shadow-primary/20 bg-primary group"
          onClick={step === totalSteps ? handleSubmit : nextStep}
        >
          {step === totalSteps ? "Submit Application" : "Continue"}
          <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}