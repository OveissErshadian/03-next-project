import axios from "axios"
import { IUser } from "../types/IUser";

export const getUsers = async():Promise<IUser[]> =>{
    const res = await axios.get("https://66e697a717055714e589f9b8.mockapi.io/persons")
    return res.data;
}