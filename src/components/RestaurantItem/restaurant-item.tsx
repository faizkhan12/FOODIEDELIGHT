import { Link } from "react-router-dom";
import { Restaurant } from "../../types";
import style from "./restaurant-item.module.scss";

interface RestaurantItemProps {
  restaurant: Restaurant;
  onDelete: (id: number) => void;
}
const RestaurantItem = ({ restaurant, onDelete }: RestaurantItemProps) => {
  return (
    <div className={style["restaurant-card"]}>
      <img src={restaurant.image} alt={restaurant?.name} />
      <div className={style.content}>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.location}</p>
        <p>{restaurant.contact}</p>
        <p className={style.rating}>Rating: {restaurant.rating} / 5</p>
        <div className={style.actions}>
          <button onClick={() => onDelete(restaurant.id)}>Delete</button>
          <Link to={`/edit/${restaurant.id}`}>Edit details</Link>
        </div>
        <Link className={style.detailsBtn} to={`/restaurant/${restaurant.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RestaurantItem;
