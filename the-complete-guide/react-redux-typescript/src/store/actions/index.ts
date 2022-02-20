import axios from "axios";
import { Dispatch } from "redux";

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get(url);
  console.log(response);
  dispatch({
    type: "FETCH_TODOS",
    payload: response.data.data,
  });
};
