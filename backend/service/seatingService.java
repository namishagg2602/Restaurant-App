package com.restaurant.backend.service;

import java.util.List;

import com.restaurant.backend.model.seating;

public interface seatingService {
	public seating saveSeat(seating seat);
	public List<seating> getSeating();
}
