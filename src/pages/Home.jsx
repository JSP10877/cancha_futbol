import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">

      <Navbar paginaActiva="inicio"/>
      
      <main>
        {/* Cinta transportadora */}
        <div className="bg-green-600 overflow-hidden whitespace-nowrap">
          <div className="animate-[scroll_40s_linear_infinite] inline-block px-4 py-2 font-semibold">
            ⚽ Torneo relámpago este viernes |
            ⚽ Promoción 2x1 en reservas los martes |
            ⚽ Nueva cancha disponible en Urban Arena |
            ⚽ Inscripciones abiertas para campeonato amateur |
            ⚽ Ven a vivir la experiencia Urban Arena |
          </div>
        </div>

        {/* Banner principal - CORREGIDO */}
        <section 
          className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018')" }}
        >
          {/* Capa de degradado */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-slate-900"></div>

          <div className="relative text-center max-w-4xl px-6">
              <h2 className="text-6xl font-extrabold leading-tight">
                  Bienvenido a <span className="text-green-500">Futbol 5</span>
              </h2>
          </div>
        </section>

        {/* SECCIÓN EVENTOS */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6 text-center">
            
            <h2 className="text-4xl font-bold mb-12">
              Próximos <span className="text-green-500">Eventos</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Evento 1 */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-2 text-green-400">
                  🏆 Torneo Relámpago
                </h3>
                <p className="text-gray-400 mb-4">
                  Competencia rápida entre equipos locales.
                </p>
                <p className="text-gray-300">📅 12 Marzo</p>
                <p className="text-gray-300">⏰ 7:00 PM</p>
              </div>

              {/* Evento 2 */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-2 text-green-400">
                  ⚽ Liga Amateur
                </h3>
                <p className="text-gray-400 mb-4">
                  Inscripciones abiertas para equipos.
                </p>
                <p className="text-gray-300">📅 20 Marzo</p>
                <p className="text-gray-300">⏰ 6:00 PM</p>
              </div>

              {/* Evento 3 */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-2 text-green-400">
                  🔥 Partido de Exhibición
                </h3>
                <p className="text-gray-400 mb-4">
                  Jugadores invitados y show deportivo.
                </p>
                <p className="text-gray-300">📅 30 Marzo</p>
                <p className="text-gray-300">⏰ 8:00 PM</p>
              </div>

            </div>
          </div>
        </section>
        
        {/* INFORMACIÓN DEL COMPLEJO */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6">
            
            <h3 className="text-4xl font-bold text-center mb-16">
              Información del <span className="text-green-500">Complejo</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-10">

              {/* Horarios */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:shadow-green-500/20 hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  🕒 Horarios
                </h4>
                <p className="text-gray-300">
                  Lunes a Viernes: 8:00 AM - 11:00 PM <br />
                  Sábados y Domingos: 7:00 AM - 12:00 PM
                </p>
              </div>

              {/* Teléfono */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:shadow-green-500/20 hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  📞 Teléfono
                </h4>
                <p className="text-gray-300">
                  +57 300 123 4567 <br />
                  (608) 871 0000
                </p>
              </div>

              {/* Dirección */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:shadow-green-500/20 hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  📍 Dirección
                </h4>
                <p className="text-gray-300">
                  Calle 15 # 24 - 45, Neiva, Huila <br />
                  Cerca a la Universidad Surcolombiana
                </p>
              </div>

              {/* Información de Canchas */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:shadow-green-500/20 hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  ⚽ Información de Canchas
                </h4>
                <p className="text-gray-300">
                  Contamos con 4 canchas de grama sintética profesional, iluminación LED de alta potencia y vestuarios modernos.
                </p>
              </div>

            </div>

            {/* CONDICIONES */}
            <div className="mt-16 bg-slate-800 p-10 rounded-2xl border border-slate-700">
              <h4 className="text-2xl font-bold text-green-400 mb-6 text-center">
                Condiciones de Reserva y Pago
              </h4>

              <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                Para garantizar tu espacio, todas las reservas deben realizarse con un mínimo de 
                <span className="text-white font-semibold"> 24 horas de antelación</span>. 
                Se requiere el pago del <span className="text-white font-semibold">50% por adelantado</span> 
                vía transferencia o en el complejo. Cancelaciones permitidas hasta 12 horas antes del partido 
                para reprogramación. ¡Respeta el tiempo de los demás y disfruta del juego!
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto text-center px-6">
            
            <h3 className="text-4xl font-bold mb-12">
              ¿Por qué <span className="text-green-500">elegirnos?</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-10">

              {/* Feature 1 */}
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:scale-105 transition duration-300 shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-green-400">
                  Reserva rápida
                </h4>
                <p className="text-gray-400">
                  Sistema ágil y simple para reservar en segundos desde cualquier dispositivo.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:scale-105 transition duration-300 shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-green-400">
                  Canchas premium
                </h4>
                <p className="text-gray-400">
                  Césped profesional de última generación e iluminación nocturna LED de alta potencia.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:scale-105 transition duration-300 shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-green-400">
                  Ambiente deportivo
                </h4>
                <p className="text-gray-400">
                  Espacios diseñados para el disfrute de partidos casuales y torneos competitivos.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;