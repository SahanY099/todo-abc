import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, InputBase, Paper } from "@mui/material";

import { createTodo, updateTodo } from "../todo-slice";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.activeItem);
  const isEditing = useSelector((state) => state.todo.editing);

  const [todoText, setTodoText] = useState("");

  const handleTodoCreate = async () => {
    dispatch(createTodo({ text: todoText }));
  };

  const handleTodoUpdate = async () => {
    dispatch(updateTodo({ id: todo.id, data: { text: todoText } }));
  };

  useEffect(() => {
    setTodoText(todo.text);
  }, [isEditing, todo]);

  return (
    <Paper
      sx={{
        display: "flex",
        width: "100%",
        height: "70px",
        mb: (theme) => theme.spacing(4),
      }}
    >
      <InputBase
        sx={{
          ml: 4,
          py: 2,
          flexGrow: 1,
          fontSize: "18px",
          color: "hsl(234, 39%, 85%)",
        }}
        value={todoText}
        placeholder="Create a new todo..."
        inputProps={{ "aria-label": "enter-todo" }}
        onChange={(e) => setTodoText(e.target.value)}
      />

      {isEditing ? (
        <Button sx={{ px: 2 }} onClick={handleTodoUpdate}>
          Update
        </Button>
      ) : (
        <Button sx={{ px: 2 }} onClick={handleTodoCreate}>
          Create
        </Button>
      )}
    </Paper>
  );
};

export default AddTodo;
