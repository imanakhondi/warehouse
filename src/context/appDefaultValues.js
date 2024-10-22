const categoriesDefaultValues = {
  categories: JSON.parse(localStorage.getItem("categories")) || [],
};

const productsDefaultValues = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

const filteredProductsDefaultValues = {
  filteredProducts: JSON.parse(localStorage.getItem("products")) || [],
};

const darkModeDefaultValues = {
  isDarkMode:
    JSON.parse(localStorage.getItem("darkMode")) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches,
};

export const appDefaultValues = {
  categoriesState: categoriesDefaultValues,
  productsState: productsDefaultValues,
  isDarkModeState: darkModeDefaultValues,
  filteredProductsState: filteredProductsDefaultValues,
};
