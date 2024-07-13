import React from "react";
import { Bar, BarChart, CartesianGrid, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip.tsx";
import { ISession } from "../models/UserActivity/ISession.ts";

interface IProps {
  sessions: ISession[];
}

const DailyActivityGraph: React.FC<IProps> = ({ sessions }) => {
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

      <BarChart width={730} height={145} data={sessions} barSize={7}>
        <CartesianGrid strokeDasharray="3" vertical={false} horizontalPoints={[5, 74, 140]}
        />
        {/*<XAxis dataKey="name" />*/}
        {/*<YAxis orientation="right" />*/}
        <Tooltip itemStyle={{ width: "560px", height: "63px", backgroundColor: "#E60000", color: "#fff" }}
                 content={<CustomTooltip />} offset={15}
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={5} />
        <Bar dataKey="calories" fill="#E60000" radius={5} />
      </BarChart>
    </div>
  );
};

export default DailyActivityGraph;