import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", greenCover: 30, heatIndex: 45, airQuality: 85 },
  { month: "Feb", greenCover: 32, heatIndex: 43, airQuality: 87 },
  { month: "Mar", greenCover: 35, heatIndex: 41, airQuality: 88 },
  { month: "Apr", greenCover: 38, heatIndex: 38, airQuality: 90 },
  { month: "May", greenCover: 40, heatIndex: 35, airQuality: 92 },
];

const config = {
  greenCover: {
    color: "#4CAF50",
  },
  heatIndex: {
    color: "#FF5722",
  },
  airQuality: {
    color: "#2196F3",
  },
};

export const UrbanPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Urban Planning Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-emerald/10 p-2 rounded-lg">
              <p className="text-xs text-muted-foreground">Green Cover</p>
              <p className="text-lg font-bold text-emerald">40%</p>
            </div>
            <div className="bg-coral/10 p-2 rounded-lg">
              <p className="text-xs text-muted-foreground">Heat Index</p>
              <p className="text-lg font-bold text-coral">35°C</p>
            </div>
            <div className="bg-azure/10 p-2 rounded-lg">
              <p className="text-xs text-muted-foreground">Air Quality</p>
              <p className="text-lg font-bold text-azure">92</p>
            </div>
          </div>
          <div className="h-[200px]">
            <ChartContainer config={config}>
              <AreaChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip />
                <Area
                  type="monotone"
                  dataKey="greenCover"
                  name="Green Cover %"
                  fill="var(--color-greenCover)"
                  stroke="var(--color-greenCover)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="heatIndex"
                  name="Heat Index"
                  fill="var(--color-heatIndex)"
                  stroke="var(--color-heatIndex)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="airQuality"
                  name="Air Quality"
                  fill="var(--color-airQuality)"
                  stroke="var(--color-airQuality)"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};