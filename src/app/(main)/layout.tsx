import { BottomNav } from "@/components/navigation/bottom-nav";
import { TopNav } from "@/components/navigation/top-nav";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background md:bg-muted/10">
      <TopNav />
      {/* Mobile Branding Header */}
      <header className="md:hidden sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-secondary/50 px-6 h-14 flex items-center">
        <Link href="/home" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">GlobalEd</span>
        </Link>
      </header>
      <main className="flex-1 relative">
        <div className="md:max-w-6xl md:mx-auto md:bg-background md:min-h-screen md:shadow-sm">
          <div className="mobile-container pb-24 md:pb-12 md:max-w-none md:bg-transparent">
            {children}
          </div>
        </div>
        <BottomNav />
      </main>
    </div>
  );
}
