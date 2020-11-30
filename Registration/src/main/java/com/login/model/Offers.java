package com.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Offers {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String Offers;
	private String price;
	private String discription;
	public Offers() {
		
	}
	public Offers(int id, String offers, String price, String discription) {
		super();
		this.id = id;
		Offers = offers;
		this.price = price;
		this.discription = discription;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOffers() {
		return Offers;
	}
	public void setOffers(String offers) {
		Offers = offers;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDiscription() {
		return discription;
	}
	public void setDiscription(String discription) {
		this.discription = discription;
	}
}
