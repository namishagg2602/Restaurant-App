package com.restaurant.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "order_id", nullable = false)
	private Long order_id;
	
	@Column(name = "table_id",nullable = false)
	private Long table_id;
	
	@Column(name = "item_id", nullable = false)
	private Long item_id;
	
	@Column(name = "item_name", nullable=false)
	private String item_name;
	
	@Column(name = "item_price", nullable = false)
	private double item_price;
	
	@Column(name = "qty_ord", nullable = false)
	private int qty_ord;
	
	@Column(name = "cust_notes")
	private String cust_notes;

	@Column(name = "status")
	private String status;

	public Long getOrder_id() {
		return order_id;
	}

	public void setOrder_id(Long order_id) {
		this.order_id = order_id;
	}

	public Long getTable_id() {
		return table_id;
	}

	public void setTable_id(Long table_id) {
		this.table_id = table_id;
	}

	public Long getItem_id() {
		return item_id;
	}

	public void setItem_id(Long item_id) {
		this.item_id = item_id;
	}

	public int getQty_ord() {
		return qty_ord;
	}

	public void setQty_ord(int qty_ord) {
		this.qty_ord = qty_ord;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getCust_notes() {
		return cust_notes;
	}

	public void setCust_notes(String cust_notes) {
		this.cust_notes = cust_notes;
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
	
}
