"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid = 
    formData.fullName.length > 2 &&
    formData.email.includes("@") &&
    formData.phone.length >= 10 &&
    formData.password.length >= 6 &&
    formData.password === formData.confirmPassword;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userLoggedIn", "true");
      router.push("/home");
    }, 1500);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card max-h-[90vh]">
        <div className="p-8 pb-4 flex items-center justify-between border-b border-secondary">
          <button 
            onClick={() => router.back()} 
            className="p-2 bg-secondary/50 rounded-full text-muted-foreground"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-xl font-bold">New Applicant</h2>
          <div className="w-9" /> {/* Spacer */}
        </div>

        <ScrollArea className="flex-1 px-8 py-6">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-primary/10 p-4 rounded-3xl mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm text-center font-medium">Join 100k+ students finding their future</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6 pb-10">
            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Full Legal Name</Label>
              <Input
                placeholder="As per Aadhar Card"
                className="h-12 bg-muted/30 rounded-xl border-none"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Email ID</Label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="h-12 bg-muted/30 rounded-xl border-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Phone Number</Label>
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="h-12 bg-muted/30 rounded-xl border-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Create Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-12 bg-muted/30 rounded-xl border-none"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Confirm Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-12 bg-muted/30 rounded-xl border-none"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || loading}
              className="w-full h-14 text-lg rounded-2xl shadow-xl bg-primary mt-6"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Create Student Account"}
            </Button>
          </form>
        </ScrollArea>
        
        <div className="p-6 border-t border-secondary text-center">
          <p className="text-muted-foreground text-[10px] uppercase font-bold">
            Already have an account? <Link href="/login" className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}