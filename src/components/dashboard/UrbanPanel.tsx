import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", greenCover: 30, heatIndex: 45 },
  { month: "Feb", greenCover: 32, heatIndex: 43 },
  { month: "Mar", greenCover: 35, heatIndex: 41 },
  { month: "Apr", greenCover: 38, heatIndex: 38 },
  { month: "May", greenCover: 40, heatIndex: 35 },
];

const config = {
  greenCover: {
    color: "#4CAF50",
  },
  heatIndex: {
    color: "#FF5722",
  },
};

export const UrbanPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Urban Planning Metrics</CardTitle>
      </CardHeader>
      <CardContent>
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
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};