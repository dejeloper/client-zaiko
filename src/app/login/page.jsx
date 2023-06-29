const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex justify-center items-center bg-gray-100 rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-principal">
            Inicio de Sesión
          </h2>
          <p className="text-sm mt-4 text-principal">
            Si está registrado, ingrese fácilmente
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              className="p-2 mt-8 rounded-xl border"
              id="user"
              name="user"
              placeholder="Usuario"
            />
            <div className="relative">
              <input
                type="password"
                className="p-2 rounded-xl border w-full"
                id="password"
                name="password"
                placeholder="Contrseña"
              />
            </div>
            <button className="bg-principal rounded-xl text-white py-2">
              Ingresar
            </button>
          </form>

          <div className="hidden">
            <div className=" mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
          </div>
        </div>

        <div className="w-1/2 md:block hidden">
          <img
            className="rounded-2xl"
            src="/images/img_login.png"
            alt="Company Logo"
          />
        </div>
      </div>
    </main>
  )
}

export default Login
