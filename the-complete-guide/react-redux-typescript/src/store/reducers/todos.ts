import { ITodo, IFetchTodoList, ActionTypes } from "../actions";

export const todosReducer = (state: ITodo[] = [], action: IFetchTodoList) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
