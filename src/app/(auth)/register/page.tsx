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
      router.push("/home");
    }, 1500);
  };

  return (
    <div className="auth-container flex flex-col h-screen">
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <Link href="/login" className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h2 className="text-2xl font-bold">Register</h2>
      </div>

      <ScrollArea className="flex-1 px-6 pb-10">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary/10 p-4 rounded-3xl mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-center">Join 100k+ students finding their future with GlobalEd</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              className="h-12 bg-white rounded-xl"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="h-12 bg-white rounded-xl"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 234 567 890"
              className="h-12 bg-white rounded-xl"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-12 bg-white rounded-xl"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="h-12 bg-white rounded-xl"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || loading}
            className="w-full h-12 text-lg rounded-xl shadow-lg bg-primary mt-4"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : "Create Account"}
          </Button>
        </form>

        <div className="mt-8 text-center pb-8">
          <p className="text-muted-foreground text-sm">
            By registering, you agree to our Terms & Conditions
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}