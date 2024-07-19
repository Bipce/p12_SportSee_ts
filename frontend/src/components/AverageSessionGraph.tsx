import React from "react";
import { IAverageSession } from "../models/UserAverageSession/IAverageSession.ts";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

interface IProps {
  averageSession: IAverageSession[];
}

const AverageSessionGraph: React.FC<IProps> = ({ averageSession }) => {
  
  return (
    <div>
      <LineChart width={730} height={250} data={averageSession}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="stepAfter" dataKey="sessionLenght" stroke="#8884d8" />
        <Line type="stepAfter" dataKey="day" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default AverageSessionGraph;