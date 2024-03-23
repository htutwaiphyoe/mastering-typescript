import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodoList {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

export interface IDeleteTodo {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodoList = () => async (dispatch: Dispatch) => {
  const response = await axios.get<ITodo[]>(url);

  dispatch<IFetchTodoList>({
    type: ActionTypes.fetchTodos,
    payload: response.data,
  });
};

export const deleteTodo = (id: number): IDeleteTodo => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});
