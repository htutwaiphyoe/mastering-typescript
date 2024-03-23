import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { ITodo } from "../actions";

export interface StoreState {
  todos: ITodo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
