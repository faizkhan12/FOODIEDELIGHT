import { Restaurant } from "../../types";
import RestaurantItem from "../RestaurantItem/restaurant-item";
import style from "./restaurant-list.module.scss";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onDelete: (id: number) => void;
  currentPage: number;
  restaurantsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const RestaurantList = ({
  restaurants,
  onDelete,
  currentPage,
  restaurantsPerPage,
  totalPages,
  onPageChange,
}: RestaurantListProps) => {
  const startIndex = (currentPage - 1) * restaurantsPerPage;
  const currentRestaurants = restaurants.slice(
    startIndex,
    startIndex + restaurantsPerPage
  );

  return (
    <div className={style.restaurantList}>
      {restaurants.length > 0 ? (
        <h2>Restaurants</h2>
      ) : (
        <h2>No Restaurants Found </h2>
      )}
      <div className={style.card}>
        {currentRestaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onDelete={onDelete}
          />
        ))}
      </div>
      {/* PAGINATION */}
      <div className={style.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={currentPage === index + 1 ? style.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
