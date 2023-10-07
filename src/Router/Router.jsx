import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

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
      },{
        path: '/serviceDetails/:id',
        loader: ()=> fetch('../serviceData.json'),
        element: <ServiceDetails></ServiceDetails>
      }
    ]
  }
])

export default router;