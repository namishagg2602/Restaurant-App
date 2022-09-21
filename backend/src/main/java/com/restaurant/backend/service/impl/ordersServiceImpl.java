package com.restaurant.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.backend.model.orders;
import com.restaurant.backend.repository.ordersRepository;
import com.restaurant.backend.service.ordersService;

@Service
public class ordersServiceImpl implements ordersService{

	@Autowired
	private ordersRepository orderRepo;
	
	public orders saveOrder(orders order) {
		// TODO Auto-generated method stub
		return orderRepo.save(order);
	}

	public List<orders> getOrder() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}

}
