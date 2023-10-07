import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },{
        path: '/gallery',
        element: <Gallery></Gallery>
      },{
        path: '/about',
        element: <About></About>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])

export default router;