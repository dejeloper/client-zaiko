import { InputIcon } from '@/components/Base'
import { InputPassword } from './InputPassword'

const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex justify-center items-center bg-gray-100 rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-principal">
            Inicio de Sesión
          </h2>
          <p className="text-xs mt-3 text-principal">
            Si está registrado, ingrese fácilmente
          </p>
          <form className="flex flex-col gap-4 mt-8">
            <InputIcon
              type="text"
              id="user"
              name="user"
              placeholder="Usuario"
              icon="user"
            />
            <InputPassword />
            <button className="bg-principal rounded-xl text-white py-2">
              Ingresar
            </button>
          </form>

          <div className=" mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-5 text-xs border-b border-principal py-4 text-principal">
            <a href="#">¿Olvidó su contraseña?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-principal">
            <p>¿No tiene cuenta?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Regístrese
            </button>
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
