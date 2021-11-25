import axios from "./Axios";
import { AxiosResponse } from "axios";
import { Response } from "@/interfaces/Response"

export const getUsers = async (search:string): Promise<AxiosResponse<Response[]>> =>
  await axios.get("/search/users?page=1&per_page=10&q=Helber" + search);

export const getUserInfo = async (username:string): Promise<AxiosResponse<undefined>> =>
  await axios.get("/users/" + username);