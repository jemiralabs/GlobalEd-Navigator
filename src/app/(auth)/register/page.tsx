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
      <div className="auth-card p-8 md:p-10 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <button 
            type="button"
            onClick={() => router.push("/home")} 
            className="p-2 bg-secondary/50 rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="bg-primary/10 p-3 rounded-2xl">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-1">New Applicant</h2>
          <p className="text-muted-foreground text-sm">Join 100k+ students finding their future</p>
        </div>

        <ScrollArea className="flex-1 md:max-h-[60vh] -mx-4 px-4">
          <form onSubmit={handleRegister} className="flex flex-col gap-6 pb-6">
            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Full Legal Name</Label>
              <Input
                placeholder="As per Aadhar Card"
                className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Email ID</Label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Phone Number</Label>
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Create Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase font-bold text-muted-foreground ml-1">Confirm Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || loading}
              className="h-14 text-lg rounded-2xl shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 transition-all mt-4"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Create Student Account"}
            </Button>
          </form>
        </ScrollArea>
        
        <div className="mt-auto md:mt-8 text-center pb-8 md:pb-0 pt-4 border-t border-secondary/50">
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-black hover:underline uppercase text-xs">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}