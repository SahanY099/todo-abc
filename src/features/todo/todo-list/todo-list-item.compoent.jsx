import { useDispatch, useSelector } from "react-redux";

import { Typography, Stack, IconButton, Box } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import { editTodo, deleteTodo, setTodoCompleted } from "../todo-slice";

import CustomCheckbox from "./todo-list-item-checkbox.component";

export const TodoListItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const completeTodo = async () => {
    dispatch(setTodoCompleted({ id }));
  };

  const handleDeleteTodo = async () => {
    dispatch(deleteTodo({ id }));
  };

  const setToEdit = () => {
    dispatch(editTodo({ id, text, completed }));
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        height: "70px",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: (theme) => theme.shadows[1],
          borderColor: "hsl(235, 24%, 19%)",
        },
      }}
    >
      <Box
        sx={{
          flexBasis: "90px",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <CustomCheckbox handleOnClick={completeTodo} checked={completed} />
      </Box>
      <Typography
        variant="subtitle1"
        component="span"
        color="initial"
        sx={{ color: "#cacde8" }}
      >
        {text}
      </Typography>
      <Box
        sx={{
          flexBasis: "90px",
          display: "flex",
          ml: "auto",
          justifyContent: "center",
          alignItem: "center",
          color: "white",
          px: 2,
        }}
      >
        <IconButton onClick={handleDeleteTodo}>
          <DeleteOutlineIcon sx={{ fill: "#c058f3" }} />
        </IconButton>
        <IconButton onClick={setToEdit}>
          <EditIcon sx={{ fill: "#55ddff" }} />
        </IconButton>
      </Box>
    </Stack>
  );
};

export const TodoListNoItem = () => {
  const filter = useSelector((state) => state.todo.filter);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        height: "70px",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: (theme) => theme.shadows[1],
          borderColor: "hsl(235, 24%, 19%)",
        },
      }}
    >
      <Box
        sx={{
          flexBasis: "90px",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      />
      <Typography
        variant="subtitle1"
        component="span"
        color="initial"
        sx={{ color: "#cacde8" }}
      >
        No {filter} todos
      </Typography>
    </Stack>
  );
};
