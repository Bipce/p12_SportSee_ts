import React from "react";
import { IUserPerformance } from "../models/UserPerformance/IUserPerformance.ts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

interface IProps {
  performance: IUserPerformance;
}

const RadarChartGraph: React.FC<IProps> = ({ performance }) => {
  return (
    <div className="performance-graph">
      <RadarChart outerRadius={80} width={258} height={250} data={performance.data}>
        <PolarGrid radialLines={false} stroke="#fff" />
        <PolarAngleAxis dataKey="kind" tick={{ fill: "#ffffff", fontSize: 12 }} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={.7} />
      </RadarChart>
    </div>
  );
};

export default RadarChartGraph;