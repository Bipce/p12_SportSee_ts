import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
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
      <ResponsiveContainer height={230} width="100%">
        <RadialBarChart cx="50%" innerRadius={95} outerRadius={65} barSize={10} data={data}>
          <RadialBar dataKey="value" cornerRadius={10} />
          <circle cx="50%" cy="50%" r="75" fill="#fff" />
          <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" fontSize={20} fontWeight="bold">
            12%
          </text>
          <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fontSize={14} fill="#888888">
            de votre
          </text>
          <text x="50%" y="67%" textAnchor="middle" dominantBaseline="middle" fontSize={14} fill="#888888">
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBartChartGraph;