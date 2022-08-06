import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "./todo-service";

export const createTodo = createAsyncThunk("todo/create", async ({ text }) => {
  const res = await TodoService.create({ text });
  return res;
});

export const retrieveTodos = createAsyncThunk(
  "todo/retrieve",
  async ({ status }) => {
    const res = await TodoService.getAll({ status });
    return res;
  }
);

export const getTodoLeftCount = createAsyncThunk("todo/leftCount", async () => {
  const res = await TodoService.leftCount();
  return res;
});

export const deleteTodo = createAsyncThunk("todo/delete", async ({ id }) => {
  await TodoService.delete(id);
  return { id };
});

export const clearCompletedTodos = createAsyncThunk(
  "todo/clearCompleted",
  async () => {
    const res = await TodoService.clearCompleted();
    return res;
  }
);

export const updateTodo = createAsyncThunk(
  "todo/update",
  async ({ id, data }) => {
    const res = await TodoService.update(id, data);
    return res;
  }
);

export const setTodoCompleted = createAsyncThunk(
  "todo/setTodoCompleted",
  async ({ id }) => {
    const res = await TodoService.complete(id);
    return res;
  }
);

const initialState = {
  activeItem: { text: "" },
  todoList: [],
  leftCount: 0,
  editing: false,
  filter: "",
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editTodo: (state, action) => {
      state.editing = true;
      state.activeItem = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [createTodo.fulfilled]: (state, action) => {
      state.activeItem = { text: "" };
      state.todoList.push(action.payload);
    },
    [retrieveTodos.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [getTodoLeftCount.fulfilled]: (state, action) => {
      state.leftCount = action.payload;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      let index = state.todoList.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.todoList.splice(index, 1);
    },
    [updateTodo.fulfilled]: (state, action) => {
      let index = state.todoList.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.editing = false;
      state.activeItem = { text: "" };
      state.todoList[index] = action.payload;
    },
    [setTodoCompleted.fulfilled]: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index] = {
        ...action.payload,
      };
    },
    [clearCompletedTodos.fulfilled]: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => !action.payload.includes(todo.id)
      );
    },
  },
});

export const { editTodo, setFilter } = counterSlice.actions;

export default counterSlice.reducer;
