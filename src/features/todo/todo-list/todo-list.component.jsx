import { useEffect } from "react";
import { Divider, Stack, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { TodoListToolbar } from "./todo-list-toolbar.component";
import { TodoListItem, TodoListNoItem } from "./todo-list-item.compoent";

import { retrieveTodos } from "../todo-slice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(retrieveTodos());
  });

  return (
    <>
      <Paper elevation={3}>
        <Stack divider={<Divider light={true} />}>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <TodoListItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                />
              );
            })
          ) : (
            <TodoListNoItem />
          )}
        </Stack>
        <Divider />
        <TodoListToolbar />
      </Paper>
    </>
  );
};

export default TodoList;
