import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AddPlant from "../Pages/AddPlant/AddPlant";
import AllPlants from "../Pages/AllPlants/AllPlants";
import MyPlants from "../Pages/MyPlants/MyPlants";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdatePlants from "../Pages/UpadePlants/UpdatePlants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "/logIn",
        Component: LogIn,
      },

      {
        path: "allPlants",
        Component: AllPlants,
        loader: () =>
          fetch("https://plant-tracker-server-umber.vercel.app/plants"),
        hydrateFallbackElement: (
          <div className=" flex items-center justify-center h-screen ">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "addPlant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
      {
        path: "myPlants",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://plant-tracker-server-umber.vercel.app/plants/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className=" flex items-center justify-center h-screen ">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "updatePlants/:id",
        element: (
          <PrivateRoute>
            <UpdatePlants></UpdatePlants>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://plant-tracker-server-umber.vercel.app/plants/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className=" flex items-center justify-center h-screen ">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
    ],
  },
]);
