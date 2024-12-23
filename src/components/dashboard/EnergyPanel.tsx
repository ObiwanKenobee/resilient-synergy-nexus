import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Solar", value: 400 },
  { name: "Wind", value: 300 },
  { name: "Hydro", value: 200 },
  { name: "Other", value: 100 },
];

const config = {
  solar: { color: "#E6C9A8" },
  wind: { color: "#1B4965" },
  hydro: { color: "#C84B31" },
  other: { color: "#666666" },
};

export const EnergyPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Energy Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer config={config}>
            <PieChart>
              <ChartTooltip />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={Object.values(config)[index].color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};