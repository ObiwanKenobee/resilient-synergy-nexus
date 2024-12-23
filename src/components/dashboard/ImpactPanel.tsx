import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const data = [
  { subject: "Economic", A: 120, B: 110, fullMark: 150 },
  { subject: "Environmental", A: 98, B: 130, fullMark: 150 },
  { subject: "Cultural", A: 86, B: 130, fullMark: 150 },
  { subject: "Energy", A: 99, B: 100, fullMark: 150 },
  { subject: "Infrastructure", A: 85, B: 90, fullMark: 150 },
  { subject: "Innovation", A: 65, B: 85, fullMark: 150 },
  { subject: "Resilience", A: 90, B: 100, fullMark: 150 },
];

const config = {
  current: {
    color: "#FF9800",
  },
  target: {
    color: "#2196F3",
  },
};

export const ImpactPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Impact Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={config}>
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Current"
                dataKey="A"
                stroke="var(--color-current)"
                fill="var(--color-current)"
                fillOpacity={0.6}
              />
              <Radar
                name="Target"
                dataKey="B"
                stroke="var(--color-target)"
                fill="var(--color-target)"
                fillOpacity={0.6}
              />
              <ChartTooltip />
            </RadarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};