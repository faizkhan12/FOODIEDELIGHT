import { useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import { addRestaurant } from "../../services/apiService";
import { Restaurant } from "../../types";
import style from "./add-restaurant-page.module.scss";

const AddRestaurantPage = () => {
  const navigate = useNavigate();

  const handleSave = (restaurant: Restaurant) => {
    addRestaurant(restaurant).then(() => {
      navigate("/");
    });
  };

  return (
    <div className={style.addRestaurantPage}>
      <button onClick={() => navigate(-1)} className={style.backBtn}>
        &#x2190;Back
      </button>
      <div className={style.container}>
        <h2> Add your Restaurant</h2>
        <Form onSave={handleSave} />
      </div>
    </div>
  );
};

export default AddRestaurantPage;
