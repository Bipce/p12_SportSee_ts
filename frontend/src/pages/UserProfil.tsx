import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserMainData, getUsersInfos } from "../services/apiCallMock.ts";
import Card from "../components/Card.tsx";
import { IUser } from "../models/User/IUser.ts";
import { IUserInfos } from "../models/User/IUserInfos.ts";

const UserProfil = () => {
  const [user, setUser] = useState<IUser>();
  const [userInfos, setUserInfos] = useState<IUserInfos>();
  const { id } = useParams<{ id: string }>();
  const ICON_PATH = "../../public/data/keyDataIcons";

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
          <Card alt="Icon pour les calories, feu rouge" amount={user.keyData.calorieCount}
                icon={`${ICON_PATH}/calories-icon.png`} type="Protéines" unit="kCal" />
          <Card alt="Icon pour les protéines, cuisse de poulet bleu" amount={user.keyData.proteinCount}
                icon={`${ICON_PATH}/protein-icon.png`} type="Calories" unit="g" />
          <Card alt="Icon pour les glucides, pomme jaune" amount={user.keyData.carbohydrateCount}
                icon={`${ICON_PATH}/carbs-icon.png`} type="Glucides" unit="g" />
          <Card alt="Icon pour les lipides, hamburger rose" amount={user.keyData.lipidCount}
                icon={`${ICON_PATH}/fat-icon.png`} type="Lipides" unit="g" />
        </section>
      </div>
    </section>
  );
};

export default UserProfil;