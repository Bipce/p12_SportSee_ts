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
      <button className="home__btn" onClick={changeIsMock}>{isMock ? "Data Mock " : "Data API"}</button>
      {users.map(user => <Link key={user.id} to={`/user/${user.id}`} className="home__user">{user.name}</Link>)}
    </section>
  );
};

export default Home;