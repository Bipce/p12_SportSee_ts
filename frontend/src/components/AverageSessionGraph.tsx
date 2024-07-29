import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { IAverageSession } from "../models/UserAverageSession/IAverageSession.ts";

interface IProps {
  averageSessions: IAverageSession[];
}

const AverageSessionGraph: React.FC<IProps> = ({ averageSessions }) => {

  if (!averageSessions) return null;

  return (
    <div>
      <LineChart width={730} height={250} data={averageSessions}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>

    </div>
  );
};

export default AverageSessionGraph;