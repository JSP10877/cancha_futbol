import React from 'react';
import { Link } from 'react-router-dom';

const infoCanchas = {
  1: { nombre: "Arena 5 Norte", desc: "Césped sintético FIFA Quality Pro con iluminación LED profesional", medidas: "25m x 15m", capacidad: "10 jugadores", servicios: "Iluminación LED, vestuarios, balón incluido, marcador, zona de descanso", precio: "55" },
  2: { nombre: "Arena 5 Sur", desc: "Cancha techada con graderías y vestuarios completos", medidas: "28m x 18m", capacidad: "12 jugadores", servicios: "Techado, gradas, vestuarios, iluminación, petos", precio: "65" },
  // ... rellena los demás IDs siguiendo el mismo patrón
};

const DetalleCanchaModal = ({ canchaId, onClose }) => {
  const cancha = infoCanchas[canchaId] || infoCanchas[1];

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        {/* Imagen superior estilo césped */}
        <div style={styles.headerImage}></div>
        
        <div style={styles.body}>
          <h2 style={styles.title}>{cancha.nombre}</h2>
          <p style={styles.descText}>{cancha.desc}</p>

          <div style={styles.infoGrid}>
            <div style={styles.infoBox}>
              <span style={styles.label}>Medidas</span>
              <span style={styles.value}>{cancha.medidas}</span>
            </div>
            <div style={styles.infoBox}>
              <span style={styles.label}>Capacidad</span>
              <span style={styles.value}>{cancha.capacidad}</span>
            </div>
          </div>

          <div style={styles.servicesBox}>
            <span style={styles.label}>Servicios</span>
            <p style={styles.value}>{cancha.servicios}</p>
          </div>

          <div style={styles.footer}>
            <h3 style={styles.priceText}>Precio: <span style={styles.priceGreen}>${cancha.precio} / hora</span></h3>
            <div style={styles.actions}>
              <button onClick={onClose} style={styles.btnClose}>Cerrar</button>
              <Link to="/reservas" style={styles.btnReserve}>Reservar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: { position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' },
  modal: { backgroundColor: '#111827', width: '100%', maxWidth: '600px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #374151' },
  headerImage: { height: '100px', background: 'linear-gradient(to bottom, #4ade80, #166534)', width: '100%' },
  body: { padding: '24px' },
  title: { color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' },
  descText: { color: '#9ca3af', fontSize: '0.95rem', marginBottom: '24px' },
  infoGrid: { display: 'flex', gap: '16px', marginBottom: '16px' },
  infoBox: { flex: 1, backgroundColor: '#1f2937', padding: '16px', borderRadius: '12px' },
  servicesBox: { backgroundColor: '#1f2937', padding: '16px', borderRadius: '12px', marginBottom: '24px' },
  label: { color: '#10b981', display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px' },
  value: { color: '#fff', fontSize: '1rem' },
  footer: { marginTop: '20px' },
  priceText: { color: '#fff', fontSize: '1.2rem', marginBottom: '20px' },
  priceGreen: { color: '#10b981', fontWeight: 'bold' },
  actions: { display: 'flex', justifyContent: 'space-between', gap: '12px' },
  btnClose: { backgroundColor: '#374151', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  btnReserve: { backgroundColor: '#10b981', color: '#fff', textDecoration: 'none', padding: '10px 32px', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block' }
};

export default DetalleCanchaModal;