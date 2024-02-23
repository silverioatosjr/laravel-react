import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/login",
    element:<LoginPage/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
