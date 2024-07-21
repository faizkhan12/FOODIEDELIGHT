import { useState, useEffect } from "react";
import { MenuItem, Restaurant } from "../../types";
import validator from "validator";

import style from "./form.module.scss";

interface FormProps {
  restaurant?: Restaurant;
  onSave: (restaurant: Restaurant) => void;
}

const Form = ({ restaurant, onSave }: FormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState(0);
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [isAddingMenuItem, setIsAddingMenuItem] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem>({
    id: 0,
    name: "",
    description: "",
    price: 0,
  });

  const [error, setError] = useState<{ [key: string]: string | null }>({});
  const [menuError, setMenuError] = useState<string | null>(null);

  // validation for all the fields
  const validateForm = (): boolean => {
    const errors: { [key: string]: string | null } = {};

    if (name.length < 1) errors.name = "Name is required";
    if (!description) errors.description = "Description is required";
    if (!location) errors.location = "Location is required";
    if (!contact) errors.contact = "Contact is required";
    if (
      !rating ||
      isNaN(Number(rating)) ||
      Number(rating) < 0 ||
      Number(rating) > 5
    )
      errors.rating = "Rating must be a number between 0 and 5";
    if (!validator.isEmail(email)) errors.email = "Email is invalid";
    if (!validator.isURL(website)) errors.website = "Website is invalid";
    if (!openingHours) errors.openingHours = "Opening Hours are required";

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  // validation for menu items
  const validateCurrentMenuItem = (): boolean => {
    if (
      !currentMenuItem.name ||
      !currentMenuItem.description ||
      currentMenuItem.price <= 0
    ) {
      setMenuError(
        "All menu fields are required and price must be greater than 0"
      );
      return false;
    }
    setMenuError(null);
    return true;
  };

  const handleAddMenuItemClick = () => {
    setIsAddingMenuItem(true);
  };

  const handleSaveMenuItem = () => {
    if (!validateCurrentMenuItem()) return;
    setMenu([...menu, { ...currentMenuItem, id: menu.length + 1 }]);
    setCurrentMenuItem({ id: 0, name: "", description: "", price: 0 });
    setIsAddingMenuItem(false);
  };

  const handleMenuItemChange = (
    field: keyof MenuItem,
    value: string | number
  ) => {
    setCurrentMenuItem({ ...currentMenuItem, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm() || (isAddingMenuItem && !validateCurrentMenuItem()))
      return;
    const restaurantData: Restaurant = {
      id: restaurant ? restaurant.id : Date.now(),
      name,
      description,
      location,
      contact,
      rating,
      email,
      website,
      openingHours,
      menu: isAddingMenuItem ? [...menu, currentMenuItem] : menu,
      image: image ? URL.createObjectURL(image) : restaurant?.image || "",
    };
    onSave(restaurantData);
  };

  // for editing
  useEffect(() => {
    if (restaurant) {
      setName(restaurant.name);
      setDescription(restaurant.description);
      setLocation(restaurant.location);
      setContact(restaurant.contact || 0);
      setRating(restaurant.rating || "");
      setEmail(restaurant.email || "");
      setWebsite(restaurant.website || "");
      setOpeningHours(restaurant.openingHours || "");
      setMenu(restaurant.menu || []);
    }
  }, [restaurant]);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.formContainer}>
        <div className={style.formItem}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Restaurant Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <p className={style.error}>{error.name}</p>}
        </div>
        <div className={style.formItem}>
          <label>Description:</label>
          <textarea
            rows={1}
            cols={3}
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error.description && (
            <p className={style.error}>{error.description}</p>
          )}
        </div>
        <div className={style.formItem}>
          <label>Location:</label>
          <input
            type="text"
            placeholder="Address..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {error.location && <p className={style.error}>{error.location}</p>}
        </div>
        <div className={style.formItem}>
          <label>Contact:</label>
          <input
            type="number"
            placeholder="contect..."
            value={contact}
            onChange={(e) => setContact(Number(e.target.value))}
          />
          {error.contact && <p className={style.error}>{error.contact}</p>}
        </div>
        <div className={style.formItem}>
          <label>Rating:</label>
          <input
            type="number"
            placeholder="Rating..."
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          {error.rating && <p className={style.error}>{error.rating}</p>}
        </div>
        <div className={style.formItem}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p className={style.error}>{error.email}</p>}
        </div>
        <div className={style.formItem}>
          <label>Website:</label>
          <input
            type="url"
            placeholder="Website url..."
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          {error.website && <p className={style.error}>{error.website}</p>}
        </div>
        <div className={style.formItem}>
          <label>Opening Hours:</label>
          <input
            type="text"
            placeholder="Opening Hours...eg:10Am - 11PM"
            value={openingHours}
            onChange={(e) => setOpeningHours(e.target.value)}
          />
          {error.openingHours && (
            <p className={style.error}>{error.openingHours}</p>
          )}
        </div>
        <div className={style.formItem}>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className={style.fullWidth}>
          <label>Menu Items:</label>
          {menu.map((item) => (
            <div key={item.id} className={style.menuItem}>
              <p>
                {item.name}: {item.description} - ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
          {isAddingMenuItem && (
            <div className={style.menuItem}>
              <input
                type="text"
                placeholder="Menu Name"
                value={currentMenuItem.name}
                onChange={(e) => handleMenuItemChange("name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Menu Description"
                value={currentMenuItem.description}
                onChange={(e) =>
                  handleMenuItemChange("description", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Menu Price"
                value={currentMenuItem.price}
                onChange={(e) =>
                  handleMenuItemChange("price", parseFloat(e.target.value))
                }
              />
              {menuError && <p className={style.error}>{menuError}</p>}
              <button
                className={style.addMenuItem}
                type="button"
                onClick={handleSaveMenuItem}
              >
                Save Menu Item
              </button>
            </div>
          )}
          <button
            type="button"
            className={style.addMenuItem}
            onClick={handleAddMenuItemClick}
            disabled={isAddingMenuItem}
          >
            + Add Menu Item
          </button>
        </div>
      </div>
      <button className={style.submitBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default Form;
