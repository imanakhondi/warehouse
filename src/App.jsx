import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./pages/ProductsList";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<ProductsList />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
