import { Card } from "@/components/ui/card";
import { TradePanel } from "@/components/dashboard/TradePanel";
import { WaterPanel } from "@/components/dashboard/WaterPanel";
import { SeismicPanel } from "@/components/dashboard/SeismicPanel";
import { EnergyPanel } from "@/components/dashboard/EnergyPanel";
import { UrbanPanel } from "@/components/dashboard/UrbanPanel";
import { CulturalPanel } from "@/components/dashboard/CulturalPanel";
import { ImpactPanel } from "@/components/dashboard/ImpactPanel";
import { GlobalOverviewPanel } from "@/components/dashboard/GlobalOverviewPanel";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4 lg:p-6 space-y-4 lg:space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-merriweather text-turquoise">Resilient Nexus Dashboard</h1>
        <p className="text-sm md:text-base text-muted-foreground">Monitor and analyze sustainability metrics across our global network</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-min">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <GlobalOverviewPanel />
        </div>
        <div className="col-span-1 md:col-span-2">
          <ImpactPanel />
        </div>
        <TradePanel />
        <WaterPanel />
        <SeismicPanel />
        <EnergyPanel />
        <UrbanPanel />
        <CulturalPanel />
      </div>
    </div>
  );
};

export default Dashboard;