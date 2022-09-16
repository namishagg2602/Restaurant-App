package com.restaurant.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.restaurant.backend.model.menu;
import com.restaurant.backend.repository.menuRepository;
import com.restaurant.backend.service.menuService;

@Service
public class menuServiceImpl implements menuService{

	@Autowired
	private menuRepository menuRepo;
	
	public menu saveMenu(menu menu) {
		// TODO Auto-generated method stub
		return menuRepo.save(menu);
	}

	public List<menu> getMenu() {
		// TODO Auto-generated method stub
		return menuRepo.findAll();
	}

	
	public boolean deleteMenu(menu Menu) {
		
		
//		Optional<menu> Menu = menuRepo.findById(id);
		
		
		if(Menu.isPresent()) {
			menuRepo.delete(Menu.get());
			return true;
		}
	
		return false;
	}
	
}
