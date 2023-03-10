const ProductTable = ({ productList, editBtnDisable, navigate }) => {
  return (
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
            <td className="px-6 py-4">{product.title_th}</td>
            <td className="px-6 py-4">{product.title_en}</td>
            <td className="px-6 py-4 max-w-md">{product.description}</td>
            <td className="px-6 py-4">{product.price ? product.price : `-`} THB</td>
            <td className="px-6 py-4">
              <button
                className={
                  " text-white bg-slate-500 px-3 py-1 rounded-xl hover:bg-slate-700 disabled:bg-slate-800 disabled:cursor-not-allowed"
                }
                onClick={() => {
                  navigate(`/edit/${product.id}`, { id: product.id });
                }}
                disabled={editBtnDisable}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
