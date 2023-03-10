import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import EditProductDetailPage from "./pages/EditProductDetailPage";
import RequiredAuth from "./components/RequiredAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />} />

        <Route element={<RequiredAuth allowedPermission={["read"]} />}>
          <Route path="/product" element={<ProductPage />} />
        </Route>

        <Route element={<RequiredAuth allowedPermission={["read", "write"]} />}>
          <Route path="/edit/:id" element={<EditProductDetailPage />} />
        </Route>

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
