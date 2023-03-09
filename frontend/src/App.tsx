import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CatalogPage from "./pages/CatalogPage";
import EditProductDetailPage from "./pages/EditProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<CatalogPage />} />
        <Route path="/edit" element={<EditProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
