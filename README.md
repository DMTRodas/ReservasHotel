# ReservasHotel

*Requisitos para Backend:

- Java 17 o superior
-- Node.js y npm
---MySQL (o el servidor que uses para la base de datos)
---Github

*Clonar el repositorio desde Github a maquina local

*Configurar base de datos en MySQL Workbench llamada "hotel_reservas"

- Estructura de base de datos:
 CREATE DATABASE IF NOT EXISTS hotel_reservas;
USE hotel_reservas;

-- Crear la tabla reservas con las columnas especificadas
CREATE TABLE reservas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    tipo_habitacion VARCHAR(255) NOT NULL
);

SELECT * FROM reservas;

*Despues de clonar el proyecto y crear la base de datos, proceda a instalar las dependencias necesarias:
- mvn clean install

*Inicie el Servidor: mvn spring-boot:run (backend disponible en puerto 8080)

*Instalacion de Frontend:
- Navegar desde la terminal hacia la carpeta "frontend": cd frontend
- Instala las dependencias de React con: npm install
- Inicia el servidor: npm start (Servidor disponible en: http://localhost:3000


Dulce Monterroso
