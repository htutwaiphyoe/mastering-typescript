import { IFetchTodoList, IDeleteTodo } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = IFetchTodoList | IDeleteTodo;
