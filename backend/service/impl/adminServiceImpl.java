package com.restaurant.backend.service.impl;
import com.restaurant.backend.model.admin;
import com.restaurant.backend.repository.adminRepository;
import com.restaurant.backend.service.adminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class adminServiceImpl implements adminService{
	
	@Autowired
	private adminRepository adminRepo;
	
	
	public admin saveAdmin(admin admin) {
		return adminRepo.save(admin);
	}
	
}
