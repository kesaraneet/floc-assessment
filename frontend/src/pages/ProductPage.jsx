import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProductTable from "../components/ProductTable";

function ProductPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [productList, setProductList] = useState([]);
  const [editBtnDisable, setEditBtnDisable] = useState(true);

  async function fetchProductList() {
    await axios
      .get("/product", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setProductList(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  useEffect(() => {
    const EDIT_PRODUCT_PERMISSION = ["read", "write"];
    const myPermission = auth?.permission;
    const isAllowed = EDIT_PRODUCT_PERMISSION.every((p) => {
      return myPermission?.includes(p);
    });
    setEditBtnDisable(!isAllowed);
  }, [auth]);

  return (
    <div>
      <NavBar />
      <div className="relative overflow-x-auto shadow-md rounded-lg m-10 border-2">
        <ProductTable productList={productList} editBtnDisable={editBtnDisable} navigate={navigate} />
      </div>
    </div>
  );
}

export default ProductPage;
