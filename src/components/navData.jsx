import { LuShoppingCart, LuUser, LuSearch } from "react-icons/lu";

export const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "products" },
  { name: <LuUser />, path: "account" },
  { name: <LuShoppingCart />, path: "cart" },
  { name: <LuSearch />, path: "search" },
];
