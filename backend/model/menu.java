package com.restaurant.backend.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu")
public class menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long item_id;
	
	@Column(name = "item_name", nullable = false, unique = true)
	private String item_name;
	
	@Column(name = "item_category", nullable = false)
	private String item_category;

	@Column(name = "item_desc", nullable = false)
	private String item_desc;
	
	@Column(name = "item_price", nullable = false)
	private double item_price;
	
	@Column(name = "qty_avl", nullable = false)
	private int qty_avl;

	public Long getItem_id() {
		return item_id;
	}

	public void setItem_id(Long item_id) {
		this.item_id = item_id;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public double getItem_price() {
		return item_price;
	}

	public void setItem_price(double item_price) {
		this.item_price = item_price;
	}

	public int getQty_avl() {
		return qty_avl;
	}

	public void setQty_avl(int qty_avl) {
		this.qty_avl = qty_avl;
	}
	
	public String getItem_category() {
		return item_category;
	}

	public void setItem_category(String item_category) {
		this.item_category = item_category;
	}

	public String getItem_desc() {
		return item_desc;
	}

	public void setItem_desc(String item_desc) {
		this.item_desc = item_desc;
	}
	
}
