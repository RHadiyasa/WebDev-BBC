import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CounterPage from "./pages/counter/CounterPage";
import TodoListPage from "./pages/todo-list/TodoListPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<ProfilePage />} path="/profile-page" />
      <Route element={<CounterPage />} path="/counter" />
      <Route element={<TodoListPage />} path="/todolist" />
    </Routes>
  );
}

export default App;
