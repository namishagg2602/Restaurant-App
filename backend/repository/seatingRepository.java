package com.restaurant.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restaurant.backend.model.seating;

@Repository
public interface seatingRepository extends JpaRepository<seating,Long> {

}
