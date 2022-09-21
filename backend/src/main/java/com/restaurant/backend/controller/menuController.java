package com.restaurant.backend.controller;

import java.util.List;
import java.util.Optional;

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

import com.restaurant.backend.model.menu;
import com.restaurant.backend.repository.menuRepository;
import com.restaurant.backend.service.menuService;

@RestController
@RequestMapping("/menu")
@CrossOrigin
public class menuController {
	@Autowired
	private menuService menuServ;

	public menuController(menuService menuServ) {
		super();
		this.menuServ = menuServ;
	}
	
	//build create admin REST API
	@PostMapping("/add")
	public String add(@RequestBody menu menu) {
		menuServ.saveMenu(menu);
		return "New item is added";
	}
	
	@GetMapping("/getAll")
	public List<menu> getAllMenu(){
		return menuServ.getMenu();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteMenuById(@PathVariable Long id) {
		
		if(menuServ.deleteMenu(id))
			return "ItemId "+ Long.toString(id) +" is deleted from db";
		else
			return "ItemId "+ Long.toString(id) +" is not present in db";
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/update/{id}")
	public String updateMenuById(@PathVariable Long id, @RequestBody menu Menu) {
		
		menuServ.saveMenu(Menu);
		System.out.println(id);
		return "menu updated";
	}
}
