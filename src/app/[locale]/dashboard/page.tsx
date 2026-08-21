import Header from "@/components/shared/Header";

import { CurrentUserCard } from "@/features/user/components/current-user-card";

function DashboardPage() {
  return (
    <div className="bg-muted/40 flex min-h-screen w-full flex-col">
      <Header />

      <div className="container flex min-h-screen flex-col items-center justify-center gap-8 py-12">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <CurrentUserCard />
      </div>
    </div>
  );
}

export default DashboardPage;
