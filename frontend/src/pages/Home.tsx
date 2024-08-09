import { useContext, useEffect, useState } from "react";
import { getUsersMainData } from "../services/users.ts";
import { Link } from "react-router-dom";
import { MockContext } from "../contexts/MockContext.tsx";
import IUserHome from "../models/User/IUserHome.ts";

const Home = () => {
  const [users, setUsers] = useState<IUserHome[]>();
  const { changeIsMock, isMock } = useContext(MockContext);

  useEffect(() => {
    (async () => {
      setUsers(await getUsersMainData());
    })();
  }, []);

  if (!users) return null;

  return (
    <section className="home">
      <div className="home__content">
        <h2 className="home__content__title">Choisissez si vous voulez utiliser les datas API ou les datas Mocks.</h2>
        <button className="home__btn" onClick={changeIsMock}>Choisir Datas</button>
        <p>Vous utilisez les datas {isMock ?
          <span className="home__content__text">Mock</span> :
          <span className="home__content__text">API</span>}.</p>
      </div>

      <div className="home__content">
        <h2 className="home__content__title">Choisissez le user que vous voulez être.</h2>
        <div>
          {users.map(user =>
            <Link key={user.id} to={`/user/${user.id}`} className="home__btn">{user.name}</Link>)}
        </div>
      </div>
    </section>
  );
};

export default Home;