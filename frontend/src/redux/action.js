import { ADD_USER } from "./actionType";
import axios from "axios";

export const addUser = (myData) => async (dispatch) =>{
    try {
       const {data} =  await axios.post("http://localhost:4500/user/add",myData);
        return{
            type:ADD_USER,
            payload:data
        }
    } catch (error) {
        console.log(error)
    }
}