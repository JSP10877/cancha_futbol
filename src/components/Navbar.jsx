import { Link } from "react-router-dom";
import { Goal, Zap } from "lucide-react";

const Navbar = ({ paginaActiva }) => {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-xl border-b border-green-600/40 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-0 py-5">

        {/* LOGO NUEVO */}
        <Link to="/" className="flex items-center gap-3 group -ml-2">

          <div className="relative">
            <div className="absolute inset-0 bg-green-400 blur-lg opacity-30 group-hover:opacity-70 transition" />

            <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 p-2.5 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Goal size={24} className="text-white" />
            </div>
          </div>



          <div className="flex items-center gap-1 min-w-fit">

            <h1 className="text-[32px] leading-none font-black italic tracking-tight bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent flex-shrink-0">
              FUTBOL
            </h1>

            <span className="text-yellow-400 text-lg animate-pulse -mx-0.5">
              ⚡
            </span>

            <span className="text-[32px] leading-none font-black italic tracking-tight bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent -ml-1 flex-shrink-0">
              5
            </span>

          </div>



        </Link>

        {/* MENÚ */}
        <div className="space-x-8 font-semibold text-white text-[15px]">

          <Link
            to="/"
            className={`transition ${
              paginaActiva === "inicio"
                ? "text-green-400"
                : "hover:text-green-400"
            }`}
          >
            Inicio
          </Link>

          <Link
            to="/canchas"
            className={`transition ${
              paginaActiva === "canchas"
                ? "text-green-400"
                : "hover:text-green-400"
            }`}
          >
            Canchas
          </Link>

          <Link
            to="/miperfil"
            className={`transition ${
              paginaActiva === "miperfil"
                ? "text-green-400"
                : "hover:text-green-400"
            }`}
          >
            Mi Perfil
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;