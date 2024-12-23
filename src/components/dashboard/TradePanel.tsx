import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", volume: 4000 },
  { month: "Feb", volume: 3000 },
  { month: "Mar", volume: 5000 },
  { month: "Apr", volume: 4500 },
  { month: "May", volume: 6000 },
];

const config = {
  trade: {
    color: "#1B4965",
  },
};

export const TradePanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Trade Network Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer config={config}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip />
              <Line
                type="monotone"
                dataKey="volume"
                name="trade"
                stroke="var(--color-trade)"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};