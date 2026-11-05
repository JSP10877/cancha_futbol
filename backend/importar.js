const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const canchas = [
  {
    "id": 1,
    "nombre": "Arena 5 Norte",
    "tipo_deporte": "futbol",
    "descripcion": "Césped sintético FIFA Quality Pro con iluminación LED profesional",
    "medidas": "25m x 15m",
    "capacidad": "10 jugadores",
    "servicios": "Iluminación LED, vestuarios, balón incluido, marcador",
    "precio": 35000.00,
    "imagen_url": "futbol.jpg"
  },
  {
    "id": 2,
    "nombre": "Arena 5 Sur",
    "tipo_deporte": "futbol",
    "descripcion": "Cancha techada con graderías y vestuarios completos",
    "medidas": "28m x 18m",
    "capacidad": "12 jugadores",
    "servicios": "Techado, gradas, vestuarios, iluminación",
    "precio": 45000.00,
    "imagen_url": "futbol.jpg"
  },
  {
    "id": 3,
    "nombre": "Estadio Urbano",
    "tipo_deporte": "futbol",
    "descripcion": "Césped natural premium con sistema de drenaje",
    "medidas": "28m x 18m",
    "capacidad": "12 jugadores",
    "servicios": "Sistema de drenado, iluminación premium",
    "precio": 48000.00,
    "imagen_url": "futbol.jpg"
  },
  {
    "id": 4,
    "nombre": "Padel Cancha 1",
    "tipo_deporte": "padel",
    "descripcion": "Ideal para partidos rápidos y torneos empresariales",
    "medidas": "20m x 10m",
    "capacidad": "4 jugadores",
    "servicios": "Techado, red, vestuarios, iluminación",
    "precio": 25000.00,
    "imagen_url": "padel.jpg"
  },
  {
    "id": 5,
    "nombre": "Padel Cancha 2",
    "tipo_deporte": "padel",
    "descripcion": "Iluminación nocturna HD y marcador electrónico",
    "medidas": "20m x 10m",
    "capacidad": "4 jugadores",
    "servicios": "Marcador electrónico, iluminación HD",
    "precio": 25000.00,
    "imagen_url": "padel.jpg"
  },
  {
    "id": 6,
    "nombre": "Padel Cancha 3",
    "tipo_deporte": "padel",
    "descripcion": "Ambiente recreativo con zona de comidas",
    "medidas": "20m x 10m",
    "capacidad": "4 jugadores",
    "servicios": "Zona de comidas, sillas, mesas",
    "precio": 30000.00,
    "imagen_url": "padel.jpg"
  },
  {
    "id": 7,
    "nombre": "Voleibol Arena 1",
    "tipo_deporte": "voleibol",
    "descripcion": "Cancha de arena profesional",
    "medidas": "16m x 8m",
    "capacidad": "12 jugadores",
    "servicios": "Red profesional, hidratación",
    "precio": 35000.00,
    "imagen_url": "canchavoleibol.jpg"
  },
  {
    "id": 8,
    "nombre": "Voleibol Piso",
    "tipo_deporte": "voleibol",
    "descripcion": "Cancha con piso profesional y marcador electrónico",
    "medidas": "18m x 9m",
    "capacidad": "12 jugadores",
    "servicios": "Marcador electrónico, iluminación",
    "precio": 35000.00,
    "imagen_url": "canchapisovoleibol.jpg"
  },
  {
    "id": 9,
    "nombre": "Voleibol Arena 2",
    "tipo_deporte": "voleibol",
    "descripcion": "Ideal para partidos amistosos",
    "medidas": "16m x 8m",
    "capacidad": "12 jugadores",
    "servicios": "Arena premium, hidratación",
    "precio": 30000.00,
    "imagen_url": "canchavoleibol.jpg"
  },
  {
    "id": 10,
    "nombre": "Tenis Court 1",
    "tipo_deporte": "tenis",
    "descripcion": "Cancha profesional de superficie acrílica",
    "medidas": "23.77m x 8.23m",
    "capacidad": "4 jugadores",
    "servicios": "Red profesional, iluminación LED",
    "precio": 40000.00,
    "imagen_url": "canchatenis.jpg"
  },
  {
    "id": 11,
    "nombre": "Tenis Court 2",
    "tipo_deporte": "tenis",
    "descripcion": "Perfecta para entrenamiento competitivo",
    "medidas": "23.77m x 8.23m",
    "capacidad": "4 jugadores",
    "servicios": "Marcador digital, gradería",
    "precio": 42000.00,
    "imagen_url": "canchatenis.jpg"
  },
  {
    "id": 12,
    "nombre": "Basket Arena 1",
    "tipo_deporte": "basket",
    "descripcion": "Cancha indoor profesional",
    "medidas": "28m x 15m",
    "capacidad": "10 jugadores",
    "servicios": "Tableros profesionales, iluminación HD",
    "precio": 38000.00,
    "imagen_url": "canchabasket.jpg"
  },
  {
    "id": 13,
    "nombre": "Basket Arena 2",
    "tipo_deporte": "basket",
    "descripcion": "Espacio premium para torneos",
    "medidas": "28m x 15m",
    "capacidad": "10 jugadores",
    "servicios": "Marcador electrónico, graderías",
    "precio": 40000.00,
    "imagen_url": "canchabasket.jpg"
  }
];

async function importarDatos() {
    try {
        await client.connect();
        const database = client.db('cancha_futbol');
        const collection = database.collection('canchas');
        
        // Opcional: limpiar si ya había algo
        await collection.deleteMany({});
        
        const resultado = await collection.insertMany(canchas);
        console.log(`¡Insertados exitosamente ${resultado.insertedCount} documentos!`);
    } finally {
        await client.close();
    }
}

importarDatos().catch(console.dir);