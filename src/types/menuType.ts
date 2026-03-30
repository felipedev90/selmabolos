export interface MenuTypes {
  name: string;
  price: number;
  flavors: string[];
}

export type MenuCategory =
  | "Massa Branca"
  | "Massa Chocolate"
  | "Bolo de Leite Ninho"
  | "Bolo Trufado";

export type DeliciasType = {
  src: string;
  alt: string;
  title: string;
};

export type TestimonialType = {
  name: string;
  location: string;
  text: string;
};
