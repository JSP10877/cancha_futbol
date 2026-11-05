import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;

async function conectarDB() {
    try {
        await client.connect();
        db = client.db('cancha_futbol');
        console.log("Conectado exitosamente a MongoDB desde el servidor");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
}
conectarDB();

// ==========================================
// 1. OBTENER TODAS LAS CANCHAS
// ==========================================
app.get('/api/canchas', async (req, res) => {
  try {
    const canchas = await db.collection('canchas').find({}).sort({ id: 1 }).toArray();
    res.json(canchas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las canchas' });
  }
});

// ==========================================
// 2. OBTENER UNA CANCHA POR ID (Para el Modal)
// ==========================================
app.get('/api/canchas/:id', async (req, res) => {
  const idCancha = Number(req.params.id);
  try {
    const cancha = await db.collection('canchas').findOne({ id: idCancha });
    if (!cancha) {
      return res.status(404).json({ error: 'Cancha no encontrada' });
    }
    res.json(cancha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la cancha' });
  }
});

// ==========================================
// 3. CREAR UNA RESERVA
// ==========================================
app.post('/api/reservas', async (req, res) => {
  const { cancha_id, usuario_nombre, fecha, hora_inicio, hora_fin } = req.body;
  
  try {
    const nuevaReserva = {
      cancha_id: Number(cancha_id),
      usuario_nombre,
      fecha,
      hora_inicio,
      hora_fin,
      estado: 'activa',
      creado_en: new Date()
    };

    const result = await db.collection('reservas').insertOne(nuevaReserva);
    
    res.status(201).json({
      mensaje: '¡Reserva creada con éxito!',
      reserva: { _id: result.insertedId, ...nuevaReserva }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar la reserva' });
  }
});

// ==========================================
// 4. OBTENER RESERVAS DE UN USUARIO
// ==========================================
app.get('/api/reservas/:usuario', async (req, res) => {
  const { usuario } = req.params;
  try {
    const reservas = await db.collection('reservas')
      .find({ usuario_nombre: usuario })
      .sort({ fecha: -1 })
      .toArray();

    const reservasConCancha = await Promise.all(reservas.map(async (reserva) => {
      const cancha = await db.collection('canchas').findOne({ id: reserva.cancha_id });
      return {
        ...reserva,
        cancha_nombre: cancha ? cancha.nombre : 'Cancha desconocida',
        imagen_url: cancha ? cancha.imagen_url : ''
      };
    }));

    res.json(reservasConCancha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reservas del usuario' });
  }
});

app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});