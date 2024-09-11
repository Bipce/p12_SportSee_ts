import React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CustomTooltip from "./CustomTooltip.tsx";
import { IUserActivitySession } from "../models/UserActivity/IUserActivitySession.ts";

interface IProps {
  activitySessions: IUserActivitySession[];
}

const BarChartGraph: React.FC<IProps> = ({ activitySessions }) => {
  const dayNumber = (date: Date) => {
    const dayNumber = new Date(date);
    return dayNumber.getDate().toString();
  };

  if (!activitySessions) return null;

  return (
    <div className="content">
      <div className="content__text">
        <h2 className="content__text__title">Activité quotidienne</h2>
        <p className="content__text__legend">
          <span className="content__text__legend__marker"></span>Poids (kg)
        </p>
        <p className="content__text__legend">
          <span className="content__text__legend__marker content__text__legend__marker--color"></span>
          Calories brûlées (kCal)</p>
      </div>
      <ResponsiveContainer height={145} width="100%">
        <BarChart data={activitySessions} barSize={7}>
          <CartesianGrid strokeDasharray="3" vertical={false}
          />
          <XAxis dataKey="day" tickLine={false} tickFormatter={dayNumber} fill="#DEDEDE" />
          <YAxis orientation="right" dataKey="kilogram" tickLine={false} domain={["dataMin - 7", "dataMax + 3"]}
                 axisLine={false} yAxisId="right" />
          <YAxis orientation="left" dataKey="calories" tickLine={false} domain={[0, "dataMax+20"]} hide={true} />
          <Tooltip content={<CustomTooltip />} offset={15}
          />
          <Bar dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartGraph;