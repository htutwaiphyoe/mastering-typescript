import axios from "axios";
import { Dispatch } from "redux";

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
    type: "FETCH_TODOS",
    payload: response.data,
  });
};
