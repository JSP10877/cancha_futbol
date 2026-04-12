const Navbar = ({ paginaActiva }) => { // <--- Recibe la prop

  return (
    <nav className="bg-slate-900 border-b border-green-600 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
          🌎 Urban Arena
        </h1>

        <div className="space-x-8 font-semibold">
          {/* Si paginaActiva es "inicio", ponemos texto verde, si no, blanco con hover */}
          <a href="/" className={paginaActiva === 'inicio' ? 'text-green-500' : 'hover:text-green-400 transition'}>
            Inicio
          </a>
          
          <a href="/canchas" className={paginaActiva === 'canchas' ? 'text-green-500' : 'hover:text-green-400 transition'}>
            Canchas
          </a>
          
          <a href="/reservas" className={paginaActiva === 'reservas' ? 'text-green-500' : 'hover:text-green-400 transition'}>
            Reservar
          </a>
          
        </div>
      </div>
    </nav>

  );
};

export default Navbar;