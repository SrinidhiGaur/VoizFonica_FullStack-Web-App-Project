package com.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserPlans {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String price;
	private String data;
	private String validity;
	
	public UserPlans() {
		
	}
	public UserPlans(int id, String price, String data, String validity) {
		super();
		this.id = id;
		this.price = price;
		this.data = data;
		this.validity = validity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getValidity() {
		return validity;
	}
	public void setValidity(String validity) {
		this.validity = validity;
	}
	
	
	
}
