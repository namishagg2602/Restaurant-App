package com.restaurant.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.backend.model.admin;
import com.restaurant.backend.service.adminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class adminController {
	
	@Autowired
	private adminService adminServ;

	public adminController(adminService adminServ) {
		super();
		this.adminServ = adminServ;
	}
	
	//build create admin REST API
	@PostMapping("/add")
	public String add(@RequestBody admin admin) {
		adminServ.saveAdmin(admin);
		return "New admin is added";
	}
}
