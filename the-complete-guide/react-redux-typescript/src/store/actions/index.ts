import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<ITodo[]>(url);
  console.log(response);
  dispatch({
    type: ActionTypes.fetchTodos,
    payload: response.data,
  });
};
