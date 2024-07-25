import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.tsx";
import Card from "../components/Card.tsx";
import DailyActivityGraph from "../components/DailyActivityGraph.tsx";
import AverageSessionGraph from "../components/AverageSessionGraph.tsx";

const UserProfil = () => {
  const { id } = useParams<{ id: string }>();
  const ICON_BASE_PATH = "../../public/data/keyDataIcons";
  const { loadUser, user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (typeof id === "string") {
        await loadUser(parseInt(id));
      }
    })();
  }, [id, loadUser]);

  if (!user) return null;

  return (
    <section className="user-section">
      <section className="user-section__header">
        <h2 className="user-section__header__name">Bonjour <span
          className="user-section__header__name--color">{user.data.userInfos.firstName}</span></h2>
        <p className="user-section__header__content">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section className="user-section__content">
        <div className="user-section__content__graphs">
          <DailyActivityGraph />

          <div>
            <AverageSessionGraph />
          </div>
        </div>

        <section className="user-section__content__cards">
          <Card alt="Icon pour les calories, feu rouge" amount={user.data.keyData.calorieCount}
                icon={`${ICON_BASE_PATH}/calories-icon.png`} type="Protéines" unit="kCal" />
          <Card alt="Icon pour les protéines, cuisse de poulet bleu" amount={user.data.keyData.proteinCount}
                icon={`${ICON_BASE_PATH}/protein-icon.png`} type="Calories" unit="g" />
          <Card alt="Icon pour les glucides, pomme jaune" amount={user.data.keyData.carbohydrateCount}
                icon={`${ICON_BASE_PATH}/carbs-icon.png`} type="Glucides" unit="g" />
          <Card alt="Icon pour les lipides, hamburger rose" amount={user.data.keyData.lipidCount}
                icon={`${ICON_BASE_PATH}/fat-icon.png`} type="Lipides" unit="g" />
        </section>
      </section>
    </section>
  );
};

export default UserProfil;