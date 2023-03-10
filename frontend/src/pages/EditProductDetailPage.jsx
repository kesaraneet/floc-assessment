import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

function EditProductDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Product Items
  const [productTitleTH, setProductTitleTH] = useState("");
  const [productTitleEN, setProductTitleEN] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(
    () =>
      async function fetchProduct() {
        const res = await axios.get(`product/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProductTitleTH(res?.data?.product_title_th);
        setProductTitleEN(res?.data?.product_title_en);
        setImage(res?.data?.image);
        setPrice(res?.data?.price);
        setDescription(res?.data?.description);
      },
    []
  );

  async function handleRemoveProduct(e, id) {
    e.preventDefault();
    try {
      await axios.delete(`/product/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditProduct(e, id) {
    e.preventDefault();
    try {
      console.log("edit");
      const res = await axios.put(
        `product/${id}`,
        {
          product_title_th: productTitleTH,
          product_title_en: productTitleEN,
          price: price,
          description: description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <NavBar />
      <div className="m-5">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="inline-block text-sm mx-3 p-5 py-2 leading-none rounded text-white  bg-slate-400"
        >
          {"< Back"}
        </button>
        <div id="product-detail" className="flex flex-col items-center">
          <img className="h-[30vh] w-auto my-10" src={image}></img>
          <form className="w-[35vw]">
            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Product Title (Thai)</p>
              <input
                className="w-2/3 border border-slate-300 rounded-xl shadow-sm"
                type="text"
                name="productTitleTH"
                value={productTitleTH}
                onChange={(e) => setProductTitleTH(e.target.value)}
              />
            </div>

            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Product Title (English)</p>
              <input
                className="w-2/3 border border-slate-300 rounded-xl shadow-sm"
                type="text"
                name="productTitleEN"
                value={productTitleEN}
                onChange={(e) => setProductTitleEN(e.target.value)}
              />
            </div>

            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Price</p>
              <input
                className="w-2/3 border border-slate-300 rounded-xl shadow-sm"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Description</p>
              <textarea
                className="w-2/3 border border-slate-300 rounded-xl shadow-sm"
                type="textarea"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-row my-5 justify-end gap-1">
              <button
                className="w-[10vw] rounded-xl bg-blue-400 py-2 mt-6 text-white"
                onClick={(e) => {
                  handleEditProduct(e, id);
                }}
              >
                update
              </button>
              <button
                className="w-[10vw] rounded-xl bg-red-400 py-2 mt-6 text-white "
                onClick={(e) => {
                  handleRemoveProduct(e, id);
                }}
              >
                delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProductDetailPage;
