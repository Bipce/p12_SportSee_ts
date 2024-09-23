import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";
import { CustomCursorProps } from "../models/CustomCursorProps.ts";

interface IProps {
  averageSessions: IUserAverageSession[];
}

const LineChartGraph: React.FC<IProps> = ({ averageSessions }) => {
  const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {

      return (
        <div className="average-session-graph__custom-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomCursor: React.FC<CustomCursorProps> = ({ points, width }) => {
    if (!points) return null;

    const { x } = points[0];

    return (
      <rect fill="#730000" opacity="0.2" x={x} y={0} width={width} height={270} />
    );
  };

  if (!averageSessions) return null;

  return (
    <div className="average-session-graph">
      <ResponsiveContainer height={245} width="100%">
        <LineChart data={averageSessions}>
          <text x="35%" y="10%" textAnchor="middle" dominantBaseline="middle" fontSize={15} fill="#fff" opacity=".5">
            Durée moyenne des
          </text>
          <text x="20%" y="20%" textAnchor="middle" dominantBaseline="middle" fontSize={15} fill="#fff"
                opacity=".5">sessions
          </text>
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#fff" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line type="monotone" dataKey="sessionLength" strokeWidth={2} stroke="#fff" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartGraph;