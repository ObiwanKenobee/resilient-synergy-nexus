import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { region: "North", consumption: 3000, generation: 4000 },
  { region: "South", consumption: 2000, generation: 3000 },
  { region: "East", consumption: 4000, generation: 3500 },
  { region: "West", consumption: 2780, generation: 3000 },
];

const config = {
  consumption: {
    color: "#C84B31",
  },
  generation: {
    color: "#1B4965",
  },
};

export const WaterPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Water Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer config={config}>
            <BarChart data={data}>
              <XAxis dataKey="region" />
              <YAxis />
              <ChartTooltip />
              <Bar dataKey="consumption" name="consumption" fill="var(--color-consumption)" />
              <Bar dataKey="generation" name="generation" fill="var(--color-generation)" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};