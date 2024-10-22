import { appDefaultValues } from "./appDefaultValues";

import {
  productActions,
  categoryActions,
  darkModActions,
  filteredProductActions,
} from "./AppActions";

export const appReducer = (state = appDefaultValues, { type, payload }) => {
  switch (type) {
    case productActions.ADD_PRODUCT: {
      return {
        ...state,
        productsState: {
          products: [...state.productsState.products, payload],
        },
      };
    }
    case productActions.DELETE_PRODUCT: {
      const filteredProducts = state.productsState.products.filter(
        (p) => p.id !== payload
      );
      return {
        ...state,
        productsState: {
          products: filteredProducts,
        },
      };
    }
    case productActions.SET_FILTERED_PRODUCTS: {
      const filteredProducts = state.productsState.products.filter(
        (p) => p.id !== payload
      );
      return {
        ...state,
        productsState: {
          products: filteredProducts,
        },
      };
    }
    case filteredProductActions.FILTER_PRODUCT: {
      const { title, category, sortOrder } = payload;
      let filteredProducts = state.productsState.products.filter((product) => {
        const matchesTitle = title ? product.title.includes(title) : true;
        const matchesCategory = category
          ? product.category.includes(category)
          : true;
        return matchesTitle && matchesCategory;
      });

      if (sortOrder === "latest") {
        filteredProducts = filteredProducts.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      } else if (sortOrder === "earliest") {
        filteredProducts = filteredProducts.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      }
      return {
        ...state,
        filteredProductsState: {
          filteredProducts,
        },
      };
    }

    case categoryActions.ADD_CATEGORY:
      return {
        ...state,
        categoriesState: {
          categories: [...state.categoriesState.categories, payload],
        },
      };
    case darkModActions.TOGGLE_DARKMODE:
      return {
        ...state,
        isDarkModeState: { isDarkMode: !state.isDarkModeState.isDarkMode },
      };

    default:
      return state;
  }
};
