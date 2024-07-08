import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserMainData, getUsersInfos } from "../services/apiCallMock.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserInfos } from "../models/User/IUserInfos.ts";
import Card from "../components/Card.tsx";

const UserProfil = () => {
  const [user, setUser] = useState<IUser>();
  const [userInfos, setUserInfos] = useState<IUserInfos>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      if (typeof id === "string") {
        setUser(await getUserMainData(parseInt(id)));
        setUserInfos(await getUsersInfos(parseInt(id)));
      }
    })();
  }, [id]);

  if (!user || !userInfos) return null;

  return (
    <section>
      <div>
        <h2>Bonjour {userInfos.firstName}</h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div>
        <div className="graphiques">
          <div></div>
          <div></div>
        </div>

        <section>
          <Card userId={user.id} />
        </section>
      </div>
    </section>
  );
};

export default UserProfil;