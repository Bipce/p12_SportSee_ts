import { RadialBar, RadialBarChart } from "recharts";
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
    <div className="score-graph">
      <h2 className="score-graph__title">Score</h2>
      <RadialBarChart width={258} height={200} cx={110} innerRadius={100} outerRadius={70} barSize={10}
        // startAngle={100} endAngle={450}
                      data={data}
      >
        {/*<PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />*/}
        <RadialBar dataKey="value" cornerRadius={10} />
      </RadialBarChart>
      <div className="score-graph__text">
        <h3 className="score-graph__text__title">{score * 100}%</h3>
        <p className="score-graph__text__objectif">de votre <br />objectif</p>
      </div>
    </div>
  );
};

export default ScoreGraph;