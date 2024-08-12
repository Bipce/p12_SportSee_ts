import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.tsx";
import BarChartGraph from "../components/BarChartGraph.tsx";
import LineChartGraph from "../components/LineChartGraph.tsx";
import RadarChartGraph from "../components/RadarChartGraph.tsx";
import RadialBartChartGraph from "../components/RadialBartChartGraph.tsx";
import { APIServiceFactory } from "../services/APIServiceFactory.ts";
import {
  userRequestToDto, userActivityRequestToDto, userAverageSessionRequestToDto, userPerformanceRequestToDto,
} from "../utils/requestsDto.ts";
import { MockContext } from "../contexts/MockContext.tsx";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivitySession } from "../models/UserActivity/IUserActivitySession.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";
import { IUserPerformance } from "../models/UserPerformance/IUserPerformance.ts";

const UserProfil = () => {
  const [user, setUser] = useState<IUser>();
  const [userActivitySessions, setUserActivitySessions] = useState<IUserActivitySession[]>();
  const [userAverageSessions, setUserAverageSessions] = useState<IUserAverageSession[]>();
  const [userPerformance, setUserPerformance] = useState<IUserPerformance>();
  const userScore = user?.todayScore ? user.todayScore : user?.score;

  const { id } = useParams<{ id: string }>();
  const ICON_BASE_PATH = "../../public/data/keyDataIcons";
  const { isMock } = useContext(MockContext);

  useEffect(() => {
    const apiServiceFactory = new APIServiceFactory(isMock);
    const service = apiServiceFactory.get(parseInt(id!));

    (async () => {
      const userRequest = await service.getUserMainData();
      setUser(userRequestToDto(userRequest));

      const userActivityRequest = await service.getUserActivity();
      setUserActivitySessions(userActivityRequestToDto(userActivityRequest));

      const userAverageSession = await service.getAverageSession();
      setUserAverageSessions(userAverageSessionRequestToDto(userAverageSession));

      const userPerformanceRequest = await service.getPerformance();
      setUserPerformance(userPerformanceRequestToDto(userPerformanceRequest));

    })();
  }, [id, isMock]);

  if (!user || !userActivitySessions || !userAverageSessions || !userPerformance || !userScore) return null;

  return (
    <section className="user-section">
      <section className="user-section__header">
        <h2 className="user-section__header__name">Bonjour <span
          className="user-section__header__name--color">{user.userInfos.firstName}</span></h2>
        <p className="user-section__header__content">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section className="user-section__content">
        <section className="user-section__content__graphs">
          <BarChartGraph activitySessions={userActivitySessions} />

          <section className="user-section__content__graphs__bottom">
            <LineChartGraph averageSessions={userAverageSessions} />
            <RadarChartGraph performance={userPerformance} />
            <RadialBartChartGraph score={userScore} />
          </section>
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