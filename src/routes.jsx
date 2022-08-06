import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import { Todo, Login, Register } from "./pages";

const BaseRouter = () => (
  <Routes>
    <Route path="/" element={<Todo />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default BaseRouter;
