import React from "react";
import { IUserPerformance } from "../models/UserPerformance/IUserPerformance.ts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

interface IProps {
  performance: IUserPerformance;
}

const PerformanceGraph: React.FC<IProps> = ({ performance }) => {
  return (
    <div className="performance-graph">
      <RadarChart outerRadius={80} width={258} height={250} data={performance.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={.7} />
      </RadarChart>
    </div>
  );
};

export default PerformanceGraph;