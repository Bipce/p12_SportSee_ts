import React from "react";
import { IUserPerformance } from "../models/UserPerformance/IUserPerformance.ts";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

interface IProps {
  performance: IUserPerformance;
}

const RadarChartGraph: React.FC<IProps> = ({ performance }) => {
  return (
    <div className="performance-graph">
      <ResponsiveContainer height={230} width="100%">
        <RadarChart outerRadius={80} data={performance.data}>
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis dataKey="kind" tick={{ fill: "#ffffff", fontSize: 10 }} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartGraph;