import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { region: "North", archives: 2400, engagement: 4000 },
  { region: "South", archives: 1398, engagement: 3000 },
  { region: "East", archives: 9800, engagement: 2000 },
  { region: "West", archives: 3908, engagement: 2780 },
];

const config = {
  archives: {
    color: "#9C27B0",
  },
  engagement: {
    color: "#3F51B5",
  },
};

export const CulturalPanel = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Cultural Preservation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer config={config}>
            <BarChart data={data}>
              <XAxis dataKey="region" />
              <YAxis />
              <ChartTooltip />
              <Bar dataKey="archives" name="Archives" fill="var(--color-archives)" />
              <Bar dataKey="engagement" name="Engagement" fill="var(--color-engagement)" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};