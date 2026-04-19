import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';

const app = express();

// Esto permite que tu React (que corre en el puerto 5173) 
// pueda pedirle datos a este servidor (que corre en el 5000)
app.use(cors());
app.use(express.json());

// CONFIGURACIÓN DE TU BASE DE DATOS
// Revisa los nombres en el panel del elefante en VS Code
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', // Si tu base de datos se llama 'futbol5', cámbialo aquí
  password: '1234', // Escribe la contraseña de tu Postgres
  port: 5432,
});

// ESTA ES LA RUTA PARA VER LAS CANCHAS
app.get('/api/canchas', async (req, res) => {
  try {
    // Aquí hacemos la consulta real a la tabla que acabas de crear
    const result = await pool.query('SELECT * FROM canchas');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error al conectar con la base de datos");
  }
});

// Levantar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor del backend corriendo en http://localhost:${PORT}`);
  console.log(`Prueba ver tus datos en: http://localhost:${PORT}/api/canchas`);
});