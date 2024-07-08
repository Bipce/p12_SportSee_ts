import { useEffect, useState } from "react";
import { getUsersMainData } from "../services/apiCallMock.ts";
import { IUser } from "../models/User/IUser.ts";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      setUsers(await getUsersMainData());
    })();
  }, []);

  if (!users) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {users.map(user => <Link key={user.id} to={`/user/${user.id}`} style={{ color: "black" }}>{user.id}</Link>)}
    </div>
  );
};

export default Home;