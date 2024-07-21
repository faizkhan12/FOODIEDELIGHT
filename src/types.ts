export type Restaurant = {
  id: number;
  name: string;
  description: string;
  location: string;
  contact?: number;
  rating?: string;
  email?: string;
  website?: string;
  openingHours?: string;
  menu?: MenuItem[];
  image?: string;
};

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};
