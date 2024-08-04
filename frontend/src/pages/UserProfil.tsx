import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.tsx";
import DailyActivityGraph from "../components/DailyActivityGraph.tsx";
import AverageSessionGraph from "../components/AverageSessionGraph.tsx";
import { APIServiceFactory } from "../services/APIServiceFactory.ts";
import { MockContext } from "../contexts/MockContext.tsx";
import { IUserData } from "../models/User/IUserData.ts";
import { IUserActivityData } from "../models/UserActivity/IUserActivityData.ts";
import { IUserAverageSessionData } from "../models/UserAverageSession/IUserAverageSessionData.ts";

const UserProfil = () => {
  const [user, setUser] = useState<IUserData>();
  const [userActivity, setUserActivity] = useState<IUserActivityData>();
  const [userAverageSession, setUserAverageSession] = useState<IUserAverageSessionData>();

  const { id } = useParams<{ id: string }>();
  const ICON_BASE_PATH = "../../public/data/keyDataIcons";
  const { isMock } = useContext(MockContext);

  useEffect(() => {
    const apiServiceFactory = new APIServiceFactory(isMock);
    const service = apiServiceFactory.get(parseInt(id!));

    (async () => {
      setUser(await service.getUserMainData());
      setUserActivity(await service.getUserActivity());
      setUserAverageSession(await service.getAverageSession());
    })();
  }, [id, isMock]);

  if (!user || !userActivity || !userAverageSession) return null;

  return (
    <section className="user-section">
      <section className="user-section__header">
        <h2 className="user-section__header__name">Bonjour <span
          className="user-section__header__name--color">{user.userInfos.firstName}</span></h2>
        <p className="user-section__header__content">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section className="user-section__content">
        <section className="user-section__content__graphs">
          <DailyActivityGraph activitySessions={userActivity.sessions} />

          <div>
            <AverageSessionGraph averageSessions={userAverageSession.sessions} />
          </div>
        </section>

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
      </section>
    </section>
  );
};

export default UserProfil;