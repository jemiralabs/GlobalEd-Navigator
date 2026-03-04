"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Eye, EyeOff, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = email.includes("@") && password.length >= 6;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userLoggedIn", "true");
      router.push("/home");
    }, 1500);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card p-8 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <button 
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
          <h2 className="text-3xl font-bold text-foreground mb-1">Welcome Back</h2>
          <p className="text-muted-foreground">Enter details to access your portal</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs uppercase font-bold text-muted-foreground ml-1">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" title="Password" className="text-xs uppercase font-bold text-muted-foreground ml-1">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-muted/30 rounded-xl border-none focus-visible:ring-primary pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {password && password.length < 6 && (
              <p className="text-[10px] text-destructive mt-1 font-bold uppercase ml-1">
                Minimum 6 characters required
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || loading}
            className="h-14 text-lg rounded-2xl shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 transition-all mt-4"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : "Login to Portal"}
          </Button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            New applicant?{" "}
            <Link href="/register" className="text-primary font-black hover:underline uppercase text-xs">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}