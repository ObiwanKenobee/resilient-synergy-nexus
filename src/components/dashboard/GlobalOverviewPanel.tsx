import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", resilience: 85, sustainability: 78 },
  { month: "Feb", resilience: 88, sustainability: 82 },
  { month: "Mar", resilience: 87, sustainability: 85 },
  { month: "Apr", resilience: 90, sustainability: 88 },
  { month: "May", resilience: 92, sustainability: 90 },
];

const config = {
  resilience: {
    color: "#1B4965",
  },
  sustainability: {
    color: "#4CAF50",
  },
};

export const GlobalOverviewPanel = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Global Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-sandstone/10 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Global Resilience Index</p>
              <p className="text-2xl font-bold text-turquoise">92.5</p>
            </div>
            <div className="bg-emerald/10 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Sustainability Score</p>
              <p className="text-2xl font-bold text-emerald">90.0</p>
            </div>
          </div>
          <div className="h-[200px]">
            <ChartContainer config={config}>
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip />
                <Line
                  type="monotone"
                  dataKey="resilience"
                  name="Resilience"
                  stroke="var(--color-resilience)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="sustainability"
                  name="Sustainability"
                  stroke="var(--color-sustainability)"
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};