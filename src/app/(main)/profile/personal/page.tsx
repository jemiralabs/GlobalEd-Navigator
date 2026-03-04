"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Phone, MapPin, Fingerprint } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalInfoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-12 min-h-screen bg-background">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm text-primary">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Personal Information</h2>
      </div>

      <div className="px-6 space-y-6 pb-10">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img src="https://picsum.photos/seed/user1/200/200" alt="Avatar" />
          </div>
          <Button variant="outline" size="sm" className="rounded-xl">Change Photo</Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold ml-1">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <Input defaultValue="Jemira" className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold ml-1">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <Input defaultValue="jemira@example.com" className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold ml-1">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <Input defaultValue="+91 98765 43210" className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold ml-1">Aadhar Number</Label>
            <div className="relative">
              <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <Input defaultValue="XXXX-XXXX-9012" disabled className="pl-10 h-12 rounded-xl bg-secondary/20 border-none shadow-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold ml-1">Current Address</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-primary" size={18} />
              <textarea 
                className="w-full pl-10 pt-2 h-24 rounded-xl bg-white border-none shadow-sm text-sm focus:ring-2 focus:ring-primary outline-none"
                defaultValue="Sector 5, Hiranandani, Mumbai, MH - 400076"
              />
            </div>
          </div>
        </div>

        <Button className="w-full h-14 rounded-2xl bg-primary font-bold shadow-lg shadow-primary/20 mt-6">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
