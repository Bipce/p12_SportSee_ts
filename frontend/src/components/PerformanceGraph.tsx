import React from "react";
import { IUserPerformance } from "../models/UserPerformance/IUserPerformance.ts";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

interface IProps {
  performance: IUserPerformance;
}

const PerformanceGraph: React.FC<IProps> = ({ performance }) => {

  return (
    <RadarChart outerRadius={100} width={258} height={250} data={performance.data}
                style={{ backgroundColor: "#282D30" }}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis domain={[0, 150]} />
      <Radar dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={.7} />
    </RadarChart>
  );
};

export default PerformanceGraph;