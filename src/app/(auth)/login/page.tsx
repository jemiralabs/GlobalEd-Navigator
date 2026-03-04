"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Eye, EyeOff, Loader2 } from "lucide-react";
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
      router.push("/home");
    }, 1500);
  };

  return (
    <div className="mobile-container flex flex-col px-6 pt-20 pb-10">
      <div className="flex flex-col items-center mb-12">
        <div className="bg-primary/10 p-4 rounded-3xl mb-4">
          <GraduationCap className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-1">Welcome Back</h2>
        <p className="text-muted-foreground">Login to your student account</p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-white rounded-xl border-secondary"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-white rounded-xl border-secondary pr-10"
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
            <p className="text-xs text-destructive mt-1">
              Password must be at least 6 characters.
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isFormValid || loading}
          className="h-12 text-lg rounded-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : "Login"}
        </Button>
      </form>

      <div className="mt-auto pt-8 text-center">
        <p className="text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}