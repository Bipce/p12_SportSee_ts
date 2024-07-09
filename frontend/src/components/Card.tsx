import React from "react";

interface IProps {
  alt: string;
  amount: number;
  icon: string;
  type: string;
  unit: string;
}

const Card: React.FC<IProps> = ({ alt, amount, icon, type, unit }) => {
  return (
    <article>
      <figure>
        <img src={icon} alt={alt} />
        <figcaption>
          <p>{amount}{unit}</p>
          <p>{type}</p>
        </figcaption>
      </figure>
    </article>
  );
};

export default Card;