package com.example.ExamenFinal.repositorio;

import com.example.ExamenFinal.modelo.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepositorio extends JpaRepository<Reserva, Long> {
}
