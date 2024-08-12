import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

interface IProps {
  averageSessions: IUserAverageSession[];
}

const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {

    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const LineChartGraph: React.FC<IProps> = ({ averageSessions }) => {

  if (!averageSessions) return null;

  return (
    <div className="average-session-graph">
      <h2 className="average-session-graph__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={averageSessions}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#fff" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" strokeWidth={2} stroke="#fff" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartGraph;
