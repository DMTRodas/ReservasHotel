package com.example.ExamenFinal.servicio;

import com.example.ExamenFinal.modelo.Reserva;
import com.example.ExamenFinal.repositorio.ReservaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaServicio {
    @Autowired
    private ReservaRepositorio reservaRepositorio;

    public List<Reserva> listarTodas() {
        return reservaRepositorio.findAll();
    }

    public Reserva crearReserva(Reserva reserva) {
        return reservaRepositorio.save(reserva);
    }

    public Optional<Reserva> buscarPorId(Long id) {
        return reservaRepositorio.findById(id);
    }

    public Reserva actualizarReserva(Reserva reserva) {
        return reservaRepositorio.save(reserva);
    }

    public void eliminarReserva(Long id) {
        reservaRepositorio.deleteById(id);
    }   
}
