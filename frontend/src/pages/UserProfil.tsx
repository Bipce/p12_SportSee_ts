import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserMainData } from "../services/apiCallMock.ts";
import Card from "../components/Card.tsx";
import { IUser } from "../models/User/IUser.ts";

const UserProfil = () => {
  const [user, setUser] = useState<IUser>();
  const { id } = useParams<{ id: string }>();
  const ICON_BASE_PATH = "../../public/data/keyDataIcons";

  useEffect(() => {
    (async () => {
      if (typeof id === "string") {
        setUser(await getUserMainData(parseInt(id)));
      }
    })();
  }, [id]);

  if (!user) return null;

  return (
    <section className="user-section">
      <div className="user-section__header">
        <h2 className="user-section__header__name">Bonjour <span
          className="user-section__header__name--color">{user.userInfos.firstName}</span></h2>
        <p className="user-section__header__content">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="user-section__content">
        <div className="user-section__content__graphs">
          <div>test</div>
          <div>test</div>
        </div>

        <section className="user-section__content__cards">
          <Card alt="Icon pour les calories, feu rouge" amount={user.keyData.calorieCount}
                icon={`${ICON_BASE_PATH}/calories-icon.png`} type="Protéines" unit="kCal" />
          <Card alt="Icon pour les protéines, cuisse de poulet bleu" amount={user.keyData.proteinCount}
                icon={`${ICON_BASE_PATH}/protein-icon.png`} type="Calories" unit="g" />
          <Card alt="Icon pour les glucides, pomme jaune" amount={user.keyData.carbohydrateCount}
                icon={`${ICON_BASE_PATH}/carbs-icon.png`} type="Glucides" unit="g" />
          <Card alt="Icon pour les lipides, hamburger rose" amount={user.keyData.lipidCount}
                icon={`${ICON_BASE_PATH}/fat-icon.png`} type="Lipides" unit="g" />
        </section>
      </div>
    </section>
  );
};

export default UserProfil;