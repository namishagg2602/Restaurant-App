package com.restaurant.backend.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.restaurant.backend.model.menu;

public interface menuService {
	
	public menu saveMenu(menu menu);
	public List<menu> getMenu();
	public boolean  deleteMenu(@PathVariable Long id);
}
