import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import DetalleCanchaModal from './DetalleCanchaModal'; 
import Footer from '../components/Footer';

const canchasData = [
  { id: 1, nombre: "Arena 5 Norte", desc: "Césped sintético FIFA Quality Pro con iluminación LED profesional", precio: 55, tipo: "Sintético" },
  { id: 2, nombre: "Arena 5 Sur", desc: "Cancha techada con graderías y vestuarios completos", precio: 65, tipo: "Sintético" },
  { id: 3, nombre: "Estadio Urbano", desc: "Césped natural premium con sistema de drenaje", precio: 80, tipo: "Natural" },
  { id: 4, nombre: "Fútbol Express", desc: "Ideal para partidos rápidos y torneos empresariales", precio: 45, tipo: "Sintético" },
  { id: 5, nombre: "La Champions 5", desc: "Iluminación nocturna HD y marcador electrónico", precio: 75, tipo: "Sintético" },
  { id: 6, nombre: "Zona Gol", desc: "Ambiente recreativo con zona de comidas", precio: 50, tipo: "Sintético" },
  { id: 7, nombre: "Parque Fútbol", desc: "Ambiente familiar con zonas verdes y juegos", precio: 60, tipo: "Sintético" },
  { id: 8, nombre: "El Penalty 5", desc: "Pista rápida de cemento para fútbol sala pro", precio: 55, tipo: "Cemento" },
  { id: 9, nombre: "La Bombonera", desc: "Entrenamientos técnicos y partidos amistosos", precio: 70, tipo: "Sintético" },
];

const TarjetaCancha = ({ cancha, onOpen }) => (
  <div style={styles.card}>
    <img 
      src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500" 
      alt={cancha.nombre} 
      style={styles.image} 
    />
    <div style={styles.content}>
      <h3 style={styles.title}>{cancha.nombre}</h3>
      <p style={styles.description}>{cancha.desc}</p>
      <div style={styles.infoRow}>
        <span style={styles.badge}>{cancha.tipo}</span>
        <span style={styles.price}>${cancha.precio}</span>
      </div>
      <button 
        style={styles.buttonMain} 
        onClick={() => onOpen(cancha.id)}
        onMouseOver={(e) => e.target.style.backgroundColor = '#059669'} // Verde 2 tonos más oscuro
        onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
      >
        Reservar
      </button>
    </div>
  </div>
);

export default function Canchas() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div style={styles.mainWrapper}>
      <Navbar />
      <h2 className="mt-10 text-center text-4xl font-bold mb-12 text-green-500">Nuestras Canchas</h2>

      <main style={styles.container}>
        <div style={styles.grid}>
          {canchasData.map(cancha => (
            <TarjetaCancha key={cancha.id} cancha={cancha} onOpen={setSelectedId} />
          ))}
        </div>
      </main>

      {selectedId && (
        <DetalleCanchaModal canchaId={selectedId} onClose={() => setSelectedId(null)} />
      )}
      <Footer/>
    </div>
  );
}

const styles = {
  mainWrapper: { backgroundColor: '#0f172a', minHeight: '100vh', fontFamily: 'sans-serif' },
  container: { padding: '40px 20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' },
  card: { backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' },
  image: { width: '100%', height: '180px', objectFit: 'cover' },
  content: { padding: '20px' },
  title: { color: '#10b981', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: 'bold' },
  description: { color: '#94a3b8', fontSize: '0.9rem', height: '40px', marginBottom: '20px' },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  badge: { backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem' },
  price: { color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' },
  buttonMain: { width: '100%', backgroundColor: '#10b981', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }
};