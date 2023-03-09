import NavBar from "../components/NavBar";

function EditProductDetailPage() {
  return (
    <div>
      <NavBar />
      <div className="m-5">
        <button class="inline-block text-sm mx-3 p-5 py-2 leading-none rounded text-white  bg-slate-400">{"< Back"}</button>
        <div id="product-detail" className="flex flex-col items-center">
          <img className="h-[30vh] w-auto my-10" src="https://i.pinimg.com/originals/ca/48/a8/ca48a85775fa4751c2bd90b4ae931889.jpg"></img>
          <form className="w-[35vw]">
            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Product Title (Thai)</p>
              <input class="w-2/3 border border-slate-300 rounded-xl shadow-sm" type="text" name="username" />
            </div>

            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Product Title (English)</p>
              <input class="w-2/3 border border-slate-300 rounded-xl shadow-sm" type="text" name="username" />
            </div>

            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Price</p>
              <input class="w-2/3 border border-slate-300 rounded-xl shadow-sm" type="text" name="username" />
            </div>

            <div className="flex flex-row items-center my-5">
              <p className="w-1/3">Description</p>
              <input class="w-2/3 border border-slate-300 rounded-xl shadow-sm" type="text" name="username" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProductDetailPage;
