import { Card } from "@/components/ui/card";
import { TradePanel } from "@/components/dashboard/TradePanel";
import { WaterPanel } from "@/components/dashboard/WaterPanel";
import { SeismicPanel } from "@/components/dashboard/SeismicPanel";
import { EnergyPanel } from "@/components/dashboard/EnergyPanel";
import { UrbanPanel } from "@/components/dashboard/UrbanPanel";
import { CulturalPanel } from "@/components/dashboard/CulturalPanel";
import { ImpactPanel } from "@/components/dashboard/ImpactPanel";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-merriweather text-turquoise">Resilient Nexus Dashboard</h1>
        <p className="text-muted-foreground">Monitor and analyze sustainability metrics across our global network</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TradePanel />
        <WaterPanel />
        <SeismicPanel />
        <EnergyPanel />
        <UrbanPanel />
        <CulturalPanel />
        <ImpactPanel />
      </div>
    </div>
  );
};

export default Dashboard;