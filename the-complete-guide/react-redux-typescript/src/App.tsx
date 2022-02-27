import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { StoreState } from "./store/reducers";
import { fetchTodoList, ITodo } from "./store/actions";

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: StoreState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div>
      {todoList.map((item: ITodo) => (
        <div
          key={item.id}
          style={{
            padding: "20px",
            margin: "20px",
            cursor: "pointer",
            background: "blueViolet",
            color: "white",
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default App;
