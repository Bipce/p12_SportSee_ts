import React from "react";
import { Line, LineChart, Tooltip, XAxis } from "recharts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

interface IProps {
  averageSessions: IUserAverageSession[];
}

const AverageSessionGraph: React.FC<IProps> = ({ averageSessions }) => {

  if (!averageSessions) return null;

  return (
    <div className="average-session-graph">
      <h2 className="average-session-graph__title">Durée moyenne des sessions</h2>
      <LineChart width={258} height={250} data={averageSessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        {/*<YAxis axisLine={false} tickLine={false} />*/}
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default AverageSessionGraph;