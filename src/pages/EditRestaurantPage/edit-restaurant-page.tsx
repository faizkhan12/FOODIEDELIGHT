import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Restaurant } from "../../types";
import {
  fetchRestaurantById,
  updateRestaurant,
} from "../../services/apiService";
import style from "./edit-restaurant-page.module.scss";
import Form from "../../components/form/form";
import Loader from "../../components/loader/loader";

const EditRestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>();

  useEffect(() => {
    // fetch restaurant by id
    fetchRestaurantById(Number(id)).then((data) => {
      setRestaurant(data);
    });
  }, [id]);
  console.log(restaurant);

  const handleSave = (updatedRestaurant: Restaurant) => {
    updateRestaurant(Number(id), updatedRestaurant).then(() => {
      navigate("/");
    });
  };
  if (!restaurant) return <Loader />;

  return (
    <div className={style.editRestaurantPage}>
      <button onClick={() => navigate(-1)} className={style.backBtn}>
        &#x2190;Back
      </button>
      <div className={style.container}>
        <h2> Edit your Restaurant</h2>
        <Form restaurant={restaurant} onSave={handleSave} />
      </div>
    </div>
  );
};

export default EditRestaurantPage;
