package com.restaurant.backend.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.restaurant.backend.model.cart;


public interface cartService {
	
	public cart saveCart(cart cart);
	public List<cart> getCart();
	public boolean  deleteCart(@PathVariable Long prmkey);
	
}
