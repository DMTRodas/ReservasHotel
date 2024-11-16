import React, { useState } from "react";

const TablaReservas = ({ reservas, actualizarReservas }) => {
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

  const handleActualizarClick = (reserva) => {
    setReservaSeleccionada(reserva); 
  };

  const handleCancelarActualizar = () => {
    setReservaSeleccionada(null); 
  };

  const handleGuardarActualizacion = async () => {
    try {
      await fetch(`http://localhost:8080/api/reservas/${reservaSeleccionada.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservaSeleccionada),
      });
      alert("Reserva actualizada con éxito");
      setReservaSeleccionada(null); 
      actualizarReservas(); 
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
      alert("Ocurrió un error al actualizar la reserva");
    }
  };

  const handleEliminarReserva = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/reservas/${id}`, { method: "DELETE" });
      alert("Reserva eliminada con éxito");
      actualizarReservas(); 
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
      alert("Ocurrió un error al eliminar la reserva");
    }
  };

  const handleChange = (e) => {
    setReservaSeleccionada({
      ...reservaSeleccionada,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre del Cliente</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>
                {reservaSeleccionada?.id === reserva.id ? (
                  <input
                    type="text"
                    name="nombreCliente"
                    value={reservaSeleccionada.nombreCliente}
                    onChange={handleChange}
                  />
                ) : (
                  reserva.nombreCliente
                )}
              </td>
              <td>
                {reservaSeleccionada?.id === reserva.id ? (
                  <input
                    type="date"
                    name="fechaInicio"
                    value={reservaSeleccionada.fechaInicio}
                    onChange={handleChange}
                  />
                ) : (
                  reserva.fechaInicio
                )}
              </td>
              <td>
                {reservaSeleccionada?.id === reserva.id ? (
                  <input
                    type="date"
                    name="fechaFin"
                    value={reservaSeleccionada.fechaFin}
                    onChange={handleChange}
                  />
                ) : (
                  reserva.fechaFin
                )}
              </td>
              <td>
                {reservaSeleccionada?.id === reserva.id ? (
                  <select
                    name="tipoHabitacion"
                    value={reservaSeleccionada.tipoHabitacion}
                    onChange={handleChange}
                  >
                    <option value="Sencilla">Sencilla</option>
                    <option value="Doble">Doble</option>
                    <option value="Suite">Suite</option>
                    <option value="Suite VIP">Suite VIP</option>
                  </select>
                ) : (
                  reserva.tipoHabitacion
                )}
              </td>
              <td>
                {reservaSeleccionada?.id === reserva.id ? (
                  <>
                    <button onClick={handleGuardarActualizacion}>Guardar</button>
                    <button onClick={handleCancelarActualizar}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleActualizarClick(reserva)}>Actualizar</button>
                    <button onClick={() => handleEliminarReserva(reserva.id)}>Cancelar Reserva</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaReservas;




