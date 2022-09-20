package com.restaurant.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.restaurant.backend.model.cart;
import com.restaurant.backend.repository.cartRepository;
import com.restaurant.backend.service.cartService;

@Service
public class cartServiceImpl implements cartService{
	
	@Autowired
	private cartRepository cartRepo;
	
	
	public cart saveCart(cart cart) {
		return cartRepo.save(cart);
	}
	
	public List<cart> getCart() {
			
			return cartRepo.findAll();
		}
	
		
	public boolean deleteCart(@PathVariable Long prmkey) {
		
		
		Optional<cart> Cart = cartRepo.findById(prmkey);
		
		if(Cart.isPresent()) {
			cartRepo.delete(Cart.get());
			return true;
		}
	
		return false;
	}

//	public boolean delete(Long prmkey) {
//		List<cart> cartList
//	}
//	
}
