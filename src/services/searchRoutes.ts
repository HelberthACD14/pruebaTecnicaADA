import axios from "./Axios";
import { AxiosResponse } from "axios";

export const getUsers = async (search:string): Promise<AxiosResponse<undefined>> =>
  await axios.get("/search/users?q=" + search);

export const getUserInfo = async (username:string): Promise<AxiosResponse<undefined>> =>
  await axios.get("/users/" + username);