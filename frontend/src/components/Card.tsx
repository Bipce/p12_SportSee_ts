import { useEffect, useState } from "react";
import { getUserKeyData } from "../services/apiCallMock.ts";
import { getKeyDataIcon } from "../services/getKeyDataIcons.ts";
import { IUserKeyData } from "../models/User/IUserKeyData.ts";
import { IKeyDataIcon } from "../models/IKeyDataIcon.ts";

interface IProps {
  userId: number;
}

const Card = ({ userId }: IProps) => {
  const [userKeyData, setUserKeyData] = useState<IUserKeyData>();
  const [icons, setIcons] = useState<IKeyDataIcon[]>();

  useEffect(() => {
    (async () => {
      setUserKeyData(await getUserKeyData(userId));
      setIcons(await getKeyDataIcon());
    })();
  }, [userId]);

  if (!userKeyData || !icons) return null;

  return (
    <>
      {icons.map(icon => (
        <article key={icon.id}>
          <figure>
            <img src={icon.path} alt={icon.alt} />
            <figcaption>
              <p>{icon.amount}{icon.unit}</p>
              <p>{icon.type}</p>
            </figcaption>
          </figure>
        </article>
      ))}
    </>
  );
};

export default Card;