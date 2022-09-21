package com.restaurant.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.backend.model.menu;

public interface menuRepository extends JpaRepository<menu, Long> {
//	Optional<menu> findByItemName(String name);
}
