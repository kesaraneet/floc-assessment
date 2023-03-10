const LoginPanel = ({ handleSubmit, username, password, setUsername, setPassword, errMsg }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="m-auto left-0 right-0 top-[15vh] bg-slate-200 w-[30vw] h-[35vh] rounded-3xl shadow-2xl p-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-5 gap-4 items-center">
            <p className="col-span-2">Username / Email: </p>
            <input
              className="col-span-3 block border border-slate-300 rounded-xl py-2 px-3 shadow-sm"
              type="text"
              name="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <p className="col-span-2">Password</p>
            <input
              className="col-span-3 block border border-slate-300 rounded-xl py-2 px-3 shadow-sm"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button className="col-span-5 rounded-xl bg-slate-500 py-2 mt-6 text-white">Login</button>
          </div>
        </form>
        <p className="text-red-700">{errMsg}</p>
      </div>
    </div>
  );
};

export default LoginPanel;
