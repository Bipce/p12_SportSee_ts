import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import React from "react";

interface IProps {
  score: number;
}

const ScoreGraph: React.FC<IProps> = ({ score }) => {

  const data = [
    {
      "name": "Score",
      "value": score,
      "fill": "#fff",
    },
    {
      "name": "Rest",
      "value": 100 - score,
      "fill": "#f0f0f0",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#FBFBFB",
        width: "258px",
      }}>

      <h3>Score</h3>
      <RadialBarChart
        width={258}
        height={200}
        cx={100}
        cy={100}
        innerRadius={70}
        outerRadius={80}
        barSize={10}
        startAngle={90}
        endAngle={450}
        data={data}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="value"
          cornerRadius={10}
        />
      </RadialBarChart>
      <div style={{ marginTop: "-120px" }}>
        <h2>{score * 100}%</h2>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default ScoreGraph;