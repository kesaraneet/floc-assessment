const NavBar = () => {
  return (
    <nav class="flex bg-slate-300 p-6 items-center justify-between">
      <div class="flex-col items-left  text-slate-700">
        <p>User: Kesaranee</p>
        <p>Email: kesaraneet@gmail.com</p>
      </div>
      <div class="text-right">
        <button class="inline-block text-sm mx-3 p-5 py-2 leading-none rounded text-white  bg-slate-400">Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
