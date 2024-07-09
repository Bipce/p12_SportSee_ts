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
    <article className="card">
      <figure className="card__figure">
        <img src={icon} alt={alt} className="card__figure__img" />
        <figcaption className="card__figure__caption">
          <p className="card__figure__caption__amount">{amount}{unit}</p>
          <p className="card__figure__caption__type">{type}</p>
        </figcaption>
      </figure>
    </article>
  );
};

export default Card;