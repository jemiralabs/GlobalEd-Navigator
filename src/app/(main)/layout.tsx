import { BottomNav } from "@/components/navigation/bottom-nav";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background md:bg-muted/10">
        <AppSidebar />
        <main className="flex-1 relative min-h-screen">
          <div className="md:max-w-5xl md:mx-auto md:bg-background md:min-h-screen md:shadow-sm">
            <div className="mobile-container pb-24 md:pb-12 md:max-w-none md:bg-transparent">
              {children}
            </div>
          </div>
          <BottomNav />
        </main>
      </div>
    </SidebarProvider>
  );
}