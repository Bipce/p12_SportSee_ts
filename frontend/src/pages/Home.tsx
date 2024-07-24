import { useContext, useEffect, useState } from "react";
import { getUsersMainData } from "../services/apiCallMock.ts";
import { Link } from "react-router-dom";
import IUserHome from "../models/User/IUserHome.ts";
import { UserContext } from "../contexts/UserContext.tsx";

const Home = () => {
  const [users, setUsers] = useState<IUserHome[]>();
  const userContext = useContext(UserContext);

  useEffect(() => {
    (async () => {
      setUsers(await getUsersMainData());
    })();
  }, []);

  if (!users) return null;

  return (
    <section className="home">
      <button className="home__btn" onClick={userContext.changeIsMock}>Mock</button>
      {users.map(user => <Link key={user.id} to={`/user/${user.id}`} className="home__user">{user.name}</Link>)}
    </section>
  );
};

export default Home;