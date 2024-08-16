import { RadialBar, RadialBarChart } from "recharts";
import React from "react";

interface IProps {
  score: number;
}

const RadialBartChartGraph: React.FC<IProps> = ({ score }) => {
  const data = [
    {
      "name": "Score",
      "value": score * 100,
      "fill": "#ff0000",
    },
    {
      "name": "Rest",
      "value": 100 - score * 100,
      "fill": "#fff",
    },
  ];

  return (
    <div className="score-graph">
      <h2 className="score-graph__title">Score</h2>
      <RadialBarChart cx={123} innerRadius={95} outerRadius={75} barSize={10} data={data} width={250} height={180}>
        <RadialBar dataKey="value" cornerRadius={10} />
        <circle cx="50%" cy="50%" r="75" fill="white" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={20} fontWeight="bold">12%</text>
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize={14} fill="#888888">
          de votre objectif
        </text>
      </RadialBarChart>
    </div>
  );
};

export default RadialBartChartGraph;