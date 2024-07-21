import { RESTAURANTS } from "../data/restaurants-data";
import { Restaurant } from "../types";
import { getFromLocalStorage, setToLocalStorage } from "../utils/local-storage";

const RESTAURANT_KEY = "restaurants";

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const storedRestaurant = getFromLocalStorage<Restaurant[]>(RESTAURANT_KEY);
  if (storedRestaurant) {
    return storedRestaurant;
  } else {
    setToLocalStorage(RESTAURANT_KEY, RESTAURANTS);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(RESTAURANTS);
      }, 500);
    });
  }
};

export const fetchRestaurantById = async (
  id: number
): Promise<Restaurant | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const restaurant = RESTAURANTS.find((r) => r.id === id);
      resolve(restaurant);
    }, 500);
  });
};

export const addRestaurant = async (
  restaurant: Restaurant
): Promise<Restaurant> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newRestaurant: Restaurant = {
        ...restaurant,
        id: RESTAURANTS.length + 1,
      };
      RESTAURANTS.push(newRestaurant);
      setToLocalStorage(RESTAURANT_KEY, RESTAURANTS);
      resolve(newRestaurant);
    }, 500);
  });
};

export const updateRestaurant = async (
  id: number,
  updatedRestaurant: Restaurant
): Promise<Restaurant | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = RESTAURANTS.findIndex((r) => r.id === id);
      if (index !== -1) {
        RESTAURANTS[index] = { ...RESTAURANTS[index], ...updatedRestaurant };
        setToLocalStorage(RESTAURANT_KEY, RESTAURANTS);
        resolve(RESTAURANTS[index]);
      } else {
        resolve(undefined);
      }
    }, 500);
  });
};

export const deleteRestaurant = async (id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = RESTAURANTS.findIndex((r) => r.id === id);
      if (index !== -1) {
        RESTAURANTS.splice(index, 1);
        setToLocalStorage(RESTAURANT_KEY, RESTAURANTS);
      }
      resolve();
    }, 500);
  });
};
