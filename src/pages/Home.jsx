// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-600 mb-2">
          ⚽ Gestión de Canchas Neiva
        </h1>
        <p className="text-gray-600 text-lg">
          Reserva tu espacio y juega con tus amigos.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Aquí irían tus componentes de 'CanchaCard' más adelante */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-500">
          <h2 className="text-xl font-bold mb-2">Cancha Sintética #1</h2>
          <p className="text-sm text-gray-500 mb-4">Disponible de 6:00 PM a 10:00 PM</p>
          <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">
            Ver disponibilidad
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;