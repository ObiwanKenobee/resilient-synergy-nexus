import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", activity: 0.2 },
  { time: "04:00", activity: 0.3 },
  { time: "08:00", activity: 0.1 },
  { time: "12:00", activity: 0.4 },
  { time: "16:00", activity: 0.2 },
  { time: "20:00", activity: 0.3 },
];

const config = {
  seismic: {
    color: "#E6C9A8",
  },
};

export const SeismicPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Seismic Activity Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer config={config}>
            <AreaChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="activity"
                name="seismic"
                fill="var(--color-seismic)"
                stroke="var(--color-seismic)"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};