import axios from "axios";
import { IKeyDataIcon } from "../models/IKeyDataIcon.ts";

export const getKeyDataIcon = async () => {
  const res = await axios.get<IKeyDataIcon[]>("/data/icons.json");
  return res.data;
};