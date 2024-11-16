package com.example.ExamenFinal.controlador;

import com.example.ExamenFinal.modelo.Reserva;
import com.example.ExamenFinal.servicio.ReservaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "http://localhost:3000")

public class ReservaControlador {
    @Autowired
    private ReservaServicio reservaServicio;

    @GetMapping
    public List<Reserva> listarReservas() {
        return reservaServicio.listarTodas();
    }

    @PostMapping
    public ResponseEntity<Reserva> registrarReserva(@RequestBody Reserva reserva) {
        Reserva nuevaReserva = reservaServicio.crearReserva(reserva);
        return ResponseEntity.ok(nuevaReserva);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> obtenerReserva(@PathVariable Long id) {
        return reservaServicio.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> actualizarReserva(@PathVariable Long id, @RequestBody Reserva reservaDetalles) {
        return reservaServicio.buscarPorId(id)
                .map(reserva -> {
                    reserva.setNombreCliente(reservaDetalles.getNombreCliente());
                    reserva.setFechaInicio(reservaDetalles.getFechaInicio());
                    reserva.setFechaFin(reservaDetalles.getFechaFin());
                    reserva.setTipoHabitacion(reservaDetalles.getTipoHabitacion());
                    return ResponseEntity.ok(reservaServicio.actualizarReserva(reserva));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> cancelarReserva(@PathVariable Long id) {
        return reservaServicio.buscarPorId(id)
                .map(reserva -> {
                    reservaServicio.eliminarReserva(id);
                    return ResponseEntity.noContent().build(); 
                })
                .orElse(ResponseEntity.notFound().build()); 
    }
}
