import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Hotel from "../components/Hotel/Hotel";
import HotelDetail from "../components/HotelDetail/HotelDetail";
import Hotels from "../components/Hotels/Hotels";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://travello-server.vercel.app/places"),
      },
      {
        path: "/hotels",
        element: <Hotels></Hotels>,
        loader: () => fetch("https://travello-server.vercel.app/hotels"),
      },
      {
        path: "/hotels/:id",
        element: <Hotel></Hotel>,
        loader: ({params}) => fetch(`https://travello-server.vercel.app/hotels/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);