
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Shield, Key, Smartphone, Eye, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SecurityPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Security & Privacy</h2>
      </div>

      <div className="px-6 space-y-6 pb-10">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-secondary/20">
          <h3 className="text-sm font-bold uppercase text-muted-foreground tracking-widest mb-4">Login Security</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                  <Key size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Change Password</p>
                  <p className="text-[10px] text-muted-foreground">Last changed 3 months ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-primary font-bold">Edit</Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 text-purple-500 rounded-xl">
                  <Smartphone size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Two-Step Verification</p>
                  <p className="text-[10px] text-muted-foreground">Secure your account with OTP</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-secondary/20">
          <h3 className="text-sm font-bold uppercase text-muted-foreground tracking-widest mb-4">Privacy Controls</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 text-green-500 rounded-xl">
                  <Eye size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Profile Visibility</p>
                  <p className="text-[10px] text-muted-foreground">Visible to admission counselors</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 text-orange-500 rounded-xl">
                  <Shield size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Data Sharing</p>
                  <p className="text-[10px] text-muted-foreground">Share academic data with unis</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <button className="w-full bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-secondary/20">
          <div className="flex items-center gap-3">
            <History className="text-primary" size={20} />
            <span className="text-sm font-bold">Active Login Sessions</span>
          </div>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">2 Active</span>
        </button>
      </div>
    </div>
  );
}
