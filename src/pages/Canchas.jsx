import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- Añade esto
import Navbar from '../components/Navbar';

const Canchas = () => {
  const [listaCanchas, setListaCanchas] = useState([]);
  // Este estado guarda la cancha que seleccionaste para ver el detalle
  const [canchaEnDetalle, setCanchaEnDetalle] = useState(null);
  const navigate = useNavigate(); // <--- Añade esto

  useEffect(() => {
    fetch('http://localhost:5000/api/canchas')
      .then((response) => response.json())
      .then((data) => setListaCanchas(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white relative">
      <Navbar paginaActiva="canchas"/>
      
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-center text-4xl font-bold mb-12 text-green-500">Nuestras Canchas</h2>
        
        {/* Grid de Canchas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaCanchas.map((cancha) => (
            <div key={cancha.id} className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
              <img 
                src={cancha.imagen_url || "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500"} 
                className="h-48 w-full object-cover"
                alt={cancha.nombre}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{cancha.nombre}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-2">{cancha.descripcion}</p>
                
                <button 
                  onClick={() => setCanchaEnDetalle(cancha)}
                  className="w-full bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-3 rounded-xl transition-all cursor-pointer hover:scale-[1.02]"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- ESTE ES EL MINI MENÚ (MODAL) --- */}
      {canchaEnDetalle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-[#111827] w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-800 animate-in fade-in zoom-in duration-300">
            
            {/* Cabecera con Imagen */}
            <div className="h-48 w-full relative">
              <img 
                src={canchaEnDetalle.imagen_url || "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"} 
                className="w-full h-full object-cover opacity-60"
                alt={canchaEnDetalle.nombre}
              />
            </div>

            {/* Contenido del Detalle */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-green-500 mb-2">{canchaEnDetalle.nombre}</h2>
              <p className="text-slate-300 mb-8">{canchaEnDetalle.descripcion}</p>

              {/* Grid de Información Técnica */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-green-500 font-bold text-sm mb-1">Medidas</p>
                  <p className="text-white font-medium">25m x 15m</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-green-500 font-bold text-sm mb-1">Capacidad</p>
                  <p className="text-white font-medium">10 jugadores</p>
                </div>
              </div>

              {/* Servicios */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-8">
                <p className="text-green-500 font-bold text-sm mb-1">Servicios</p>
                <p className="text-slate-300 text-sm">
                  Iluminación LED, vestuarios, balón incluido, marcador, zona de descanso.
                </p>
              </div>

              {/* Footer del Modal: Precio y Botones */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <div className="text-2xl font-bold">
                  Precio: <span className="text-green-400">${canchaEnDetalle.precio_por_hora} / hora</span>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setCanchaEnDetalle(null)}
                    className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold"
                  >
                    Cerrar
                  </button>
                  <button 
                  onClick={() => navigate('/reservas', { state: { canchaId: canchaEnDetalle.id } })}
                  className="w-full bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-3 rounded-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canchas;