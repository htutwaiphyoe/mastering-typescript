import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface IFetchTodoList {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodoList = () => async (dispatch: Dispatch) => {
  const response = await axios.get<ITodo[]>(url);
  console.log(response);
  dispatch<IFetchTodoList>({
    type: ActionTypes.fetchTodos,
    payload: response.data,
  });
};
