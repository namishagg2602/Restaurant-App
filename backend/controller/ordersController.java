package com.restaurant.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.backend.model.orders;
import com.restaurant.backend.service.ordersService;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class ordersController {
	@Autowired
	private ordersService orderServ;

	public ordersController(ordersService orderServ) {
		super();
		this.orderServ = orderServ;
	}
	
	//build create admin REST API
	@PostMapping("/add")
	public String add(@RequestBody orders order) {
		orderServ.saveOrder(order);
		return "New order is added";
	}
	
	@GetMapping("/getAll")
	public List<orders> getAllOrders(){
		return orderServ.getOrder();
	}
}
