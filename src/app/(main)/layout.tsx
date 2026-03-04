import { BottomNav } from "@/components/navigation/bottom-nav";
import { TopNav } from "@/components/navigation/top-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background md:bg-muted/10">
      <TopNav />
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
