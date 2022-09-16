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

	@Column(name = "order_id")
	private Long order_id;
	
	@Column(name = "table_id")
	private Long table_id;
	
	@Column(name = "item_id")
	private Long item_id;
	
	@Column(name = "qty_ord", nullable = false)
	private int qty_ord;
	
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
	
	
}
