import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/home-page";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage/restaurant-details-page";
import AddRestaurantPage from "./pages/AddRestaurantPage/add-restaurant-page";
import EditRestaurantPage from "./pages/EditRestaurantPage/edit-restaurant-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantDetailsPage />,
  },
  {
    path: "/add",
    element: <AddRestaurantPage />,
  },
  {
    path: "/edit/:id",
    element: <EditRestaurantPage />,
  },
]);
