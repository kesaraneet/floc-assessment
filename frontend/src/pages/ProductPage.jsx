import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(
    () =>
      async function fetchProductList() {
        const res = await axios.get("/product", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProductList(res?.data);
      },
    []
  );

  return (
    <div>
      <NavBar />
      <div className="relative overflow-x-auto shadow-md rounded-lg m-10 border-2">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Product title (Thai)
              </th>
              <th scope="col" className="px-6 py-3">
                Product title (English)
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id}>
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  <img className="h-20 w-20" src={product.image}></img>
                </td>
                <td className="px-6 py-4">{product.product_title_th}</td>
                <td className="px-6 py-4">{product.product_title_en}</td>
                <td className="px-6 py-4 max-w-md">{product.description}</td>
                <td className="px-6 py-4">{product.price ? product.price : `-`} THB</td>
                <td className="px-6 py-4">
                  <button
                    className=" text-white bg-slate-500 hover:bg-slate-600 px-3 py-1 rounded-xl hover:"
                    onClick={() => {
                      navigate(`/edit/${product.id}`, { id: product.id });
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductPage;
