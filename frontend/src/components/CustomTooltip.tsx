import React from "react";
import { TooltipProps } from "recharts";

const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip tooltip">
        <p className="intro tooltip__text">{payload[0].value}kg</p>
        <p className="desc">{payload[1].value}kCal</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;