package com.restaurant.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.backend.model.seating;
import com.restaurant.backend.repository.seatingRepository;
import com.restaurant.backend.service.seatingService;

@Service
public class seatingServiceImpl implements seatingService{
	
	@Autowired
	private seatingRepository seatingRepo;

	public seating saveSeat(seating seat) {
		// TODO Auto-generated method stub
		return seatingRepo.save(seat);
	}

	public List<seating> getSeating() {
		// TODO Auto-generated method stub
		return seatingRepo.findAll();
	}

}
