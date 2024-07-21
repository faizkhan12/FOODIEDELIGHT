import { Restaurant } from "../types";

// Mock data
export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    description: "A fine dining restaurant offering international cuisine.",
    location: "123 Main Street, Delhi",
    contact: 123 - 456 - 7890,
    rating: "4.5",
    email: "contact@gourmetkitchen.com",
    website: "http://www.gourmetkitchen.com",
    openingHours: "10:00 AM - 10:00 PM",
    menu: [
      {
        id: 1,
        name: "Caesar Salad",
        description: "Crispy romaine lettuce with Caesar dressing.",
        price: 12.99,
      },
      {
        id: 2,
        name: "Grilled Salmon",
        description: "Grilled salmon with lemon butter sauce.",
        price: 24.99,
      },
    ],
    image:
      "https://www.gourmetkitcheninc.com/wp-content/uploads/2024/02/Bella-Flora.jpg",
  },
  {
    id: 2,
    name: "Pasta Paradise",
    description: "Authentic Italian pasta dishes and more.",
    location: "KArolbagh, Delhi",
    contact: 987 - 654 - 3210,
    rating: "4.0",
    email: "contact@pastaparadise.com",
    website: "http://www.pastaparadise.com",
    openingHours: "11:00 AM - 11:00 PM",
    menu: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "Classic spaghetti with creamy carbonara sauce.",
        price: 15.99,
      },
      {
        id: 2,
        name: "Lasagna",
        description: "Layers of pasta with meat and cheese.",
        price: 18.99,
      },
    ],
    image:
      "https://m.media-amazon.com/images/I/71QiQr57ylL._AC_UF1000,1000_QL80_.jpg",
  },

  {
    id: 3,
    name: "Burger Haven",
    description: "Delicious gourmet burgers and fries.",
    location: "Gateway of Indiam,Mumbai",
    contact: 456 - 123 - 7890,
    rating: "4.2",
    email: "contact@burgerhaven.com",
    website: "http://www.burgerhaven.com",
    openingHours: "10:00 AM - 10:00 PM",
    menu: [
      {
        id: 1,
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheddar cheese.",
        price: 10.99,
      },
      {
        id: 2,
        name: "Veggie Burger",
        description: "Grilled veggie patty with avocado.",
        price: 9.99,
      },
    ],
    image:
      "https://b.zmtcdn.com/data/pictures/chains/8/20225588/d9184e33ae67729a502650e4b3c10f77.jpg",
  },
  {
    id: 4,
    name: "Pizza Palace",
    description: "Authentic Italian pizza with a variety of toppings.",
    location: "321 Pine Street, Anytown, USA",
    contact: 987 - 654 - 3210,
    rating: "4.5",
    email: "contact@PizzaPalace.com",
    website: "http://www.pizzapalace.com",
    openingHours: "11:00 AM - 11:00 PM",
    menu: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato, mozzarella, and basil.",
        price: 12.99,
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Pizza with spicy pepperoni slices.",
        price: 14.99,
      },
    ],
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/19/d4/dc/e1/dsc-9940-largejpg.jpg",
  },
];
