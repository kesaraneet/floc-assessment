import NavBar from "../components/NavBar";

function CatalogPage() {
  return (
    <div>
      <NavBar />
      <div class="relative overflow-x-auto shadow-md rounded-lg m-10 border-2">
        <table class="w-full text-left">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                Product title (Thai)
              </th>
              <th scope="col" class="px-6 py-3">
                Product title (English)
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" class="px-6 py-4 whitespace-nowrap">
                <img className="h-20 w-20" src="https://i.pinimg.com/originals/ca/48/a8/ca48a85775fa4751c2bd90b4ae931889.jpg"></img>
              </td>
              <td class="px-6 py-4">สินค้า 1</td>
              <td class="px-6 py-4">Product 1</td>
              <td class="px-6 py-4 max-w-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, quia earum dolorum magnam delectus ex pariatur
                reprehenderit esse asperiores deleniti id aut nisi illo corrupti nostrum placeat inventore. Porro, fugit?
              </td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <button class=" text-white bg-slate-500 hover:bg-slate-600 px-3 py-1 rounded-xl hover:">Edit</button>
              </td>
            </tr>

            <tr>
              <td scope="row" class="px-6 py-4 whitespace-nowrap">
                <img className="h-20 w-20" src="https://i.pinimg.com/originals/ca/48/a8/ca48a85775fa4751c2bd90b4ae931889.jpg"></img>
              </td>
              <td class="px-6 py-4">สินค้า 1</td>
              <td class="px-6 py-4">Product 1</td>
              <td class="px-6 py-4 max-w-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, quia earum dolorum magnam delectus ex pariatur
                reprehenderit esse asperiores deleniti id aut nisi illo corrupti nostrum placeat inventore. Porro, fugit?
              </td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <button class=" text-white bg-slate-500 hover:bg-slate-600 px-3 py-1 rounded-xl hover:">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CatalogPage;
