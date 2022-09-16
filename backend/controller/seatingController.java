package com.restaurant.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.backend.model.seating;
import com.restaurant.backend.service.seatingService;

@RestController
@RequestMapping("/seating")
@CrossOrigin
public class seatingController {
	@Autowired
	private seatingService seatingServ;

	public seatingController(seatingService seatingServ) {
		super();
		this.seatingServ = seatingServ;
	}
	
	//build create admin REST API
	@PostMapping("/add")
	public String add(@RequestBody seating seat) {
		seatingServ.saveSeat(seat);
		return "New seat is added";
	}
	
	@GetMapping("/getAll")
	public List<seating> getAllOrders(){
		return seatingServ.getSeating();
	}
}
