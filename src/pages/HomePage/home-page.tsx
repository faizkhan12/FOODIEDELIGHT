import { useEffect, useState } from "react";
import { Restaurant } from "../../types";
import { deleteRestaurant, fetchRestaurants } from "../../services/apiService";
import { Link } from "react-router-dom";
import RestaurantList from "../../components/RestaurantList/restaurant-list";
import style from "./home-page.module.scss";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 4;

  useEffect(() => {
    fetchRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []);

  const handleDelete = (id: number) => {
    deleteRestaurant(id).then(() => {
      setRestaurants((prev) =>
        prev.filter((restaurant) => restaurant.id !== id)
      );
    });
  };
  const totalPages = Math.ceil(restaurants.length / restaurantsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.homePage}>
      <div className={style.header}>
        <h1>FOODIE DELIGHT DASHBOARD </h1>
        <Link to="/add">Add New Restaurant</Link>
      </div>
      <div className={style.body}>
        <RestaurantList
          restaurants={restaurants}
          onDelete={handleDelete}
          currentPage={currentPage}
          restaurantsPerPage={restaurantsPerPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
