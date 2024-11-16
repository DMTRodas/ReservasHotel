import React, { useEffect, useState } from "react";
import FormularioReserva from "./componentes/FormularioReservas";
import TablaReservas from "./componentes/TablaReservas";
import './estilos/App.css';

const App = () => {
  const [reservas, setReservas] = useState([]); 
  const [actualizar, setActualizar] = useState(false); 

  const fetchReservas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/reservas");
      const data = await response.json();
      setReservas(data); 
    } catch (error) {
      console.error("Error al obtener las reservas:", error);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, [actualizar]);

  const actualizarReservas = () => {
    setActualizar(!actualizar);
  };

  return (
    <div>
      <h1>Gestión de Reservas del Hotel</h1>
      <FormularioReserva actualizarReservas={actualizarReservas} />
      <TablaReservas reservas={reservas} actualizarReservas={actualizarReservas} />
    </div>
  );
};

export default App;

