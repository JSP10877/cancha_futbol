import { Link } from 'react-router-dom'; // <--- Importante

const Navbar = ({ paginaActiva }) => {
  return (
    
    <nav className="bg-slate-900 border-b border-green-600 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link to="/" className="text-2xl font-extrabold text-green-500">
          🌎 Urban Arena
        </Link>
        
        <div className="space-x-8 font-semibold text-white">
          {/* Cambiamos href por "to" y <a> por <Link> */}
          <Link 
            to="/" 
            className={paginaActiva === 'inicio' ? 'text-green-500' : 'hover:text-green-400 '}
          >
            Inicio
          </Link>
          
          <Link 
            to="/canchas" 
            className={paginaActiva === 'canchas' ? 'text-green-500' : 'hover:text-green-400'}
          >
            Canchas
          </Link>
          
          <Link 
            to="/reservas" 
            className={paginaActiva === 'reservas' ? 'text-green-500' : 'hover:text-green-400'}
          >
            Reservar
          </Link>

        </div>
      </div>
    </nav>
  );
};


export default Navbar;