import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Canchas = () => {
  // 1. Estado para guardar las canchas de la DB
  const [listaCanchas, setListaCanchas] = useState([]);

  // 2. Función para traer los datos del servidor (puerto 5000)
  useEffect(() => {
    fetch('http://localhost:5000/api/canchas')
      .then((response) => response.json())
      .then((data) => setListaCanchas(data))
      .catch((error) => console.error('Error cargando canchas:', error));
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Menú pagina desde components/Navbar */}
      <Navbar paginaActiva="canchas"/>
      
      <main className="container mx-auto px-4">
        <h2 className="text-center text-4xl mt-10 mb-8 font-bold">Nuestras Canchas</h2>
        
        {/* 3. Grid para mostrar las canchas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listaCanchas.map((cancha) => (
            <div key={cancha.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">{cancha.nombre}</h3>
              <p className="text-slate-300 mb-4">{cancha.descripcion}</p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                  {cancha.tipo}
                </span>
                <span className="text-xl font-bold text-green-400">
                  ${cancha.precio_por_hora}/hr
                </span>
              </div>

              <div className="mt-6">
                <span className={`flex items-center gap-2 ${cancha.disponible ? 'text-green-500' : 'text-red-500'}`}>
                  <span className={`w-3 h-3 rounded-full ${cancha.disponible ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  {cancha.disponible ? 'Disponible ahora' : 'No disponible'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje por si la base de datos está vacía */}
        {listaCanchas.length === 0 && (
          <p className="text-center text-slate-500 mt-10">Cargando canchas desde la base de datos...</p>
        )}
      </main>
    </div>
  );
};

export default Canchas;