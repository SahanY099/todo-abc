import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Paper, Stack } from "@mui/material";

import {
  getTodoLeftCount,
  retrieveTodos,
  clearCompletedTodos,
  setFilter,
} from "../todo-slice";

export const TodoListToolbar = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todo.filter);
  const todos = useSelector((state) => state.todo.todoList);
  const leftCount = useSelector((state) => state.todo.leftCount);

  useEffect(() => {
    dispatch(getTodoLeftCount());
  }, [todos]);

  useEffect(() => {
    dispatch(retrieveTodos({ status: filter }));
  }, [filter]);

  return (
    <Paper
      sx={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        px: 4,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Button variant="text" onClick={() => dispatch(setFilter("active"))}>
          {leftCount} Items Left
        </Button>
        <Stack direction="row">
          <Button variant="text" onClick={() => dispatch(setFilter(""))}>
            All
          </Button>
          <Button variant="text" onClick={() => dispatch(setFilter("active"))}>
            Active
          </Button>
          <Button
            variant="text"
            onClick={() => dispatch(setFilter("completed"))}
          >
            Completed
          </Button>
        </Stack>
        <Button variant="text" onClick={() => dispatch(clearCompletedTodos())}>
          Clear Completed
        </Button>
      </Stack>
    </Paper>
  );
};
