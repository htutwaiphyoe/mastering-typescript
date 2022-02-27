import { ITodo, ActionTypes, Action } from "../actions";

export const todosReducer = (state: ITodo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: ITodo) => todo.id !== action.payload);
    default:
      return state;
  }
};
