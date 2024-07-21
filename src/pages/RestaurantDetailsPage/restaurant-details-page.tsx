import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRestaurantById } from "../../services/apiService";
import { Restaurant } from "../../types";
import style from "./restaurant-details-page.module.scss";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(
    undefined
  );
  const navigate = useNavigate();
  useEffect(() => {
    fetchRestaurantById(Number(id)).then((data) => {
      setRestaurant(data);
    });
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className={style.restaurantDetails}>
      <button onClick={() => navigate(-1)} className={style.backBtn}>
        &#x2190;Back
      </button>
      <div className={style.card}>
        <div className={style.row}>
          <div className={style.col}>
            <h2>{restaurant.name}</h2>
            <img src={restaurant.image} alt={restaurant.name} />
            <p>{restaurant.description}</p>
          </div>

          <div className={style.col}>
            <p>
              <strong>Address:</strong> {restaurant.location}
            </p>
            <p>
              <strong>Contact No:</strong> {restaurant?.contact}
            </p>
            <p>
              <strong>Rating:</strong> {restaurant?.rating} / 5
            </p>
            <p>
              <strong>Email:</strong> {restaurant?.email}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a target="_blank" href={restaurant?.website}>
                {restaurant?.website}
              </a>
            </p>

            <p>
              <strong>Time:</strong> {restaurant?.openingHours}
            </p>
            {restaurant?.menu && (
              <div className={style.menu}>
                <h3>Menu:</h3>
                <ul>
                  {restaurant?.menu.map((item) => (
                    <li key={item.id}>
                      <strong>{item.name}</strong> - {item.description} -{" "}
                      {item.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsPage;
