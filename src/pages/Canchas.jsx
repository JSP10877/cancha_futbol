import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import DetalleCanchaModal from './DetalleCanchaModal'; 
import Footer from '../components/Footer';

import { Link } from "react-router-dom";

//Incorporacion de las imagenes de las canchas
import canchasfutbol from '../assets/images/futbol.jpg';
import canchaspadel from '../assets/images/padel.jpg';
import canchasvoleibol1 from '../assets/images/canchavoleibol.jpg';
import canchasvoleibol2 from '../assets/images/canchapisovoleibol.jpg';

const canchasData = [
  { id: 1, nombre: "Arena 5 Norte", desc: "Césped sintético FIFA Quality Pro con iluminación LED profesional", precio: 35000, tipo: "Sintético", imagen: canchasfutbol },
  { id: 2, nombre: "Arena 5 Sur", desc: "Cancha techada con graderías y vestuarios completos", precio: 45000, tipo: "Sintético", imagen: canchasfutbol },
  { id: 3, nombre: "Estadio Urbano", desc: "Césped natural premium con sistema de drenaje", precio: 48000, tipo: "Natural", imagen: canchasfutbol },
  { id: 4, nombre: "Padel Cancha 1", desc: "Ideal para partidos rápidos y torneos empresariales", precio: 25000, tipo: "Piso", imagen: canchaspadel },
  { id: 5, nombre: "Padel Cancha 2", desc: "Iluminación nocturna HD y marcador electrónico", precio: 25000, tipo: "Piso", imagen: canchaspadel },
  { id: 6, nombre: "Padel Cancha 3", desc: "Ambiente recreativo con zona de comidas", precio: 30000, tipo: "Piso", imagen: canchaspadel },
  { id: 7, nombre: "Voleibol Arena 1", desc: "Ambiente familiar con arta arena para partidos prolongados", precio: 35000, tipo: "Arena", imagen: canchasvoleibol1 },
  { id: 8, nombre: "Voleibol Piso", desc: "Cancha con arta arena para partidos prolongados con marcador electrónico", precio: 35000, tipo: "Piso", imagen: canchasvoleibol2 },
  { id: 9, nombre: "Voleibol Arena 2", desc: "Cancha con arta arena para partidos amistosos", precio: 30000, tipo: "Arena", imagen: canchasvoleibol1 },
];

const TarjetaCancha = ({ cancha, onOpen }) => (
  <div style={styles.card}>
    <img 
      src={cancha.imagen} // <--- CAMBIO AQUÍ: Ahora es dinámico
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

      {/* Hero Section: Fondo azul marino oscuro y título bicolor */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <h1 className="text-center text-6xl font-bold mb-6 text-green-500">
            <span className="text-white">Nuestras</span> Canchas
          </h1>
          <p className="text-center text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Espacios diseñados para vivir el fútbol con intensidad, comodidad y calidad profesional.
          </p>
        </div>
      </section>

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
  mainWrapper: { backgroundColor: '#111827', minHeight: '100vh', fontFamily: 'sans-serif' },
  
  // Estilos para la sección de título diferenciada
  heroSection: {
    backgroundColor: '#2f3745', 
    padding: '80px 20px',
    borderBottom: '1px solid #1e293b'
  },
  heroContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  container: { padding: '60px 20px' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
    gap: '24px', 
    maxWidth: '1200px', 
    margin: '0 auto' 
  },
  card: { backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' },
  image: { width: '100%', height: '180px', objectFit: 'cover' },
  content: { padding: '20px' },
  title: { color: '#10b981', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: 'bold' },
  description: { color: '#94a3b8', fontSize: '0.9rem', height: '40px', marginBottom: '20px' },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  badge: { backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem' },
  price: { color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' },
  buttonMain: { 
    width: '100%', 
    backgroundColor: '#10b981', 
    color: 'white', 
    border: 'none', 
    padding: '12px', 
    borderRadius: '10px', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    transition: '0.2s' 
  }
};