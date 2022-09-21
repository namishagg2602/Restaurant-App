package com.restaurant.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restaurant.backend.model.orders;

@Repository
public interface ordersRepository extends JpaRepository<orders, Long> {

}
