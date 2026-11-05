INSERT INTO canchas (id, nombre, tipo_deporte, descripcion, medidas, capacidad, servicios, precio, imagen_url) VALUES
-- FÚTBOL
(1, 'Arena 5 Norte', 'futbol', 'Césped sintético FIFA Quality Pro con iluminación LED profesional', '25m x 15m', '10 jugadores', 'Iluminación LED, vestuarios, balón incluido, marcador', 35000.00, 'futbol.jpg'),
(2, 'Arena 5 Sur', 'futbol', 'Cancha techada con graderías y vestuarios completos', '28m x 18m', '12 jugadores', 'Techado, gradas, vestuarios, iluminación', 45000.00, 'futbol.jpg'),
(3, 'Estadio Urbano', 'futbol', 'Césped natural premium con sistema de drenaje', '28m x 18m', '12 jugadores', 'Sistema de drenado, iluminación premium', 48000.00, 'futbol.jpg'),

-- PÁDEL
(4, 'Padel Cancha 1', 'padel', 'Ideal para partidos rápidos y torneos empresariales', '20m x 10m', '4 jugadores', 'Techado, red, vestuarios, iluminación', 25000.00, 'padel.jpg'),
(5, 'Padel Cancha 2', 'padel', 'Iluminación nocturna HD y marcador electrónico', '20m x 10m', '4 jugadores', 'Marcador electrónico, iluminación HD', 25000.00, 'padel.jpg'),
(6, 'Padel Cancha 3', 'padel', 'Ambiente recreativo con zona de comidas', '20m x 10m', '4 jugadores', 'Zona de comidas, sillas, mesas', 30000.00, 'padel.jpg'),

-- VOLEIBOL
(7, 'Voleibol Arena 1', 'voleibol', 'Cancha de arena profesional', '16m x 8m', '12 jugadores', 'Red profesional, hidratación', 35000.00, 'canchavoleibol.jpg'),
(8, 'Voleibol Piso', 'voleibol', 'Cancha con piso profesional y marcador electrónico', '18m x 9m', '12 jugadores', 'Marcador electrónico, iluminación', 35000.00, 'canchapisovoleibol.jpg'),
(9, 'Voleibol Arena 2', 'voleibol', 'Ideal para partidos amistosos', '16m x 8m', '12 jugadores', 'Arena premium, hidratación', 30000.00, 'canchavoleibol.jpg'),

-- TENIS
(10, 'Tenis Court 1', 'tenis', 'Cancha profesional de superficie acrílica', '23.77m x 8.23m', '4 jugadores', 'Red profesional, iluminación LED', 40000.00, 'canchatenis.jpg'),
(11, 'Tenis Court 2', 'tenis', 'Perfecta para entrenamiento competitivo', '23.77m x 8.23m', '4 jugadores', 'Marcador digital, gradería', 42000.00, 'canchatenis.jpg'),

-- BASKET
(12, 'Basket Arena 1', 'basket', 'Cancha indoor profesional', '28m x 15m', '10 jugadores', 'Tableros profesionales, iluminación HD', 38000.00, 'canchabasket.jpg'),
(13, 'Basket Arena 2', 'basket', 'Espacio premium para torneos', '28m x 15m', '10 jugadores', 'Marcador electrónico, graderías', 40000.00, 'canchabasket.jpg');

-- Reiniciar la secuencia del ID por si insertaste los IDs manuales
SELECT setval('canchas_id_seq', (SELECT MAX(id) FROM canchas));