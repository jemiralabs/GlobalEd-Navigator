import { BottomNav } from "@/components/navigation/bottom-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mobile-container pb-24">
      {children}
      <BottomNav />
    </div>
  );
}