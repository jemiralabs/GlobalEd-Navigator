"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GraduationCap } from "lucide-react";

export default function SplashScreen() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => router.push("/login"), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center animate-fade-in">
        <div className="bg-white p-6 rounded-full shadow-2xl mb-6">
          <GraduationCap className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          GlobalEd Navigator
        </h1>
        <p className="text-white/80 text-lg font-medium">
          Your Global Education Partner
        </p>
      </div>
      
      <div className="absolute bottom-12 text-white/60 text-sm">
        Powered by AI Guidance
      </div>
    </div>
  );
}