import Home from "../pages/Home";
import CreatePages from "../pages/CreatePages";
import EditPages from "../pages/EditPages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/edit", element: <EditPages /> },
  { path: "/create", element: <CreatePages /> },
]);
