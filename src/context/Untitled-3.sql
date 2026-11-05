-- Si quieres asegurarte de empezar con una tabla limpia que tenga todos los campos necesarios:
DROP TABLE IF EXISTS usuarios CASCADE;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nickname VARCHAR(50),
    correo VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(150),
    ciudad VARCHAR(100),
    nacimiento DATE,
    password VARCHAR(255) NOT NULL,
    billetera NUMERIC(10, 2) DEFAULT 0.00,
    rol VARCHAR(20) DEFAULT 'cliente',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);