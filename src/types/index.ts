

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  card?: NavItemWithChildren[];
  menu?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;

export type Image = {
  id: number;
  path: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  images: Image[];
  categoryId: string;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};

export type Tag = {
  name: string;
};

export type engPost = {
  id: number;
  author: string;
  title: string;
  image: string;
  type: string;
  body: string;
  updated_at: string;
  categories: string[];
};
export type mmPost = {
  id: number;
  author: string;
  title: string;
  image: string;
  type: string;
  body: string;
  updated_at: string;
  categories: string[];
};

export type Category = {
  id: number;
  name: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type Cart = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  // image: {
  //   id: string;
  //   name: string;
  //   url: string;
  // };
  // category: string;
  // subcategory: string;
};
