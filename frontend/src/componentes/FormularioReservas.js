import React, { useState } from "react";
import axios from "axios";

const FormularioReserva = ({ actualizarReservas }) => {
  const [reserva, setReserva] = useState({
    nombreCliente: "",
    fechaInicio: "",
    fechaFin: "",
    tipoHabitacion: "",
  });

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/reservas", reserva);
      alert("Reserva registrada con éxito");
      setReserva({
        nombreCliente: "",
        fechaInicio: "",
        fechaFin: "",
        tipoHabitacion: "",
      });
      actualizarReservas(); 
    } catch (error) {
      console.error("Error al registrar la reserva:", error);
      alert("Ocurrió un error al registrar la reserva");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Reserva</h2>
      <input
        type="text"
        name="nombreCliente"
        placeholder="Nombre del cliente"
        value={reserva.nombreCliente}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaInicio"
        value={reserva.fechaInicio}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaFin"
        value={reserva.fechaFin}
        onChange={handleChange}
        required
      />
      <select
        name="tipoHabitacion"
        value={reserva.tipoHabitacion}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione tipo de habitación</option>
        <option value="Sencilla">Sencilla</option>
        <option value="Doble">Doble</option>
        <option value="Suite">Suite</option>
        <option value="Suite VIP">Suite VIP</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default FormularioReserva;

