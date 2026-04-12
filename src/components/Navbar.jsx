// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-green-600 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
          🌎 Urban Arena
        </h1>
        <div className="space-x-8 font-semibold">
          <a href="/" className="hover:text-green-400 transition">Inicio</a>
          <a href="/canchas" className="text-green-400">Canchas</a>
          <a href="/reservas" className="hover:text-green-400 transition">Reservar</a>
          <a href="/perfil" className="hover:text-green-400">Mi Perfil</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;