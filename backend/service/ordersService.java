package com.restaurant.backend.service;

import java.util.List;

import com.restaurant.backend.model.orders;

public interface ordersService {
	public orders saveOrder(orders order);
	public List<orders> getOrder();
}
