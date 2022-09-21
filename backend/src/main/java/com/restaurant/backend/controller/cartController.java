package com.restaurant.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.backend.model.cart;

import com.restaurant.backend.service.cartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class cartController {
	@Autowired
	private cartService cartServ;
	
	
	public cartController(cartService cartServ) {
		super();
		this.cartServ = cartServ;
	}
	
	//build create admin REST API
	@PostMapping("/add")
	public String add(@RequestBody cart cart) {
		cartServ.saveCart(cart);
		return "New item is added";
	}
	
	@GetMapping("/getAll")
	public List<cart> getAllCart(){
		return cartServ.getCart();
	}
	
	@DeleteMapping("/delete/{prmkey}")
	public String deleteCartById(@PathVariable Long prmkey) {
		
		if(cartServ.deleteCart(prmkey))
			return "ItemId "+ Long.toString(prmkey) +" is deleted from db";
		else
			return "ItemId "+ Long.toString(prmkey) +" is not present in db";
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/update/{prmkey}")
	public String updateCartById(@PathVariable Long prmkey, @RequestBody cart Cart) {
		
		cartServ.saveCart(Cart);
		System.out.println(prmkey);
		System.out.println(prmkey.getClass());
		
		return "cart updated";
	}
	
//	@RequestMapping("/delete")
//	public String deleteCart() {
//		cartServ.deleteAllCart();
//		return "Cart deleted";
//	}
}
