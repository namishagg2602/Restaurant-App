package com.restaurant.backend.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



import com.restaurant.backend.model.cart;

public interface cartRepository extends JpaRepository<cart, Long> {
//	List<cart> findAllById(Long prmkey);
	
} 