import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./pages/ProductsList";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";
import SingleProduct from "./pages/SingleProduct";
import { filteredProductActions } from "./context/AppActions";
import { Toaster } from "react-hot-toast";

function App() {
  const {
    state: { isDarkModeState, productsState, categoriesState },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    const modeClass = isDarkModeState.isDarkMode ? "dark-mode" : "light-mode";
    const oppositeClass = isDarkModeState.isDarkMode
      ? "light-mode"
      : "dark-mode";

    document.documentElement.classList.add(modeClass);
    document.documentElement.classList.remove(oppositeClass);
  }, [isDarkModeState.isDarkMode]);

  useEffect(() => {
    const itemsToStore = [
      { key: "products", value: productsState.products },
      { key: "categories", value: categoriesState.categories },
    ];

    itemsToStore.forEach(({ key, value }) => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    dispatch({
      type: filteredProductActions.FILTER_PRODUCT,
      payload: productsState.products,
    });
  }, [productsState.products, categoriesState.categories, dispatch]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
