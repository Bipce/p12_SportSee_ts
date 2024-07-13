import { useEffect, useState } from "react";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { getUserActivity } from "../services/apiCallMock.ts";
import { useParams } from "react-router-dom";
import { Bar, BarChart, CartesianGrid } from "recharts";


const DailyActivityGraph = () => {
  const [userActivity, setUserActivity] = useState<IUserActivity>();
  const { id } = useParams<{ id: string }>();


  useEffect(() => {
    (async () => {
      if (typeof id === "string") {
        setUserActivity(await getUserActivity(parseInt(id)));
      }
    })();
  }, [id]);

  if (!userActivity) return null;

  console.log(userActivity.sessions);

  return (
    <BarChart width={730} height={145} data={userActivity.sessions} barSize={7}>
      <CartesianGrid strokeDasharray="3" vertical={false} horizontalPoints={[5, 74, 140]}
      />
      {/*<XAxis dataKey="name" />*/}
      {/*<YAxis orientation="right" />*/}
      {/*<Tooltip />*/}
      <Bar dataKey="kilogram" fill="#282D30" radius={5} />
      <Bar dataKey="calories" fill="#E60000" radius={5} />
    </BarChart>
  );
};

export default DailyActivityGraph;