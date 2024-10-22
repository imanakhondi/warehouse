import { createContext, useContext, useReducer } from "react";
import { appDefaultValues } from "./appDefaultValues";
import { appReducer } from "./appReducer";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appDefaultValues);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("AppContext was used outside of AppContextProvider");

  return context;
}
