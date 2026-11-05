import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DetalleCanchaModal = ({ canchaId, onClose }) => {
  const [cancha, setCancha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!canchaId) return;

    // Petición a tu API de Node.js/Express para obtener los datos de la cancha específica
    fetch(`http://localhost:5000/api/canchas/${canchaId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo cargar la información de la cancha');
        }
        return res.json();
      })
      .then((data) => {
        setCancha(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar los detalles');
        setLoading(false);
      });
  }, [canchaId]);

  if (!canchaId) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
            Cargando detalles...
          </div>
        ) : error ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>
            {error}
          </div>
        ) : (
          cancha && (
            <>
              {/* Nota: Asegúrate de mapear las imágenes según tus rutas de assets o URLs */}
              <div style={styles.body}>
                <h2 style={styles.title}>{cancha.nombre}</h2>
                <p style={styles.descText}>{cancha.descripcion}</p>

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
                  <h3 style={styles.priceText}>
                    Precio:{' '}
                    <span style={styles.priceGreen}>
                      ${cancha.precio} / hora
                    </span>
                  </h3>

                  <div style={styles.actions}>
                    <button onClick={onClose} style={styles.btnClose}>
                      Cerrar
                    </button>

                    <Link
                      to={`/reservas/${canchaId}`}
                      className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition"
                    >
                      Reservar
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    backgroundColor: '#111827',
    width: '100%',
    maxWidth: '600px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #374151',
  },
  body: {
    padding: '24px',
  },
  title: {
    color: '#10b981',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  descText: {
    color: '#9ca3af',
    marginBottom: '24px',
  },
  infoGrid: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#1f2937',
    padding: '16px',
    borderRadius: '12px',
  },
  servicesBox: {
    backgroundColor: '#1f2937',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '24px',
  },
  label: {
    color: '#10b981',
    fontWeight: 'bold',
  },
  value: {
    color: '#fff',
  },
  footer: {
    marginTop: '20px',
  },
  priceText: {
    color: '#fff',
    marginBottom: '20px',
  },
  priceGreen: {
    color: '#10b981',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnClose: {
    backgroundColor: '#374151',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default DetalleCanchaModal;